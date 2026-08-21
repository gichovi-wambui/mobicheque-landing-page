# Before this site goes in front of an institution

Everything below is a placeholder, an unverified claim, or a gap. A bank's
due diligence will check these. Fix them before sending the link.

## Blocking — do not publish without these

### Team page (`app/about/page.js`)
- [ ] Replace all three `TEAM` entries with real names, roles and bios.
- [ ] Add photos to `public/team/` and wire up the `photo` field, or leave
      initials (initials are fine; fake names are not).
- [ ] Placeholder people are worse than no team page. If you are not ready to
      name the team, delete the team section rather than shipping placeholders.

### Data residency (`app/integration/page.js`)
- [ ] Replace the "Confirm before publishing" callout with your actual hosting
      provider and region. Kenyan institutions increasingly require in-country
      residency — a vague answer stalls reviews.

### Security posture (`app/security/page.js`)
- [ ] Confirm your registration status with the Office of the Data Protection
      Commissioner and update the `POSTURE` entry.
- [ ] Fill in the "Where is data hosted?" questionnaire answer.
- [ ] Fill in the "Can MobiCheque staff see our cheque data?" answer with your
      actual internal access policy.
- [ ] Fill in the incident response answer: detection, containment, your
      notification commitment and timeline.
- [ ] Fill in the availability answer: target uptime, maintenance windows,
      support hours, escalation path.

### Deployment claims (`app/integration/page.js`)
- [ ] The page offers managed cloud, private cloud and on-premise. Delete any
      you cannot actually deliver today. Do not offer on-premise to a bank
      unless you can execute it.
- [ ] Confirm the REST API, webhook and batch paths exist. Move anything
      unbuilt to a roadmap statement.

## Verify with counsel

- [ ] Kenya Data Protection Act 2019 obligations — your controller vs processor
      role, DPA template for institutional contracts, retention and deletion.
- [ ] Whether anything you do requires a CBK position or notification.
- [ ] Confirm the description of sitting "upstream of your clearing process" is
      accurate for how Kenyan cheque truncation actually works in practice.
- [ ] Professional indemnity and cyber liability insurance — procurement will
      ask for certificates.

## Trust signals to go and earn

Ranked by return per shilling. None of these can be designed — they have to
be obtained.

1. [ ] **One real pilot with measured numbers.** A single SACCO running 500
       cheques over six weeks beats every design decision on this site
       combined. It also unlocks the claims currently marked "we will not
       claim" on `/for-banks`.
2. [ ] **Independent penetration test.** Strongest signal per shilling. Publish
       the summary and remediation status on `/security`.
3. [ ] **A named advisor from banking operations.** Instant borrowed
       credibility with a buyer who does not know you.
4. [ ] **ODPC registration**, displayed on `/security`.
5. [ ] **Status page** with real uptime history.
6. [ ] **ISO 27001 or SOC 2.** Slow and expensive, but the ticket to tier-1
       banks. Start the conversation early — it takes longer than you think.

## Content still missing

- [ ] Legal pages: `/legal/privacy`, `/legal/terms`, `/legal/dpa`. The footer
      does not link to these yet because they do not exist.
- [ ] Downloadable security whitepaper — the artefact a CISO forwards
      internally. (The `/security` page content is a good starting draft.)
- [ ] Case study / pilot report, once you have one.
- [x] Open Graph share image — generated at build time by
      `app/opengraph-image.js`. Verified rendering at 1200x630.
- [ ] `metadataBase` in `app/layout.js` is set to `https://mobicheque.co.ke`.
      Change it if that is not the production domain.

## Product gaps that affect the sales story

- [ ] **Every cheque currently routes to manual review.** The site is written
      honestly around this ("assisted review", not automation) and
      `/for-banks` states it outright. But banks will ask for a
      straight-through-processing rate. Either build the decision layer and
      measure a real rate, or hold the assisted-review framing deliberately.
- [ ] The demo form composes an email rather than posting to a backend. Swap
      `handleSubmit` in `components/Demo.jsx` when an endpoint exists.

## Deferred decision

- [ ] **Positioning.** The site currently leads bank-first: institutions are
      the primary buyer across the nav and interior pages, with individuals as
      a secondary section on the landing page. If you actually intend the
      consumer-marketplace model instead, say so — it changes the whole site,
      and it raises authorisation and liability questions that need answers.

## Added since the first pass

- `/product` — interactive tour of both surfaces (app + console). Uses
  illustrative sample data, clearly labelled as such on the page.
- `/for-saccos` — separate from `/for-banks`, because a SACCO buys
  differently: smaller team, member experience over integration depth.
- Open Graph image, generated at build time.

### Still not built

- [ ] **Live sandbox** — let a prospect upload a real cheque image and watch
      the OCR run. This is the single most persuasive thing the site could
      have, and it is the last item on the original sequence. It needs
      backend work: an endpoint, rate limiting, abuse protection, and a
      scrubbed sample set. Not a front-end task.
- [ ] Legal pages (`/legal/privacy`, `/legal/terms`, `/legal/dpa`). Not
      drafted deliberately — a published privacy policy that misstates your
      actual data practices is a liability, and this is counsel work, not
      copywriting. The data inventory on `/security` is the right input to
      hand your lawyer. The footer does not link to these yet.
- [ ] Case study / pilot report — blocked on running a pilot.

## Mobile pass — done

- [x] **Homepage horizontal overflow fixed.** The console table's
      `min-w-[560px]` was inflating its grid track (grid items default to
      `min-width: auto`), pushing the page 266px wide on a 320px phone.
      Fixed with `min-w-0` in `components/Console.jsx`.
- [x] Phone mocks were fixed `w-[300px]` and overflowed a 320px viewport.
      Now `w-full max-w-[300px]`.
- [x] How It Works step detail was `hidden lg:block`, so mobile users saw
      none of it. Now rendered inline on small screens.
- [x] Cheque annotator regions were far below the 44px touch target
      minimum. Touch users get a chip selector instead.
- [x] MICR sample used OCR-A glyphs that render as tofu on many Android
      devices. Replaced with plain text.
- [x] Verified at 320 / 360 / 414 / 768 across all 8 routes: no horizontal
      overflow. Run `npm run audit:mobile` to re-check.

## Added for future work

- `npm run audit:mobile` — catches horizontal overflow on every route at
  four widths, and refuses to report a pass if the CSS did not load.
- `npm run shot` — screenshot any route at any width.
- `README.md` — design tokens, component inventory, conventions, and the
  grid `min-width: auto` trap that caused the overflow bug.
- Custom `404` and a route-level error boundary.
- `sitemap.xml` and `robots.txt`, generated from `app/sitemap.js`.
- JSON-LD structured data (Organization + SoftwareApplication) so search
  engines and AI assistants describe the product accurately rather than
  guessing. Claims are deliberately narrow and match the site copy.
- Sticky mobile CTA bar, which hides itself when the demo form is in view.

### Note on analytics

Still not added. Without it you cannot tell whether anyone opens
`/security` — which is the page most likely to decide a deal. A
privacy-respecting option (Plausible, Umami) is a small change when you
want it.
