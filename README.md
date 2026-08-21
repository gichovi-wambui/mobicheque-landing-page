# MobiCheque — marketing site

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 · plain JS.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run lint         # eslint (must be clean before committing)
```

Read [TODO.md](./TODO.md) before putting this in front of an institution. It
lists the placeholders and unverified claims that a bank's due diligence will
check.

---

## Pages

| Route | Written for | Notes |
| --- | --- | --- |
| `/` | First-time visitor | Positioning, product glimpse, routes to the deeper pages |
| `/product` | Anyone evaluating | Click-through tour of both surfaces + annotated cheque |
| `/security` | Risk, security, compliance | Controls, data inventory, honest posture, pre-answered questionnaire |
| `/integration` | IT and integration | Boundary diagram, deployment models, connection paths, pilot plan |
| `/for-banks` | Operations and finance | Cost model, ROI calculator, what we will not claim |
| `/for-saccos` | SACCO decision makers | Lighter on architecture, heavier on member service |
| `/about` | Everyone | Positions, team, contact |

Adding a page? Update `app/sitemap.js`, `components/Navbar.jsx`,
`components/Footer.jsx` and, if it is a buyer page, `components/DeepDive.jsx`.

---

## Design system

Tokens live in `app/globals.css` under `:root` and are exposed to Tailwind
through `@theme inline`. **Use the token classes, never raw hex.**

| Purpose | Class |
| --- | --- |
| Brand green | `mc-green`, `mc-green-deep`, `mc-green-dark` |
| Green surfaces | `mc-green-tint`, `mc-green-wash` |
| Text | `mc-ink`, `mc-ink-soft`, `mc-muted`, `mc-faint` |
| Surfaces | `mc-white`, `mc-surface` |
| Lines | `mc-border`, `mc-border-soft` |
| Status | `mc-amber` / `mc-amber-tint`, `mc-red` / `mc-red-tint` |
| Elevation | `shadow-mc-sm`, `shadow-mc-md`, `shadow-mc-lg`, `shadow-mc-green` |

Sections alternate `bg-white` and `bg-mc-surface`. **Never put a
`bg-mc-surface` card on a `bg-mc-surface` section** — the card disappears.
This bug has shipped twice; check it when you reorder sections.

Icons are custom SVG in `components/Icons.jsx`, all on a 24×24 grid at 1.6
stroke. There are no emoji anywhere and there should not be.

---

## Component inventory

**Layout & primitives**
`Navbar` · `Footer` · `PageHero` (interior page headers) · `SectionHeading`
(eyebrow + h2 + description, correct hierarchy) · `Button` · `Callout`
(`tone="info" | "planned" | "warning"`) · `Reveal` (scroll fade-in)

**Chrome, mounted globally in `app/layout.js`**
`ScrollProgress` · `BackToTop` · `MobileCta` · `StructuredData` (JSON-LD)

**In-page navigation**
`SectionNav` — sticky section rail for long pages. Takes `[{ id, label }]`
and expects matching ids on the page's `<section>` elements. Its
`top-[73px]` matches the navbar height; if you change navbar padding, change
this too.

**Product illustration** (all DOM, no image assets, no backend)
`PhoneMock` (animated hero capture) · `ProductTour` (tabbed click-through of
app + console) · `ChequeAnnotator` (hoverable cheque regions) ·
`ArchitectureDiagram` (the boundary) · `Console` (reviewer queue) ·
`RoiCalculator` (client-side, nothing is transmitted)

---

## Mobile

```bash
npm run start                       # in one terminal
npm run audit:mobile                # in another
```

`scripts/mobile-audit.mjs` loads every route at 320 / 360 / 414 / 768 and
fails if the document scrolls horizontally, naming the offending elements.
It ignores anything clipped by an `overflow-hidden` ancestor or inside an
`overflow-x-auto` scroller, so decorative blobs and wide tables do not
produce false positives.

It also **verifies the stylesheet actually applied** before measuring. An
unstyled page never overflows, so a stale server serving 500s for its CSS
chunk would otherwise make every check pass for the wrong reason. If you see
`SKIP ... CSS did not apply`, kill every stray `next` process, rebuild, and
restart before trusting anything.

### The trap that caused a real bug

Grid and flex items default to `min-width: auto`, so a child with a
`min-w-[…]` **inflates the whole track instead of scrolling inside its
wrapper**. The console table did exactly this and pushed the homepage 266px
wide on a 320px phone. Any grid/flex item containing a wide table needs
`min-w-0` — see the comment in `components/Console.jsx`.

Screenshots: `node scripts/shot.mjs <url> <out.png> <width> [full]`

---

## Conventions

- Client components need `"use client"`. Most are server components; keep it
  that way unless you need state or effects.
- Never call `setState` synchronously in an effect body — eslint's
  `react-hooks/set-state-in-effect` will fail the build. Defer with a
  `setTimeout(fn, 0)` and clear it on unmount.
- Use `next/link` for internal navigation and `next/image` for images;
  eslint enforces both.
- Respect `prefers-reduced-motion` — `globals.css` disables animation
  globally, and JS-driven sequences check it themselves.
- Keep copy inside the product's real limits: MobiCheque verifies and tracks
  cheques, never clears or settles, and never auto-approves. If you find
  yourself writing a percentage, check that a pilot actually produced it.
