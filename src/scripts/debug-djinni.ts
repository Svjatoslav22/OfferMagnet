import { chromium } from "playwright-core";

async function debugDjinni() {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage();
  console.log("Navigating to real Djinni vacancy...");
  await page.goto("https://djinni.co/jobs/846250-fullstack-javascript-engineer-with-ai/", { waitUntil: "domcontentloaded" });
  console.log("Page title:", await page.title());
  console.log("URL:", page.url());

  const applyBtn = page.locator('a.btn-apply, a:has-text("Відгукнутися"), button:has-text("Відгукнутися")').first();
  console.log("applyBtn count:", await applyBtn.count());
  if (await applyBtn.count() > 0) {
    console.log("applyBtn text:", await applyBtn.innerText());
    console.log("applyBtn href:", await applyBtn.getAttribute("href"));
  }

  // Check login link / state
  const loginLinks = await page.locator('a[href*="/login"], a:has-text("Увійти")').count();
  console.log("Login links count:", loginLinks);

  await browser.close();
}

debugDjinni().catch(console.error);
