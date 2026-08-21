import puppeteer from "puppeteer-core";
const [,, url, out, w, full] = process.argv;
const b = await puppeteer.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: "new", args: ["--no-sandbox"],
});
const p = await b.newPage();
await p.setViewport({ width: +w, height: 800, isMobile: +w < 768, hasTouch: +w < 768, deviceScaleFactor: 2 });
await p.goto(url, { waitUntil: "networkidle0" });
await new Promise(r => setTimeout(r, 1200));
await p.screenshot({ path: out, fullPage: full === "full" });
await b.close();
