"""Interactive and CLI Diff Viewer for itd-frontend.

View differences between versions of decompiled JS/CSS files:
- Compare two files: `python diff.py path/to/old.js path/to/new.js`
- Compare a file against git HEAD: `python diff.py decompiled/index-B4ySybtH.js`
- Compare against a specific git revision: `python diff.py --commit HEAD~1 decompiled/somefile.js`
- Auto-detect changed files: `python diff.py`
"""

import argparse
import difflib
import os
from subprocess import PIPE, run
import sys

from textual import containers
from textual.app import App, ComposeResult
from textual.binding import Binding
from textual.widgets import Footer, Header, Static
from textual_diff_view import DiffView


def get_git_file_content(path: str, revision: str = "HEAD") -> str | None:
    """Retrieve content of a file at a specific git revision."""
    rel_path = os.path.relpath(path).replace("\\", "/")
    res = run(["git", "show", f"{revision}:{rel_path}"], capture_output=True, text=True)
    if res.returncode == 0:
        return res.stdout
    return None


def get_changed_files(revision: str = "HEAD") -> list[str]:
    """Get list of modified/added files compared to revision or between last two commits."""
    # 1. Uncommitted working tree changes
    res = run(["git", "diff", "--name-only", revision], capture_output=True, text=True)
    files = [f.strip() for f in res.stdout.splitlines() if f.strip()]
    if files:
        return files

    # 2. Check changes in last commit
    res = run(["git", "diff", "--name-only", f"{revision}~1", revision], capture_output=True, text=True)
    return [f.strip() for f in res.stdout.splitlines() if f.strip()]


class ITDDiffApp(App):
    """Textual TUI for viewing side-by-side or unified code diffs."""

    CSS = """
    Screen {
        background: $surface;
    }
    #diff-container {
        height: 1fr;
        width: 1fr;
    }
    """

    BINDINGS = [
        Binding("q", "quit", "Quit", show=True),
        Binding("escape", "quit", "Exit", show=False),
    ]

    def __init__(self, name_old: str, name_new: str, code_old: str, code_new: str, split: bool = True):
        super().__init__()
        self.name_old = name_old
        self.name_new = name_new
        self.code_old = code_old
        self.code_new = code_new
        self.split = split

    def compose(self) -> ComposeResult:
        yield Header(show_clock=True)
        with containers.VerticalScroll(id="diff-container"):
            yield DiffView(
                self.name_old,
                self.name_new,
                self.code_old,
                self.code_new,
                split=self.split,
            )
        yield Footer()


def print_cli_diff(name_old: str, name_new: str, code_old: str, code_new: str):
    """Print unified diff to standard output."""
    lines_old = code_old.splitlines(keepends=True)
    lines_new = code_new.splitlines(keepends=True)
    diff = difflib.unified_diff(lines_old, lines_new, fromfile=name_old, tofile=name_new)
    has_diff = False
    for line in diff:
        has_diff = True
        if line.startswith("+") and not line.startswith("+++"):
            print(f"\033[92m{line}\033[0m", end="")
        elif line.startswith("-") and not line.startswith("---"):
            print(f"\033[91m{line}\033[0m", end="")
        elif line.startswith("@"):
            print(f"\033[96m{line}\033[0m", end="")
        else:
            print(line, end="")
    if not has_diff:
        print(f"Files '{name_old}' and '{name_new}' are identical.")


def main():
    parser = argparse.ArgumentParser(description="ITD Frontend Diff Viewer")
    parser.add_argument("files", nargs="*", help="File(s) to diff (1 file to compare with git, 2 files to compare each other)")
    parser.add_argument("-c", "--commit", default="HEAD", help="Git commit / revision to compare against (default: HEAD)")
    parser.add_argument("--cli", action="store_true", help="Print unified diff to terminal instead of launching TUI")
    parser.add_argument("--unified", action="store_true", help="Use unified mode in TUI instead of side-by-side split")

    args = parser.parse_args()

    file_old = ""
    file_new = ""
    code_old = ""
    code_new = ""

    if len(args.files) == 2:
        file_old = args.files[0]
        file_new = args.files[1]
        if not os.path.isfile(file_old):
            print(f"Error: file not found: {file_old}", file=sys.stderr)
            sys.exit(1)
        if not os.path.isfile(file_new):
            print(f"Error: file not found: {file_new}", file=sys.stderr)
            sys.exit(1)

        with open(file_old, "r", encoding="utf-8", errors="replace") as f:
            code_old = f.read()
        with open(file_new, "r", encoding="utf-8", errors="replace") as f:
            code_new = f.read()

    elif len(args.files) == 1:
        target_file = args.files[0]
        if not os.path.isfile(target_file):
            print(f"Error: file not found: {target_file}", file=sys.stderr)
            sys.exit(1)

        file_old = f"{target_file} ({args.commit})"
        file_new = f"{target_file} (working tree)"
        code_old = get_git_file_content(target_file, args.commit)
        if code_old is None:
            print(f"Warning: file {target_file} did not exist in {args.commit}, comparing against empty.")
            code_old = ""
        with open(target_file, "r", encoding="utf-8", errors="replace") as f:
            code_new = f.read()

    else:
        # Auto-detect changed files
        changed = get_changed_files(args.commit)
        decompiled_changed = [f for f in changed if f.startswith("decompiled/") and (f.endswith(".js") or f.endswith(".css"))]
        candidates = decompiled_changed or changed

        if not candidates:
            print("No changed files found in repository to diff.")
            sys.exit(0)

        print(f"Detected {len(candidates)} changed file(s):")
        for i, c in enumerate(candidates, 1):
            print(f"  [{i}] {c}")

        target_file = candidates[0]
        print(f"\nShowing diff for: {target_file} (use 'python diff.py <file>' to choose a specific file)")

        file_old = f"{target_file} ({args.commit})"
        file_new = f"{target_file} (working tree)"
        code_old = get_git_file_content(target_file, args.commit) or ""
        if os.path.isfile(target_file):
            with open(target_file, "r", encoding="utf-8", errors="replace") as f:
                code_new = f.read()
        else:
            code_new = ""

    if args.cli:
        print_cli_diff(file_old, file_new, code_old, code_new)
    else:
        app = ITDDiffApp(
            file_old,
            file_new,
            code_old,
            code_new,
            split=not args.unified,
        )
        app.run()


if __name__ == "__main__":
    main()
