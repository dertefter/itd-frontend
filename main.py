"""Main scraper and decompiler for the ITD (итд.com) frontend.

Downloads all JavaScript, CSS, and SVG assets, deobfuscates/unminifies JS with Wakaru,
formats CSS stylesheets, and extracts SVG icons into organized directories.
"""

from collections import Counter
from concurrent.futures import ThreadPoolExecutor, as_completed
import glob as glob_module
import os
from os import makedirs
from os.path import basename, isdir, join
from re import findall, search, sub as re_sub
from shutil import copyfile, rmtree, which
from subprocess import run
import sys
from urllib.parse import quote, urljoin

from bs4 import BeautifulSoup
from requests import Session

from svg_extractor import extract_svgs

BASE_URL = "https://xn--d1ah4a.com"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:140.0) Gecko/20100101 Firefox/140.0"

# Ensure local node_modules/.bin and system nodejs directories are on PATH
workspace_root = os.path.dirname(os.path.abspath(__file__))
node_bin = join(workspace_root, "node_modules", ".bin")
nodejs_dir = r"C:\Program Files\nodejs"
current_path = os.environ.get("PATH", "")
extra_paths = [p for p in (node_bin, nodejs_dir) if p not in current_path and isdir(p)]
if extra_paths:
    os.environ["PATH"] = ";".join(extra_paths) + ";" + current_path

session = Session()


def _get_jhash(b: int) -> int:
    x = 123456789
    k = 0
    for i in range(1677696):
        x = ((x + b) ^ (x + (x % 3) + (x % 17) + b) ^ i) % 16776960
        if x % 117 == 0:
            k = (k + 1) % 1111
    return k


def _solve_ddos_guard(resp) -> bool:
    if "<html>" not in resp.text[:500] or "get_jhash" not in resp.text:
        return False
    js_p = session.cookies.get("__js_p_")
    if not js_p:
        return False
    code = int(js_p.split(",")[0])
    jhash = _get_jhash(code)
    print(f"DDoS-Guard challenge: code={code} -> jhash={jhash}")
    session.cookies.set("__jhash_", str(jhash), domain="xn--d1ah4a.com", path="/")
    session.cookies.set("__jua_", quote(UA, safe=""), domain="xn--d1ah4a.com", path="/")
    return True


def get(url: str):
    resp = session.get(url, headers={"User-Agent": UA})
    for _ in range(3):
        if not _solve_ddos_guard(resp):
            break
        resp = session.get(url, headers={"User-Agent": UA})
    return resp


def clear_dir(path: str):
    try:
        rmtree(path)
    except FileNotFoundError:
        pass
    makedirs(path, exist_ok=True)


def find_wakaru_bin() -> str | None:
    # 1. Direct which lookup
    found = which("wakaru")
    if found:
        return found
    # 2. Local node_modules bin
    candidates = [
        join(node_bin, "wakaru.cmd"),
        join(node_bin, "wakaru.CMD"),
        join(node_bin, "wakaru.exe"),
        join(node_bin, "wakaru"),
    ]
    for c in candidates:
        if os.path.isfile(c):
            return c
    return None


def decompile_single_js(wakaru_bin: str | None, src_path: str, dest_path: str) -> bool:
    makedirs(os.path.dirname(dest_path), exist_ok=True)
    if wakaru_bin:
        try:
            # Wakaru v1.x: wakaru <input> -o <output> --force
            res = run([wakaru_bin, src_path, "-o", dest_path, "--force"], capture_output=True, text=True, shell=True)
            if res.returncode == 0 and os.path.isfile(dest_path) and os.path.getsize(dest_path) > 0:
                return True
        except Exception as e:
            print(f"  wakaru error on {basename(src_path)}: {e}")

    # Fallback: copy raw JS if wakaru is unavailable or failed
    copyfile(src_path, dest_path)
    return False


