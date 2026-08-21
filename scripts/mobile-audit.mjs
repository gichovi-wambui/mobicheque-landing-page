/**
 * Mobile overflow audit.
 *
 * Loads each route at phone widths, reports whether the document scrolls
 * horizontally, and names the specific elements wider than the viewport.
 *
 *   node scripts/mobile-audit.mjs [baseUrl]
 *
 * Requires the site to be running (npm run start) and Chrome installed.
 */
import puppeteer from "puppeteer-core";
import { existsSync } from "node:fs";

const BASE = process.argv[2] || "http://localhost:3000";

const CHROME_CANDIDATES = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/usr/bin/google-chrome",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
];

const executablePath = CHROME_CANDIDATES.find((p) => existsSync(p));
if (!executablePath) {
  console.error("No Chrome/Edge found. Add its path to CHROME_CANDIDATES.");
  process.exit(1);
}

const ROUTES = [
  "/",
  "/product",
  "/security",
  "/integration",
  "/for-banks",
  "/for-saccos",
  "/about",
  "/does-not-exist",
];

const WIDTHS = [320, 360, 414, 768];

const browser = await puppeteer.launch({
  executablePath,
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu"],
});

let failures = 0;

for (const width of WIDTHS) {
  console.log(`\n=== ${width}px ===`);

  for (const route of ROUTES) {
    const page = await browser.newPage();
    await page.setViewport({
      width,
      height: 900,
      isMobile: width < 768,
      hasTouch: width < 768,
      deviceScaleFactor: 1,
    });

    await page.goto(BASE + route, { waitUntil: "networkidle0" });

    // Guard: an unstyled page never overflows, so a stale server serving
    // 500s for its CSS chunk would make every check pass for the wrong
    // reason. Confirm the stylesheet actually applied before measuring.
    const styled = await page.evaluate(() => {
      const bg = getComputedStyle(document.body).backgroundColor;
      const nav = document.querySelector("header");
      const sticky = nav && getComputedStyle(nav).position === "sticky";
      return { bg, sticky };
    });
    if (!styled.sticky) {
      console.log(`  SKIP  ${route} -- CSS did not apply (stale build?). Fix before trusting results.`);
      failures++;
      await page.close();
      continue;
    }

    const result = await page.evaluate(() => {
      const docWidth = document.documentElement.clientWidth;
      const scrollWidth = document.documentElement.scrollWidth;

      // An element only causes page-level overflow if nothing above it clips
      // or scrolls it. Decorative blurred blobs sit inside overflow-hidden
      // sections, and wide tables sit inside overflow-x-auto wrappers --
      // both are fine and must not be reported.
      const isContained = (el) => {
        let n = el.parentElement;
        while (n && n !== document.documentElement) {
          const ov = getComputedStyle(n).overflowX;
          if (ov === "hidden" || ov === "auto" || ov === "scroll") return true;
          n = n.parentElement;
        }
        return false;
      };

      const offenders = [];
      for (const el of document.querySelectorAll("body *")) {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) continue;
        if (isContained(el)) continue;

        if (r.right > docWidth + 1 || r.left < -1) {
          offenders.push({
            pos: getComputedStyle(el).position,
            tag: el.tagName.toLowerCase(),
            cls: (el.className?.toString?.() || "").slice(0, 70),
            left: Math.round(r.left),
            right: Math.round(r.right),
            width: Math.round(r.width),
          });
        }
      }

      // Only report the outermost offenders; children inherit the problem.
      const trimmed = offenders.filter(
        (o, i) =>
          !offenders.some(
            (p, j) =>
              j !== i && p.left <= o.left && p.right >= o.right && p.width > o.width
          )
      );

      return { docWidth, scrollWidth, offenders: trimmed.slice(0, 6) };
    });

    const overflow = result.scrollWidth - result.docWidth;
    const bad = overflow > 1;
    if (bad) failures++;

    console.log(
      `  ${bad ? "FAIL" : "ok  "}  ${route.padEnd(16)} scrollW=${result.scrollWidth} clientW=${result.docWidth}${bad ? `  (+${overflow}px)` : ""}`
    );

    for (const o of result.offenders) {
      console.log(
        `           <${o.tag}> [${o.pos}] w=${o.width} left=${o.left} right=${o.right}  ${o.cls}`
      );
    }

    await page.close();
  }
}

await browser.close();

console.log(
  failures === 0
    ? "\nNo horizontal overflow at any tested width."
    : `\n${failures} route/width combinations overflow.`
);
process.exit(failures === 0 ? 0 : 1);
