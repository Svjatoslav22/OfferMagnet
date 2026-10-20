import { chromium } from "playwright-core";
import fs from "fs";
import path from "path";
import readline from "readline";

async function main() {
  const cookiesDir = path.resolve(process.cwd(), "cookies");
  if (!fs.existsSync(cookiesDir)) {
    fs.mkdirSync(cookiesDir, { recursive: true });
  }

  console.log("============================================================");
  console.log("🔐 OfferMagnet: Майстер авторизації для авто-відгуків");
  console.log("============================================================\n");
  console.log("Зараз відкриється вікно браузера Chrome.");
  console.log("Будь ласка, увійдіть у свій акаунт на Djinni та/або DOU.");
  console.log("Після успішного входу поверніться сюди та натисніть [ENTER], щоб зберегти cookies.\n");

  const browser = await chromium.launch({
    channel: "chrome",
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    viewport: { width: 1280, height: 900 },
  });

  const page = await context.newPage();

  // Відкриваємо вкладку Djinni
  await page.goto("https://djinni.co/login", { waitUntil: "domcontentloaded" });

  // Відкриваємо вкладку DOU у другій сторінці
  const douPage = await context.newPage();
  await douPage.goto("https://jobs.dou.ua/", { waitUntil: "domcontentloaded" });

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  await new Promise<void>((resolve) => {
    rl.question("👉 Після того як увійдете в акаунти на сайтах, натисніть ENTER тут: ", () => {
      rl.close();
      resolve();
    });
  });

  console.log("\n⏳ Зберігаємо сесійні cookies...");
  const allCookies = await context.cookies();

  // Фільтруємо cookies за доменами
  const djinniCookies = allCookies.filter((c) => c.domain.includes("djinni.co"));
  const douCookies = allCookies.filter((c) => c.domain.includes("dou.ua"));

  if (djinniCookies.length > 0) {
    const djinniPath = path.join(cookiesDir, "djinni.json");
    fs.writeFileSync(djinniPath, JSON.stringify(djinniCookies, null, 2), "utf-8");
    console.log(`✅ Збережено ${djinniCookies.length} cookies для Djinni -> ${djinniPath}`);
  } else {
    console.log("⚠️ Cookies для Djinni не знайдено.");
  }

  if (douCookies.length > 0) {
    const douPath = path.join(cookiesDir, "dou.json");
    fs.writeFileSync(douPath, JSON.stringify(douCookies, null, 2), "utf-8");
    console.log(`✅ Збережено ${douCookies.length} cookies для DOU -> ${douPath}`);
  } else {
    console.log("⚠️ Cookies для DOU не знайдено.");
  }

  await browser.close();
  console.log("\n🎉 Готово! Тепер система авто-відгуків має ваші сесійні ключі.");
}

main().catch(console.error);
