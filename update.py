"""Periodic updater and autosave daemon for itd-frontend.

Runs main.py on schedule (default: every 2 hours), commits any detected changes to git,
and pushes them to the remote repository.
"""

import argparse
from datetime import datetime, timedelta
import logging
from os.path import abspath, dirname
from subprocess import PIPE, run
import sys
from time import sleep

from scheduler import Scheduler

logging.basicConfig(
    level=logging.INFO,
    format="[%(asctime)s] %(levelname)s: %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger("itd-updater")

WORKSPACE_DIR = dirname(abspath(__file__))


def has_git_changes() -> bool:
    """Check if there are any uncommitted changes in the repository."""
    res = run(["git", "status", "--porcelain"], cwd=WORKSPACE_DIR, capture_output=True, text=True)
    return bool(res.stdout.strip())


def update(push: bool = True):
    """Execute a single update cycle: run scraper, commit changes, and optionally push."""
    logger.info("Starting update cycle...")
    try:
        # Run main.py with the current Python environment
        res = run([sys.executable, "main.py"], cwd=WORKSPACE_DIR, check=True)
        logger.info("main.py finished successfully")
    except Exception as e:
        logger.error(f"Failed to execute main.py: {e}")
        return

    try:
        # Stage all changes
        run(["git", "add", "-A"], cwd=WORKSPACE_DIR, check=True)

        # Check if there's anything to commit
        if not has_git_changes():
            logger.info("No changes detected in frontend assets.")
            return

        commit_msg = f"autosave at {datetime.now().strftime('%d.%m %H:%M')}"
        run(["git", "commit", "-m", commit_msg], cwd=WORKSPACE_DIR, check=True)
        logger.info(f"Committed changes: '{commit_msg}'")

        if push:
            push_res = run(["git", "push"], cwd=WORKSPACE_DIR, capture_output=True, text=True)
            if push_res.returncode == 0:
                logger.info("Pushed changes to remote repository.")
            else:
                logger.warning(f"git push exited with code {push_res.returncode}: {push_res.stderr.strip()}")
        else:
            logger.info("Skipping git push (--no-push active).")

    except Exception as e:
        logger.error(f"Git operation error: {e}")


def main():
    parser = argparse.ArgumentParser(description="itd-frontend automated update daemon")
    parser.add_argument(
        "-s", "--single", "--once",
        action="store_true",
        dest="single",
        help="Run once immediately and exit",
    )
    parser.add_argument(
        "-i", "--interval",
        type=float,
        default=2.0,
        help="Update interval in hours (default: 2.0)",
    )
    parser.add_argument(
        "--no-push",
        action="store_true",
        help="Do not push commits to remote",
    )
    args = parser.parse_args()

    if args.single:
        logger.info("Running single update pass...")
        update(push=not args.no_push)
        return

    interval_td = timedelta(hours=args.interval)
    logger.info(f"Scheduling updates every {args.interval} hour(s)...")

    # Run first update on startup
    update(push=not args.no_push)

    schedule = Scheduler()
    schedule.cyclic(interval_td, lambda: update(push=not args.no_push))

    while True:
        try:
            schedule.exec_jobs()
            sleep(10)
        except KeyboardInterrupt:
            logger.info("Updater stopped by user.")
            break
        except Exception as e:
            logger.error(f"Unexpected error in scheduler loop: {e}")
            sleep(10)


if __name__ == "__main__":
    main()
