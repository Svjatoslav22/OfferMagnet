import { chromium, type BrowserContext, type Page } from "playwright-core";
import fs from "fs";
import path from "path";
import { CANDIDATE_PROFILE } from "../ai/cover-letter.service";

export interface ApplyResult {
  success: boolean;
  isExternal?: boolean;
  requiresAuth?: boolean;
  externalUrl?: string;
  coverLetter: string;
  screenshotPath?: string;
  message: string;
}

export class PlaywrightApplyService {
  private cvPath: string;
  private cookiesDir: string;
  private artifactsDir: string;

  constructor() {
    this.cvPath = path.resolve(process.cwd(), "Sviatoslav_Tumtciv_CV.pdf");
    this.cookiesDir = path.resolve(process.cwd(), "cookies");
    this.artifactsDir = path.resolve(process.cwd(), "artifacts", "applies");

    if (!fs.existsSync(this.artifactsDir)) {
      fs.mkdirSync(this.artifactsDir, { recursive: true });
    }
  }

  /**
   * Завантажує збережені cookies для конкретної платформи
   */
  private async loadCookiesForDomain(context: BrowserContext, platform: "dou" | "djinni"): Promise<boolean> {
    const cookieFile = path.join(this.cookiesDir, `${platform}.json`);
    if (!fs.existsSync(cookieFile)) {
      return false;
    }

    try {
      const raw = fs.readFileSync(cookieFile, "utf-8");
      const cookies = JSON.parse(raw);
      if (Array.isArray(cookies) && cookies.length > 0) {
        await context.addCookies(cookies);
        return true;
      }
    } catch (e) {
      console.warn(`[PlaywrightApply] Помилка читання cookies з ${cookieFile}:`, e);
    }
    return false;
  }

  /**
   * Головний метод автоматичної подачі відгуку
   */
  async applyToVacancy(vacancy: {
    id: string;
    source: string;
    url: string;
    title: string;
    company: string;
  }, coverLetter: string, options: { dryRun?: boolean } = {}): Promise<ApplyResult> {
    const { dryRun = false } = options;
    const sourceLower = vacancy.source.toLowerCase();

    // Перевіряємо наявність файлу CV
    if (!fs.existsSync(this.cvPath)) {
      return {
        success: false,
        coverLetter,
        message: `Файл резюме не знайдено за шляхом: ${this.cvPath}`,
      };
    }

    const browser = await chromium.launch({
      channel: "chrome",
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-blink-features=AutomationControlled",
      ],
    });

    const context = await browser.newContext({
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
      viewport: { width: 1280, height: 900 },
      locale: "uk-UA",
    });

    // Приховуємо ознаки автоматизації
    await context.addInitScript(() => {
      Object.defineProperty(navigator, "webdriver", {
        get: () => undefined,
      });
    });

