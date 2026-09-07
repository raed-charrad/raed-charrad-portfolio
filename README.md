# Raed Charrad — Portfolio

Personal portfolio site. React + Vite, no CSS framework, no UI library, no
animation library.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the built dist/ locally
```

## Before you publish

Search `CHECK` in [`src/data/profile.js`](src/data/profile.js).

1. **UltimateIT founding date.** Set to `2025` as a guess from the site's 2026
   copyright. Put your real start month in, and change the role title if you
   use something more specific — CTO, Technical Co-founder, and so on.
2. **NeoLibrary attribution.** Git history shows 7 of ~192 commits as yours,
   with Yassine SBOUI as primary author, so the panel reads *"Design system ·
   Contributor"*. Change it only if you owned more of it than the commits show.
3. **`C#` vs `C`.** The CV's PDF text layer dropped a `#`, so the languages line
   read `Python, C, SQL, …, Dart, C`. It is written here as **C# and C**.
4. **Two project years** — the airline platform, and the UltimateIT range.

Two merges and one omission worth knowing about:

- **Jibly Taw absorbed the CV's "Application mobile de livraison."** Same
  product — Laravel/Vue, three roles, live map tracking — so it is listed once,
  under its real name, rather than twice.
- **The FAST connector** names FAST and Elise as integrated products but no
  customer, which is the line that matters for confidentiality.
- **No tech stack is invented for the UltimateIT products.** ultimateit.io
  publishes none; Laravel and Vue are there because you said so.

## Editing content

**All copy lives in [`src/data/profile.js`](src/data/profile.js).** No component
contains any text.

| Export | Controls |
| --- | --- |
| `profile` | Name, role, location, email, phone, tagline, bio, links, portrait, CV |
| `pipeline` | The stages in the animated hero diagram, in data-flow order |
| `metrics` | The counted-up figures under the hero — CV-backed only |
| `now` | The "What I'm building now" cards |
| `experience` | The experience list (`end: 'Present'` shows a live badge) |
| `projects` | The work grid (`featured: true` makes a panel full-width; `links: []` lists several live deployments instead of one `href`) |
| `skillGroups` | The stack rows (`accent: 'model'` tints a group amber) |
| `education`, `languages` | The two fact blocks beside About |
| `nav` | Nav items — each `id` must match a section id in `App.jsx` |

`now` is the section that decides whether the site looks alive or archived.
Keep it current; it takes a minute.

### Adding your CV as a download

No CV is published: `resume` is `null`, so the top-bar button is a "Contact"
mailto instead. To offer a download, drop the PDF in `public/` and point
`resume` at it — but note the CV carries your phone number. Your phone also
appears in the contact section independently; delete `profile.phone` to drop it.

### Adding a photo

Put the image in `public/` and set `portrait: '/portrait.jpg'`.

## Deploying

The repo is **private**, and GitHub Pages does not serve private repos on a
free account — making it private deleted the Pages configuration outright, so
the old `raed-charrad.github.io/raed-charrad-portfolio/` URL 404s. The site now
builds from the private repo on a host that supports that for free.

Everything is prepared: `base` is `/`, [`netlify.toml`](netlify.toml) carries
the build settings, `public/_headers` sets caching, and `.nvmrc` pins Node 20.
Connect the repo once and every push deploys.

**Cloudflare Pages** — Workers & Pages → Create → Pages → Connect to Git →
pick this repo. Framework preset `Vite`, build command `npm run build`, output
directory `dist`. Gives `<project>.pages.dev`.

**Netlify** — Add new site → Import from Git → pick this repo. It reads
`netlify.toml`, so the build command and publish directory are already set.
Gives `<site>.netlify.app`.

Both read `public/_headers` from the published output. Both accept a custom
domain, which is worth doing — a portfolio on your own domain reads better than
a platform subdomain.

**Note on privacy:** a private repo keeps the *source* private. The published
site is public either way — anyone with the URL sees every word of it. If the
concern is the FAST connector and NeoForm write-ups describing NeoLedge's
internal architecture, that has to be fixed in the content, not the repo
visibility.

