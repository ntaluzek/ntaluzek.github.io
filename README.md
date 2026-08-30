# ntaluzek.github.io

Personal site and blog, built with [Hugo](https://gohugo.io/) and the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme. Deploys automatically to GitHub Pages on every push to `main` via GitHub Actions (see `.github/workflows/hugo.yml`).

## Local development

```
hugo server -D
```

`-D` (or `--buildDrafts`) includes draft posts in the local preview. Without it, drafts are hidden — matching what the live site will show.

## Writing a new post

Posts live under `content/<topic>/<slug>/index.md` as page bundles (the post and any images it uses share one folder). Current topics: `food`, `woodworking`, `3d-printing`.

Create a new post with:

```
hugo new content food/2026-08-08-bagels/index.md
```

This automatically uses `archetypes/food.md` for the starting frontmatter (title, date, `draft: true`, description, tags, cover image fields). Each topic has its own archetype in `archetypes/` — copy one to start a new topic.

Add any images for the post directly into that post's folder alongside `index.md`, and reference them by filename, e.g.:

```markdown
![Alt text](cover.jpg)
```

### Publishing

1. Write the post with `draft: true` (the archetype default) — it stays out of the live build.
2. Preview locally with `hugo server -D`.
3. When ready, set `draft: false` in the post's frontmatter.
4. Commit and push to `main` — GitHub Actions rebuilds and redeploys automatically.

### Useful commands

- `hugo list drafts` — list all posts currently marked as drafts.
- `hugo new content <topic>/<slug>/index.md` — scaffold a new post.
- `hugo server -D` — local preview including drafts.

## Editing in Obsidian

Content is written in plain Markdown with YAML frontmatter, so it can be edited directly in [Obsidian](https://obsidian.md/).

Open `content/` (not the repo root) as its own Obsidian vault: **Open folder as vault** → select `Blog/content`. Scoping the vault to `content/` keeps Obsidian's file explorer focused on posts only, hiding Hugo's config/layouts/theme files.

Recommended vault settings (Settings → Files and Links):

- **Default location for new attachments**: "Same folder as current file" — so images you paste or drag into a note land next to that post's `index.md`, matching Hugo's page-bundle convention.
- **New link format**: "Relative path to file".
- **Use Wikilinks**: off — Hugo doesn't understand `[[image.jpg]]` syntax; this keeps Obsidian writing standard `![](image.jpg)` Markdown.

With these set, Obsidian's Properties panel will show and let you edit each post's `title`, `date`, `draft`, `tags`, and `description` directly (frontmatter is YAML, which Obsidian's Properties UI understands natively).

The `.obsidian/` settings folder this creates inside `content/` is git-ignored — it's treated as local-machine preference, not synced. If you set up this vault on another machine, reconfigure the settings above there too.
