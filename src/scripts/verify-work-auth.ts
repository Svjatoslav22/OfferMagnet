import fs from "fs";
import path from "path";
import { createStealthBrowser, createStealthContext } from "../scrapers/browser";
import { sanitizeCookies } from "../services/playwright-apply.service";

async function verifyWorkAuth() {
  console.log("=================================================");
  console.log("🔍 Перевірка авторизації Work.ua (cookies/work.json)");
  console.log("=================================================\n");

  const cookieFile = path.resolve(process.cwd(), "cookies", "work.json");
  if (!fs.existsSync(cookieFile)) {
    console.error("❌ Файл cookies/work.json не знайдено!");
    console.log("👉 Запустіть 'npm run auth', щоб увійти та зберегти cookies.");
    process.exit(1);
  }

  const raw = fs.readFileSync(cookieFile, "utf-8");
  const cookies = JSON.parse(raw);
  console.log(`📦 Знайдено ${cookies.length} збережених cookies у work.json.`);

  console.log("🚀 Запуск stealth-браузера Chrome...");
  const browser = await createStealthBrowser();
  const context = await createStealthContext(browser);

  // Додаємо нормалізовані cookies
  const validCookies = sanitizeCookies(cookies);
  await context.addCookies(validCookies);

  const page = await context.newPage();

  try {
    console.log("🌐 Перехід на головну сторінку https://www.work.ua/ ...");
    await page.goto("https://www.work.ua/", {
      waitUntil: "domcontentloaded",
      timeout: 25000,
    });

    console.log("⏳ Очікуємо проходження перевірки безпеки Cloudflare...");
    // Чекаємо, поки зникне заголовок "Трохи зачекайте…" або до 10 секунд
    for (let i = 0; i < 10; i++) {
      const currentTitle = await page.title();
      if (!currentTitle.includes("Трохи зачекайте") && !currentTitle.includes("Just a moment") && !currentTitle.includes("Attention Required")) {
        break;
      }
      await page.waitForTimeout(1500);
    }

    const finalUrl = page.url();
    const pageTitle = await page.title();
    console.log(`📍 Кінцевий URL: ${finalUrl}`);
    console.log(`📄 Заголовок сторінки: ${pageTitle}`);

    // Перевірка 1: Наявність кнопки "Увійти"
    const loginBtn = await page.locator('a[href*="/jobseeker/login/"]:has-text("Увійти"), a:has-text("Увійти")').count();

    // Перевірка 2: Наявність меню користувача / імені / посилання на резюме
    const myProfileLink = await page.locator('a[href*="/jobseeker/my/"], a[href*="/resumes/"], .my-menu').count();
    const logoutBtn = await page.locator('a[href*="/jobseeker/logout/"], a:has-text("Вийти")').count();

    // Перевірка 3: Отримання імені користувача з хедера, якщо авторизовано
    const userName = await page.evaluate(() => {
      const el = document.querySelector('a[href*="/jobseeker/my/"] span, #user-name, .user-name, .my-menu-trigger, a[href*="/jobseeker/my/"]');
      return el?.textContent?.trim() || null;
    });

    // Перевірка 4: Наявність сесійних авторизаційних cookies у файлі
    const authCookieNames = cookies.map((c: any) => c.name);
    const hasAuthCookie = authCookieNames.some((n: string) =>
      n.includes("auth") || n.includes("user") || n.includes("wuid") || n.includes("sess")
    );

    // Скріншот для візуального доказу
    const artifactsDir = path.resolve(process.cwd(), "artifacts");
    if (!fs.existsSync(artifactsDir)) fs.mkdirSync(artifactsDir, { recursive: true });
    const screenshotPath = path.join(artifactsDir, "verify_work_auth.png");
    await page.screenshot({ path: screenshotPath, fullPage: false });
    console.log(`📸 Скріншот збережено: ${screenshotPath}\n`);

    const isAuthenticated = loginBtn === 0 && (myProfileLink > 0 || logoutBtn > 0);

    if (isAuthenticated) {
      console.log("-------------------------------------------------");
      console.log("✅ Work.ua: АВТОРИЗОВАНО УСПІШНО! 🔥");
      if (userName) {
        console.log(`👤 Профіль у системі: ${userName}`);
      }
      console.log("Сесійні cookies валідні та готові до відправки авто-відгуків.");
      console.log("-------------------------------------------------");
    } else {
      console.log("-------------------------------------------------");
      console.log("❌ Work.ua: НЕ АВТОРИЗОВАНО.");
      console.log("🔍 Деталі діагностики:");
      console.log(`   • Кнопка [Увійти] на сторінці: ${loginBtn > 0 ? "ПРИСУТНЯ (гість)" : "ВІДСУТНЯ"}`);
      console.log(`   • Меню профілю шукача: ${myProfileLink > 0 ? "Знайдено" : "Не знайдено"}`);
      console.log(`   • Сесійна cookie входу: ${hasAuthCookie ? "Присутня" : "Відсутня (тільки гостьові cookies)"}`);
      console.log("\n💡 Чому це сталося:");
      console.log("   У файлі cookies/work.json збереглися лише первинні гостьові cookies та Cloudflare clearance,");
      console.log("   оскільки ви, ймовірно, натиснули ENTER у консолі ДО того, як завершили введення коду/пароля в браузері.");
      console.log("\n👉 Що зробити зараз:");
      console.log("   1. Запустіть: npm run auth");
      console.log("   2. У вкладці Work.ua введіть телефон/пароль і переконайтесь, що в хедері з'явилося ваше ім'я.");
      console.log("   3. Тільки після цього поверніться в термінал і натисніть ENTER.");
      console.log("-------------------------------------------------");
    }
  } catch (err: any) {
    console.error("Помилка під час перевірки:", err.message);
  } finally {
    await browser.close();
  }
}

verifyWorkAuth().catch(console.error);