**Going back to GitHub Pages** would mean making the repo public again (or
paying for GitHub Pro) and setting `base` back to `'/raed-charrad-portfolio/'`
in [`vite.config.js`](vite.config.js), or every asset 404s. The workflow that
did it is recoverable from git history.

## Design

**Concept — node canvas.** The site is staged as the workflow-editor surface
this work actually lives in: a dot-grid canvas, panels that read as nodes, and a
left rail that is the pipeline spine.

**Colour.** `#0a0d12` blue-black ground, `#111823` panels, `#1e2836` rules,
`#e7ecf3` ink. Three accents assigned **by role**, not by decoration:

| Token | Hex | Means |
| --- | --- | --- |
| `--flow` | `#4c8dff` | Data flow, links, primary actions |
| `--model` | `#ffb067` | AI / ML — the embedding and classifier stages, the Data & AI stack row |
| `--live` | `#46d39a` | Status only — "current", "shipping" |

**Type.** Bricolage Grotesque (display, 700/800) · IBM Plex Sans (body) ·
IBM Plex Mono (node labels, dates, metrics, chips).

Everything is tokenised at the top of
[`src/styles/global.css`](src/styles/global.css). The site deliberately commits
to one dark visual world, so there is no theme switch and every colour is
painted explicitly rather than inherited from the browser.

## The animations

| Where | What | Notes |
| --- | --- | --- |
| Hero | The pipeline diagram: nodes for the real stages, data travelling the edges, each stage highlighting in turn | Canvas 2D, one `requestAnimationFrame` loop |
| Hero | Focus line cycling Full Stack → Data Engineering → Applied AI | All values stay in the DOM; only the active one is shown, so the line is never empty |
| Background | Cobalt glow tracking the pointer | Writes `--px`/`--py` on `:root` from a rAF-throttled listener, so React never re-renders |
| Metrics | Figures counting up when scrolled into view | ease-out cubic, so they settle rather than stop dead |
| Sections | Children fading up with a 70 ms stagger | `IntersectionObserver`, fires once |
| Panels | Sheen following the cursor inside the panel, plus a lift | Writes `--mx`/`--my` on the element |
| Rail | Section node fills as you pass it | Shares one `IntersectionObserver` with the top bar |

Two rules the code sticks to:

- **The hero never animates in.** It renders at full opacity, so the first
  painted frame — and any link preview or thumbnail — shows the real page. The
  motion up there comes from the always-running diagram, not an entrance.
- **`prefers-reduced-motion` kills all of it.** The diagram draws one static
  frame, counters jump to their final value, the pointer glow is removed, and
  reveals resolve to visible.

### The pipeline diagram

[`src/components/Pipeline.jsx`](src/components/Pipeline.jsx) measures its own
text and steps down through four layouts — full labels, short labels, five
stages, four stages — picking the first that fits the available width, so labels
are never clipped or overlapped at any screen size. It re-measures on resize and
again once the webfont loads, since that changes the metrics. Colours are read
from the CSS custom properties at mount, so the palette has one source of truth.

## Accessibility

Skip link, `aria-current` on the active nav and rail items, visible focus rings,
screen-reader labels on the rail's dot links, an `aria-label` on the canvas
describing the pipeline, and project panels that only become focusable anchors
when they actually have a link.

## Structure

```
index.html              fonts, meta tags, theme colour
public/
  favicon.svg           node-and-edge mark
  raed-charrad-cv.pdf
src/
  main.jsx              React root
  App.jsx               page composition and section order
  hooks.js              reveal, active section, cycle, count-up, pointer glow, sheen
  data/profile.js       ← all content
  styles/global.css     design tokens + all styles
  components/
    Chrome.jsx          backdrop, rail, top bar, section wrapper, chips, arrow
    Hero.jsx            status, name, focus line, actions, metrics
    Pipeline.jsx        the animated canvas diagram
    Panels.jsx          now, about, work, experience, stack, contact
```
