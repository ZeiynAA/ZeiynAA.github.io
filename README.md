# zeiyn.com

Personal site and essays — <https://zeiyn.com>. Monochrome, light + dark,
Space Grotesk + IBM Plex Mono.

Built with **Jekyll** on **GitHub Pages** (no Gemfile; Pages builds on push to `main`,
live in ~1 minute). Posts can also be written in the browser via
[Pages CMS](https://app.pagescms.org) — config in `.pages.yml`.

## Structure

```
_config.yml          Site settings, post defaults, plugins (jekyll-feed, jekyll-sitemap)
_layouts/default.html  Shared <head>, header/nav, footer — edit once, applies everywhere
_layouts/post.html     Wrapper for essays
_posts/              Essays: YYYY-MM-DD-slug.md  →  /posts/<slug>/
index.html           Home (front matter sets heading + lede)
about.html           About + Now
projects.html        Projects grid
writing.html         All posts, newest first (auto-generated from _posts/)
styles.css           Whole design system — tokens at the top in :root
script.js            Theme toggle + footer year (site works without JS)
assets/              favicon.svg, og.svg (source) → og.png (social card, 1200×630), uploads/
robots.txt           Points crawlers at /sitemap.xml
trip/                Retired "Rumbo" trip app — farewell page + kill-switch service
                     worker. Keep it: it unregisters the old PWA on devices that still have it.
```

Generated at build time: `/feed.xml` (Atom), `/sitemap.xml`.

## Writing a post

Front matter:

```yaml
---
title: My essay
date: 2026-10-04
summary: One or two sentences — shown in post lists and used as the meta/social description.
description: (optional) override for search/social if it should differ from summary
---
```

Nested lists need **3 spaces** of indent under `1. ` items, or kramdown flattens them.

## Social card

Edit `assets/og.svg`, then re-render the PNG (social platforms don't read SVG):

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --hide-scrollbars \
  --window-size=1200,630 --screenshot="$PWD/assets/og.png" "file://$PWD/assets/og.svg"
```

## Deploy

`git push` to `main`. DNS: A records on `@` → GitHub Pages IPs, `www` CNAME →
`zeiynaa.github.io`. Full runbook lives in the Obsidian vault ("zeiyn.com — Handover").
