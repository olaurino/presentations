#!/usr/bin/env python3
"""
Utility for keeping the GitHub Pages listing in sync with the repository.

The script scans the repository for files named ``output/slides.html`` and
extracts basic metadata (title and description) to populate
``data/presentations.json`` used by the landing page.
"""
from __future__ import annotations

import json
import re
from html import unescape
from pathlib import Path


RE_TITLE = re.compile(r"<title>(.*?)</title>", re.IGNORECASE | re.DOTALL)
RE_DESCRIPTION = re.compile(
    r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']',
    re.IGNORECASE | re.DOTALL,
)


def extract_metadata(slides_path: Path) -> tuple[str | None, str | None]:
    """Return (title, description) parsed from the given slide deck."""
    raw = slides_path.read_text(encoding="utf-8", errors="ignore")
    title_match = RE_TITLE.search(raw)
    desc_match = RE_DESCRIPTION.search(raw)
    title = unescape(title_match.group(1).strip()) if title_match else None
    description = (
        unescape(desc_match.group(1).strip()) if desc_match else None
    )
    return title, description


def slugify(path: Path) -> str:
    """Create a stable identifier from a relative path."""
    return "-".join(part for part in path.parts if part not in {"output", "slides.html"})


def build_manifest(repo_root: Path) -> list[dict[str, str]]:
    """Collect and structure all slide decks."""
    manifest: list[dict[str, str]] = []
    for slides_path in sorted(repo_root.glob("**/output/slides.html")):
        rel_path = slides_path.relative_to(repo_root)
        parts = rel_path.parts
        category = parts[0] if len(parts) > 0 else "presentations"
        event = parts[1] if len(parts) > 1 else ""

        title, description = extract_metadata(slides_path)
        manifest.append(
            {
                "id": slugify(rel_path),
                "title": title or rel_path.stem.title(),
                "description": description or "",
                "path": "/".join(parts),
                "category": category,
                "event": event,
            }
        )
    return manifest


def main() -> None:
    repo_root = Path(__file__).resolve().parents[1]
    manifest = build_manifest(repo_root)
    output_path = repo_root / "data" / "presentations.json"
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(
        json.dumps(manifest, indent=2, sort_keys=False) + "\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