    try {
      if (sourceLower.includes("dou")) {
        return await this.applyDou(context, vacancy, coverLetter, dryRun);
      } else if (sourceLower.includes("djinni")) {
        return await this.applyDjinni(context, vacancy, coverLetter, dryRun);
      } else {
        // Для Work.ua, Robota.ua, Jobico повертаємо прямий лінк із готовим текстом
        return {
          success: true,
          isExternal: true,
          externalUrl: vacancy.url,
          coverLetter,
          message: `Для платформи ${vacancy.source} використовується пряме посилання із підготовленим AI-пітчем.`,
        };
      }
    } catch (error: any) {
      console.error(`[PlaywrightApply] Помилка авто-відгуку для ${vacancy.title}:`, error);
      return {
        success: false,
        coverLetter,
        message: `Помилка авто-відгуку: ${error.message || error}`,
      };
    } finally {
      await browser.close();
    }
  }

  /**
   * Обробка форми відгуку на DOU
   */
  private async applyDou(
    context: BrowserContext,
    vacancy: { id: string; url: string; title: string },
    coverLetter: string,
    dryRun: boolean
  ): Promise<ApplyResult> {
    const hasCookies = await this.loadCookiesForDomain(context, "dou");
    const page = await context.newPage();

    await page.goto(vacancy.url, { waitUntil: "domcontentloaded", timeout: 25000 });

    // Перевіряємо форму відгуку або кнопку на DOU
    const replyBtn = page.locator('a.btn-reply, a:has-text("Відгукнутися на вакансію"), a:has-text("Відгукнутися")').first();
    const replyHref = (await replyBtn.count()) > 0 ? (await replyBtn.getAttribute("href")) || "" : "";

    // Якщо кнопка відгуку веде на зовнішній сайт (ATS) або прямий email
    if (
      replyHref &&
      (replyHref.startsWith("mailto:") ||
        replyHref.includes("greenhouse.io") ||
        replyHref.includes("lever.co") ||
        replyHref.includes("workable.com") ||
        (replyHref.startsWith("http") && !replyHref.includes("dou.ua")))
    ) {
      return {
        success: true,
        isExternal: true,
        externalUrl: replyHref,
        coverLetter,
        message: "Вакансія потребує заповнення анкети на зовнішньому сайті роботодавця або email.",
      };
    }

    // Перевіряємо, чи користувач авторизований на DOU
    const reloginLink = page.locator('#relogin-link, a[href*="login"]').first();
    if ((await reloginLink.count()) > 0 && !hasCookies) {
      return {
        success: false,
        requiresAuth: true,
        coverLetter,
        message: "⚠️ Для автовідгуку на DOU потрібні cookies авторизації. Збережіть ваші cookies через 'npm run auth' або у файл 'cookies/dou.json'.",
      };
    }

    // Якщо форма схована за кліком або CSS style="display: none;" — розгортаємо її гарантовано
    await page.evaluate(() => {
      const f = document.getElementById("reply-form");
      if (f) f.style.display = "block";
    });

    if ((await replyBtn.count()) > 0 && !(await page.locator('textarea[name="message"]').isVisible())) {
      try {
        await replyBtn.click({ timeout: 2000 });
      } catch {
        // ignore if already revealed via JS
      }
    }

    // Знаходимо текстове поле для супровідного листа
    const textarea = page.locator('textarea[name="message"], textarea#reply-text, textarea').first();
    await textarea.waitFor({ state: "visible", timeout: 10000 });
    await textarea.fill(coverLetter);

    // Прикріплюємо файл резюме (CV)
    const fileInput = page.locator('input[type="file"][name="upload"], input[type="file"]').first();
    if ((await fileInput.count()) > 0) {
      await fileInput.setInputFiles(this.cvPath);
      await page.waitForTimeout(1000);
    }

    // Якщо користувач не був авторизований через cookies — заповнюємо обов'язкові поля імені та email
    const nameInput = page.locator('input[name="name"]').first();
    if ((await nameInput.count()) > 0 && !(await nameInput.inputValue())) {
      await nameInput.fill(CANDIDATE_PROFILE.name);
    }

    const emailInput = page.locator('input[name="email"]').first();
    if ((await emailInput.count()) > 0 && !(await emailInput.inputValue())) {
      await emailInput.fill(CANDIDATE_PROFILE.email);
    }

    // Зберігаємо скріншот заповненої форми як доказ для користувача
    const screenshotName = `dou-${vacancy.id}-${Date.now()}.png`;
    const screenshotPath = path.join(this.artifactsDir, screenshotName);
    await page.screenshot({ path: screenshotPath, fullPage: false });

    // Сабміт (якщо не режим dryRun)
    if (!dryRun) {
      const submitBtn = page.locator('button[type="submit"]:has-text("Відправити відгук"), button[type="submit"], input[type="submit"]').first();
      await submitBtn.click();
      await page.waitForTimeout(3000);
    }

    return {
      success: true,
      coverLetter,
      screenshotPath,
      message: dryRun
        ? "✅ Форма на DOU успішно заповнена, CV прикріплено (Тестовий режим без кліку Відправити)."
        : "🚀 Відгук на DOU успішно надіслано з вашим CV та супровідним листом!",
    };
  }

  /**
   * Обробка форми відгуку на Djinni
   */
  private async applyDjinni(
    context: BrowserContext,
    vacancy: { id: string; url: string; title: string },
    coverLetter: string,
    dryRun: boolean
  ): Promise<ApplyResult> {
    const hasCookies = await this.loadCookiesForDomain(context, "djinni");
    const page = await context.newPage();

    await page.goto(vacancy.url, { waitUntil: "domcontentloaded", timeout: 25000 });

    // Перевірка авторизації на Djinni
    const isLoginPage = page.url().includes("/login");
    const loginLink = await page.locator('a[href*="/login"]').count();

    if (!hasCookies && (isLoginPage || loginLink > 0)) {
      return {
        success: false,
        requiresAuth: true,
        coverLetter,
        message:
          "⚠️ Для автовідгуку на Djinni потрібні cookies авторизації. Збережіть ваші cookies у файл 'cookies/djinni.json' або скористайтесь 'npm run auth'.",
      };
    }

    // Натискаємо кнопку Відгукнутися
    const applyBtn = page.locator('a.btn-apply, a:has-text("Відгукнутися"), button:has-text("Відгукнутися")').first();
    if ((await applyBtn.count()) > 0) {
      await applyBtn.click();
      await page.waitForTimeout(1500);
    }

    // Заповнюємо поле супровідного повідомлення
    const textarea = page.locator('textarea[name="message"], textarea#message, textarea').first();
    await textarea.waitFor({ state: "visible", timeout: 10000 });
    await textarea.fill(coverLetter);

    // Прикріплюємо CV, якщо є input[type="file"]
    const fileInput = page.locator('input[type="file"]').first();
    if ((await fileInput.count()) > 0) {
      await fileInput.setInputFiles(this.cvPath);
      await page.waitForTimeout(1000);
    }

    // Скріншот
    const screenshotName = `djinni-${vacancy.id}-${Date.now()}.png`;
    const screenshotPath = path.join(this.artifactsDir, screenshotName);
    await page.screenshot({ path: screenshotPath, fullPage: false });

    if (!dryRun) {
      const submitBtn = page.locator('button[type="submit"]:has-text("Відгукнутися"), button.btn-primary:has-text("Відгукнутися")').first();
      await submitBtn.click();
      await page.waitForTimeout(3000);
    }

    return {
      success: true,
      coverLetter,
      screenshotPath,
      message: dryRun
        ? "✅ Форма на Djinni заповнена та CV підготовлено (Тестовий режим без кліку Відправити)."
        : "🚀 Відгук на Djinni успішно надіслано!",
    };
  }
}

export const playwrightApplyService = new PlaywrightApplyService();
