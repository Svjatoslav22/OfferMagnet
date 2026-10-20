import { chromium } from "playwright-core";

async function debugDou() {
  const browser = await chromium.launch({ channel: "chrome", headless: true });
  const page = await browser.newPage();
  await page.goto("https://jobs.dou.ua/companies/freitty/vacancies/376223/", { waitUntil: "domcontentloaded" });

  const btnHtml = await page.locator('a:has-text("Відгукнутися")').first().evaluate(el => el.outerHTML);
  console.log("Btn outer HTML:", btnHtml);

  // Click the button
  await page.locator('a:has-text("Відгукнутися")').first().click();
  await page.waitForTimeout(2000);

  // Check what new elements appeared or what is visible now
  const textareas = await page.locator("textarea").count();
  const fileInputs = await page.locator('input[type="file"]').count();
  console.log("After click - textareas:", textareas, "fileInputs:", fileInputs);

  const replyHtml = await page.locator("div.reply").first().evaluate(el => el.innerHTML);
  console.log("div.reply inner HTML:", replyHtml);

  await browser.close();
}

debugDou().catch(console.error);