def main():
    print("clear old files")
    clear_dir("raw")
    clear_dir("decompiled")

    print("fetching target HTML...")
    index_resp = get(BASE_URL)
    index_soup = BeautifulSoup(index_resp.text, "html.parser")

    # 1. Discover base scripts and base stylesheets from HTML
    base_script_src = None
    base_script = None
    html_assets = []

    for sc in index_soup.find_all("script"):
        src = sc.attrs.get("src")
        if src and "assets/" in src:
            base_script_src = src
            print(f"found base script: {src}")
            base_script = get(urljoin(BASE_URL, src)).text
            with open(f"raw/{basename(src)}", "w", encoding="utf-8") as fl:
                fl.write(base_script)
            html_assets.append(src)

    for link in index_soup.find_all("link"):
        href = link.attrs.get("href")
        rel = link.attrs.get("rel", [])
        if href and "assets/" in href and ("stylesheet" in rel or href.endswith(".css")):
            print(f"found base stylesheet: {href}")
            css_content = get(urljoin(BASE_URL, href)).text
            with open(f"raw/{basename(href)}", "w", encoding="utf-8") as fl:
                fl.write(css_content)
            html_assets.append(href)

    assert base_script, "Base script not found in HTML"

    # 2. Parse __vite__mapDeps file list
    deps_match = search(r"(?:m\.f|mapDeps)\s*=\s*\[(.+?)\]\)", base_script)
    if not deps_match:
        deps_match = search(r"\[\"assets/[^\"]+\"[^\]]*\]", base_script)

    dep_files = []
    if deps_match:
        dep_files = findall(r'"assets/([^"]+)"', deps_match.group(0))

    print(
        f"found {len(dep_files)} dep files "
        f"({sum(1 for f in dep_files if f.endswith('.css'))} css, "
        f"{sum(1 for f in dep_files if f.endswith('.js'))} js)"
    )

    # 3. Parse lazy page imports
    page_imports = {}

    for js_file, indices_str, component_name in findall(
        r'import\("\.\/([^"]+)"\),__vite__mapDeps\(\[([^\]]+)\]\)\)\.then\(e=>\(\{default:e\.(\w+)\}\)',
        base_script,
    ):
        indices = [int(x.strip()) for x in indices_str.split(",") if x.strip()]
        page_imports[component_name] = {"js_file": js_file, "dep_indices": indices}

    for js_file, component_name in findall(
        r'import\("\.\/([^"]+)"\),\[\]\)\.then\(e=>\(\{default:e\.(\w+)\}\)',
        base_script,
    ):
        page_imports[component_name] = {"js_file": js_file, "dep_indices": []}

    print(f"found {len(page_imports)} pages: {', '.join(page_imports.keys())}")

    # Determine shared dependencies across pages
    dep_usage = Counter()
    for info in page_imports.values():
        for idx in info["dep_indices"]:
            if idx < len(dep_files):
                dep_usage[dep_files[idx]] += 1

    shared_files = {f for f, count in dep_usage.items() if count > 1}

    # Map files to target destination directory: 'raw' or 'raw/<page>'
    file_dest = {}
    downloaded = set()

    # Assign base script and base stylesheet to raw root
    if base_script_src:
        file_dest[basename(base_script_src)] = "raw"
    for asset in html_assets:
        file_dest[basename(asset)] = "raw"

    # Download page-specific scripts and their dependencies
    print("downloading page assets...")
    for component_name, info in page_imports.items():
        page_dir = f"raw/{component_name.lower()}"
        makedirs(page_dir, exist_ok=True)

        js_file = info["js_file"]
        if js_file not in downloaded:
            downloaded.add(js_file)
            content = get(f"{BASE_URL}/assets/{js_file}").text
            with open(f"{page_dir}/{js_file}", "w", encoding="utf-8") as fl:
                fl.write(content)
        file_dest[js_file] = page_dir

        for idx in info["dep_indices"]:
            if idx >= len(dep_files):
                continue
            filename = dep_files[idx]
            dest_dir = "raw" if filename in shared_files else page_dir
            dest_path = f"{dest_dir}/{filename}"

            if filename not in downloaded:
                downloaded.add(filename)
                content = get(f"{BASE_URL}/assets/{filename}").text
                with open(dest_path, "w", encoding="utf-8") as fl:
                    fl.write(content)

            if filename not in file_dest:
                file_dest[filename] = dest_dir

    # 4. Download any remaining dependencies from __vite__mapDeps
    remaining_deps = [f for f in dep_files if f not in downloaded]
    if remaining_deps:
        print(f"downloading {len(remaining_deps)} shared/unassigned dep files...")
        for filename in remaining_deps:
            downloaded.add(filename)
            content = get(f"{BASE_URL}/assets/{filename}").text
            with open(f"raw/{filename}", "w", encoding="utf-8") as fl:
                fl.write(content)
            file_dest[filename] = "raw"

    # 5. Discover other dynamic imports (e.g. utility modules, route handlers)
    all_imports = findall(r'import\("\.\/([^"]+)"\)', base_script)
    unassigned_imports = [f for f in all_imports if f not in downloaded]
    if unassigned_imports:
        print(f"downloading {len(unassigned_imports)} additional dynamic imports...")
        for filename in unassigned_imports:
            downloaded.add(filename)
            content = get(f"{BASE_URL}/assets/{filename}").text
            with open(f"raw/{filename}", "w", encoding="utf-8") as fl:
                fl.write(content)
            file_dest[filename] = "raw"

    print("all files downloaded")

    # --- Decompile all JS files ---
    wakaru_bin = find_wakaru_bin()
    if wakaru_bin:
        print(f"wakaru decompiler found: {wakaru_bin}")
    else:
        print("warning: wakaru not found, JS files will be formatted/copied as fallback")

    all_raw_js = glob_module.glob("raw/**/*.js", recursive=True)
    print(f"decompiling {len(all_raw_js)} JS files...")

    def _task(src_file):
        rel = os.path.relpath(src_file, "raw")
        dest_file = join("decompiled", rel)
        decompile_single_js(wakaru_bin, src_file, dest_file)
        return rel

    with ThreadPoolExecutor(max_workers=4) as executor:
        futures = {executor.submit(_task, f): f for f in all_raw_js}
        done_count = 0
        for fut in as_completed(futures):
            done_count += 1
            print(f"  degraded/unminified [{done_count}/{len(all_raw_js)}] {fut.result()}       ", end="\r")

    print("\nJS decompilation finished")

    # --- Format all CSS with indentation ---
    all_css_files = glob_module.glob("raw/**/*.css", recursive=True)
    print(f"formatting {len(all_css_files)} CSS files...")
    for css_file in all_css_files:
        rel = os.path.relpath(css_file, "raw")
        out_file = join("decompiled", rel)
        makedirs(os.path.dirname(out_file), exist_ok=True)
        with open(css_file, "r", encoding="utf-8") as f:
            content = f.read()

        # Simple structured CSS beautifier
        content = re_sub(r"\s*\{\s*", " {\n    ", content)
        content = re_sub(r";\s*", ";\n    ", content)
        content = re_sub(r"\s*\}\s*", "\n}\n", content)
        with open(out_file, "w", encoding="utf-8") as f:
            f.write(content.strip() + "\n")
    print("CSS formatted")

    # --- Extract SVGs from all raw JS files ---
    print("extracting SVGs...")
    svg_dir = "decompiled/svg"
    makedirs(svg_dir, exist_ok=True)
    svg_count = 0
    seen_svgs = set()

    for js_file in glob_module.glob("raw/**/*.js", recursive=True):
        with open(js_file, "r", encoding="utf-8") as f:
            content = f.read()
        svgs = extract_svgs(content)
        stem = basename(js_file).replace(".js", "")
        for i, xml in enumerate(svgs):
            # Normalize XML to avoid minor whitespace duplicates
            normalized = " ".join(xml.split())
            if normalized in seen_svgs:
                continue
            seen_svgs.add(normalized)
            suffix = f"_{i + 1}" if len(svgs) > 1 else ""
            svg_path = f"{svg_dir}/{stem}{suffix}.svg"
            with open(svg_path, "w", encoding="utf-8") as f:
                f.write(f'<?xml version="1.0" encoding="utf-8"?>\n{xml}\n')
            svg_count += 1

    print(f"extracted {svg_count} unique SVGs into {svg_dir}")
    print("done")


if __name__ == "__main__":
    main()
