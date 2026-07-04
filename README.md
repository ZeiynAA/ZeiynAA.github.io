# zeiyn.com

A small, self-contained personal website — plain HTML, one CSS file, and a little
JavaScript. No build step, no dependencies. Design inspired by
[zidhuss.tech](https://zidhuss.tech), rendered in a monochrome (black / white / grey)
palette with light + dark themes.

## Structure

```
index.html         Home — greeting + previews of projects & writing
about.html         About / bio
projects.html      Full projects grid
writing.html       List of writings
posts/
  hello-world.html Sample post (copy this to start a new one)
styles.css         The whole design system (edit tokens at the top)
script.js          Theme toggle + footer year (site works without JS too)
assets/
  favicon.svg      Monochrome "Z" mark (adapts to light/dark)
  og.svg           Social-share preview placeholder
CNAME              Custom domain for GitHub Pages
```

## Preview locally

The site uses root-relative paths (`/styles.css`), so serve it from a local web
server rather than opening the files directly:

```sh
cd ~/zeiyn.com
python3 -m http.server 8000
```

Then open <http://localhost:8000/>. Stop the server with `Ctrl-C`.

## Make it yours

All placeholder copy is marked with `<!-- TODO: ... -->` comments. The main things to
replace:

- **Name & greeting** — `index.html` (the `<h1>` and `.lede`) and every page header.
- **Bio** — `about.html` (the `.prose` block).
- **Projects** — the `<article class="project">` blocks in `index.html` (preview) and
  `projects.html` (full list).
- **Writing** — entries in `writing.html`; each real post is a file in `posts/`
  (duplicate `hello-world.html`).
- **Social links** — the `.social` list in every page footer (email, GitHub, X,
  LinkedIn — add/remove as you like).
- **Colours / spacing / fonts** — the CSS custom properties at the top of `styles.css`
  (`:root { … }`). It's monochrome by design; set a single accent variable there if you
  ever want one.

The footer/header markup is duplicated across pages (there's no templating engine), so
if you change one, update the others — a find-and-replace across the `.html` files does it.

## Deploy

Any static host works. Three easy options:

- **Netlify** — drag the `zeiyn.com` folder onto <https://app.netlify.com/drop>, then
  point your domain at it. (Netlify ignores the `CNAME` file; set the domain in its UI.)
- **Cloudflare Pages** — connect a Git repo or upload the folder; add `zeiyn.com` as a
  custom domain.
- **GitHub Pages** — push this folder to a repo, enable Pages, and the included `CNAME`
  file wires up the `zeiyn.com` custom domain automatically.

For any of them, add DNS records at your registrar pointing `zeiyn.com` at the host
(the provider's dashboard shows the exact `A`/`CNAME` values).

> Note: `assets/og.svg` is the social-share image. Some platforms (older Twitter/X,
> some chat apps) only render raster images — if you need maximum compatibility, export
> it to `og.png` (1200×630) and update the `og:image` URLs.
