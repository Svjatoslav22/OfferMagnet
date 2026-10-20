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
  console.log("Зараз відкриється вікно браузера Chrome з вкладками для авторизації:");
  console.log("1. Djinni (https://djinni.co/login)");
  console.log("2. DOU (https://jobs.dou.ua/)");
  console.log("3. Work.ua (https://www.work.ua/jobseeker/login/)");
  console.log("4. Robota.ua (https://robota.ua/auth/login)");
  console.log("5. Jobico (https://jobico.io/login)\n");
  console.log("👉 Увійдіть у свої акаунти на потрібних сайтах.");
  console.log("Після входу поверніться в цю консоль та натисніть [ENTER], щоб зберегти cookies.\n");

  const browser = await chromium.launch({
    channel: "chrome",
    headless: false,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-blink-features=AutomationControlled",
    ],
  });

  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    viewport: { width: 1366, height: 900 },
    locale: "uk-UA",
  });

  // 1. Вкладка Djinni
  const pageDjinni = await context.newPage();
  await pageDjinni.goto("https://djinni.co/login", { waitUntil: "domcontentloaded" }).catch(() => {});

  // 2. Вкладка DOU
  const pageDou = await context.newPage();
  await pageDou.goto("https://jobs.dou.ua/", { waitUntil: "domcontentloaded" }).catch(() => {});

  // 3. Вкладка Work.ua
  const pageWork = await context.newPage();
  await pageWork.goto("https://www.work.ua/jobseeker/login/", { waitUntil: "domcontentloaded" }).catch(() => {});

  // 4. Вкладка Robota.ua
  const pageRobota = await context.newPage();
  await pageRobota.goto("https://robota.ua/auth/login", { waitUntil: "domcontentloaded" }).catch(() => {});

  // 5. Вкладка Jobico
  const pageJobico = await context.newPage();
  await pageJobico.goto("https://jobico.io/login", { waitUntil: "domcontentloaded" }).catch(() => {});

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

  console.log("\n⏳ Зберігаємо сесійні cookies для всіх платформ...");
  const allCookies = await context.cookies();

  const platforms = [
    { name: "Djinni", domain: "djinni.co", file: "djinni.json" },
    { name: "DOU", domain: "dou.ua", file: "dou.json" },
    { name: "Work.ua", domain: "work.ua", file: "work.json" },
    { name: "Robota.ua", domain: "robota.ua", file: "robota.json" },
    { name: "Jobico", domain: "jobico.io", file: "jobico.json" },
  ];

  for (const plat of platforms) {
    const platCookies = allCookies.filter((c) => c.domain.includes(plat.domain));
    if (platCookies.length > 0) {
      const filePath = path.join(cookiesDir, plat.file);
      fs.writeFileSync(filePath, JSON.stringify(platCookies, null, 2), "utf-8");
      console.log(`✅ Збережено ${platCookies.length} cookies для ${plat.name} -> cookies/${plat.file}`);
    } else {
      console.log(`ℹ️ Cookies для ${plat.name} не виявлено (якщо не входили — можна авторизуватися пізніше).`);
    }
  }

  await browser.close();
  console.log("\n🎉 Готово! Сесійні cookies збережено. Тепер авто-відгук працюватиме на всіх обраних платформах!");
}

main().catch(console.error);
