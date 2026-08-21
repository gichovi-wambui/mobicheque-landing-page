/**
 * The public origin this build is served from.
 *
 * Baked in at build time, so it must be set before `npm run build`. Render
 * supplies it via NEXT_PUBLIC_SITE_URL in render.yaml; change it there when
 * a custom domain is attached.
 *
 * It matters because absolute URLs -- the Open Graph card, the sitemap, the
 * JSON-LD -- are wrong on every host but the one they were built for. A
 * share preview pointing at a domain that does not resolve yet renders as a
 * broken image.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://mobicheque.co.ke"
).replace(/\/$/, "");
