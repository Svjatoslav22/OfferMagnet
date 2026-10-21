import { type BrowserContext } from "playwright-core";
import fs from "fs";
import path from "path";
import { CANDIDATE_PROFILE } from "../ai/cover-letter.service";
import { createStealthBrowser, createStealthContext } from "../scrapers/browser";

export interface ApplyResult {
  success: boolean;
  isExternal?: boolean;
  requiresAuth?: boolean;
  externalUrl?: string;
  coverLetter: string;
  screenshotPath?: string;
  message: string;
}

/**
 * Нормалізує cookies з будь-яких джерел (Cookie-Editor, Chrome DevTools тощо) під строгий формат Playwright
 */
export function sanitizeCookies(rawCookies: any[]): any[] {
  if (!Array.isArray(rawCookies)) return [];
  return rawCookies
    .filter((c) => c && c.name && c.value !== undefined)
    .map((c) => {
      const sanitized: any = {
        name: String(c.name),
        value: String(c.value),
        domain: String(c.domain || ""),
        path: String(c.path || "/"),
      };

      if (typeof c.secure === "boolean") {
        sanitized.secure = c.secure;
      }
      if (typeof c.httpOnly === "boolean") {
        sanitized.httpOnly = c.httpOnly;
      }

      // Термін дії cookies (expirationDate -> expires)
      const exp =
        typeof c.expires === "number"
          ? c.expires
          : typeof c.expirationDate === "number"
          ? c.expirationDate
          : undefined;
      if (typeof exp === "number" && exp > 0) {
        sanitized.expires = Math.floor(exp);
      }

      // Нормалізація SameSite (Lax | Strict | None)
      if (c.sameSite) {
        const s = String(c.sameSite).trim().toLowerCase();
        if (s === "lax") {
          sanitized.sameSite = "Lax";
        } else if (s === "strict") {
          sanitized.sameSite = "Strict";
        } else if (s === "none" || s === "no_restriction") {
          sanitized.sameSite = "None";
        }
      }

      return sanitized;
    });
}

export class PlaywrightApplyService {
  private cvPath: string;
  private cookiesDir: string;
  private artifactsDir: string;

  constructor() {
    this.cvPath = path.resolve(
      process.env.CV_PATH || path.join(process.cwd(), "Sviatoslav_Tumtciv_CV.pdf")
    );
    this.cookiesDir = path.resolve(
      process.env.COOKIES_DIR || path.join(process.cwd(), "cookies")
    );
    this.artifactsDir = path.resolve(
      process.env.ARTIFACTS_DIR || path.join(process.cwd(), "artifacts", "applies")
    );

    if (!fs.existsSync(this.artifactsDir)) {
      fs.mkdirSync(this.artifactsDir, { recursive: true });
    }
  }

  /**
   * Завантажує збережені cookies для конкретної платформи
   */
  private async loadCookiesForDomain(context: BrowserContext, platform: string): Promise<boolean> {
    const cookieFile = path.join(this.cookiesDir, `${platform}.json`);
    if (!fs.existsSync(cookieFile)) {
      return false;
    }

    try {
      const raw = fs.readFileSync(cookieFile, "utf-8");
      const rawCookies = JSON.parse(raw);
      if (Array.isArray(rawCookies) && rawCookies.length > 0) {
        const validCookies = sanitizeCookies(rawCookies);
        await context.addCookies(validCookies);
        return true;
      }
    } catch (e) {
      console.warn(`[PlaywrightApply] Помилка читання cookies з ${cookieFile}:`, e);
    }
    return false;
  }

  /**
   * Головний метод автоматичної подачі відгуку для всіх 5 джерел
   */
  async applyToVacancy(
    vacancy: {
      id: string;
      source: string;
      url: string;
      title: string;
      company: string;
    },
    coverLetter: string,
    options: { dryRun?: boolean } = {}
  ): Promise<ApplyResult> {
    const { dryRun = false } = options;
    const sourceLower = vacancy.source.toLowerCase();

    // Перевіряємо наявність обов'язкового файлу резюме
    if (!fs.existsSync(this.cvPath)) {
      return {
        success: false,
        coverLetter,
        message: `Файл резюме не знайдено за шляхом: ${this.cvPath}`,
      };
    }

    // Запускаємо локальний Chrome зі stealth-маскуванням (обхід Cloudflare)
    const browser = await createStealthBrowser();
    const context = await createStealthContext(browser);

    try {
      if (sourceLower.includes("dou")) {
        return await this.applyDou(context, vacancy, coverLetter, dryRun);
      } else if (sourceLower.includes("djinni")) {
        return await this.applyDjinni(context, vacancy, coverLetter, dryRun);
      } else if (sourceLower.includes("work")) {
        return await this.applyWork(context, vacancy, coverLetter, dryRun);
      } else if (sourceLower.includes("robota")) {
        return await this.applyRobota(context, vacancy, coverLetter, dryRun);
      } else if (sourceLower.includes("jobico")) {
        return await this.applyJobico(context, vacancy, coverLetter, dryRun);
      } else {
        return {
          success: true,
          isExternal: true,
          externalUrl: vacancy.url,
          coverLetter,
          message: `Для платформи ${vacancy.source} підготовлено AI-пітч та пряме посилання.`,
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
   * 1. Обробка форми відгуку на DOU
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

    const replyBtn = page.locator('a.btn-reply, a:has-text("Відгукнутися на вакансію"), a:has-text("Відгукнутися")').first();
    const replyHref = (await replyBtn.count()) > 0 ? (await replyBtn.getAttribute("href")) || "" : "";

    // Зовнішній редирект (ATS/email)
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
        message: "⚠️ Для автовідгуку на DOU потрібні cookies авторизації. Збережіть ваші cookies через 'npm run auth'.",
      };
    }

    // Розгортаємо форму на DOU гарантовано
    await page.evaluate(() => {
      const f = document.getElementById("reply-form");
      if (f) f.style.display = "block";
    });

    if ((await replyBtn.count()) > 0 && !(await page.locator('textarea[name="message"]').isVisible())) {
      try {
        await replyBtn.click({ timeout: 2000 });
      } catch {}
    }

    // Поле супровідного тексту
    const textarea = page.locator('textarea[name="message"], textarea#reply-text, textarea').first();
    await textarea.waitFor({ state: "visible", timeout: 10000 });
    await textarea.fill(coverLetter);

    // Прикріплюємо файл резюме (CV)
    const fileInput = page.locator('input[type="file"][name="upload"], input[type="file"]').first();
    if ((await fileInput.count()) > 0) {
      await fileInput.setInputFiles(this.cvPath);
      await page.waitForTimeout(1000);
    }

    // Заповнюємо ім'я та email, якщо порожні
    const nameInput = page.locator('input[name="name"]').first();
    if ((await nameInput.count()) > 0 && !(await nameInput.inputValue())) {
      await nameInput.fill(CANDIDATE_PROFILE.name);
    }

    const emailInput = page.locator('input[name="email"]').first();
    if ((await emailInput.count()) > 0 && !(await emailInput.inputValue())) {
      await emailInput.fill(CANDIDATE_PROFILE.email);
    }

    const screenshotName = `dou-${vacancy.id}-${Date.now()}.png`;
    const screenshotPath = path.join(this.artifactsDir, screenshotName);
    await page.screenshot({ path: screenshotPath, fullPage: false });

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
   * 2. Обробка форми відгуку на Djinni
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

    const isLoginPage = page.url().includes("/login");
    const loginLink = await page.locator('a[href*="/login"]').count();

    if (!hasCookies && (isLoginPage || loginLink > 0)) {
      return {
        success: false,
        requiresAuth: true,
        coverLetter,
        message: "⚠️ Для автовідгуку на Djinni потрібні cookies авторизації. Скористайтесь 'npm run auth'.",
      };
    }

    const applyBtn = page.locator('a.btn-apply, a:has-text("Відгукнутися"), button:has-text("Відгукнутися")').first();
    if ((await applyBtn.count()) > 0) {
      await applyBtn.click();
      await page.waitForTimeout(1500);
    }

    const textarea = page.locator('textarea[name="message"], textarea#message, textarea').first();
    await textarea.waitFor({ state: "visible", timeout: 10000 });
    await textarea.fill(coverLetter);

    const fileInput = page.locator('input[type="file"]').first();
    if ((await fileInput.count()) > 0) {
      await fileInput.setInputFiles(this.cvPath);
      await page.waitForTimeout(1000);
    }

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

  /**
   * 3. Обробка форми відгуку на Work.ua
   */
  private async applyWork(
    context: BrowserContext,
    vacancy: { id: string; url: string; title: string },
    coverLetter: string,
    dryRun: boolean
  ): Promise<ApplyResult> {
    const hasCookies = await this.loadCookiesForDomain(context, "work");
    const page = await context.newPage();

    await page.goto(vacancy.url, { waitUntil: "domcontentloaded", timeout: 25000 });
    await page.waitForTimeout(2000);

    // Шукаємо кнопку 'Відгукнутися'
    const applyBtn = page.locator('button:has-text("Відгукнутися"), a:has-text("Відгукнутися"), button#send-resume-btn, .btn:has-text("Відгукнутися")').first();
    if ((await applyBtn.count()) === 0) {
      return {
        success: false,
        coverLetter,
        message: "Кнопку 'Відгукнутися' на сторінці Work.ua не знайдено (можливо, вакансія закрита або вимагає зовнішнього переходу).",
      };
    }

    await applyBtn.click();
    await page.waitForTimeout(2000);

    // Перевірка авторизації: якщо з'явився інпут телефону і немає збережених cookies
    const phoneInput = page.locator('input[name="phone"], input#phone');
    if (!hasCookies && (await phoneInput.count()) > 0) {
      return {
        success: false,
        requiresAuth: true,
        coverLetter,
        message: "⚠️ Для автовідгуку на Work.ua потрібні збережені cookies авторизації. Будь ласка, запустіть 'npm run auth'.",
      };
    }

    // Якщо є кнопка розгортання супровідного листа
    const addLetterBtn = page.locator('button:has-text("Додати супровідний"), a:has-text("Додати супровідний"), [data-qa="add-cover-letter"]').first();
    if ((await addLetterBtn.count()) > 0 && (await addLetterBtn.isVisible())) {
      await addLetterBtn.click();
      await page.waitForTimeout(500);
    }

    // Поле супровідного листа (AI пітч)
    const textarea = page.locator('textarea[name="letter"], textarea[name="message"], textarea#letter, textarea').first();
    if ((await textarea.count()) > 0 && (await textarea.isVisible())) {
      await textarea.fill(coverLetter);
    }

    // Прикріплюємо файл резюме CV
    const fileInput = page.locator('input[type="file"]').first();
    if ((await fileInput.count()) > 0) {
      await fileInput.setInputFiles(this.cvPath);
      await page.waitForTimeout(1000);
    }

    const screenshotName = `work-${vacancy.id}-${Date.now()}.png`;
    const screenshotPath = path.join(this.artifactsDir, screenshotName);
    await page.screenshot({ path: screenshotPath, fullPage: false });

    if (!dryRun) {
      const submitBtn = page.locator('button[type="submit"]:has-text("Відправити"), button[type="submit"]:has-text("Надіслати"), button:has-text("Продовжити")').first();
      if ((await submitBtn.count()) > 0) {
        await submitBtn.click();
        await page.waitForTimeout(3000);
      }
    }

    return {
      success: true,
      coverLetter,
      screenshotPath,
      message: dryRun
        ? "✅ Форма на Work.ua заповнена та CV підготовлено (Тестовий режим без відправки)."
        : "🚀 Відгук на Work.ua успішно надіслано з вашим CV та AI-пітчем!",
    };
  }

  /**
   * 4. Обробка форми відгуку на Robota.ua
   */
  private async applyRobota(
    context: BrowserContext,
    vacancy: { id: string; url: string; title: string },
    coverLetter: string,
    dryRun: boolean
  ): Promise<ApplyResult> {
    const hasCookies = await this.loadCookiesForDomain(context, "robota");
    const page = await context.newPage();

    await page.goto(vacancy.url, { waitUntil: "domcontentloaded", timeout: 25000 });
    await page.waitForTimeout(3000);

    const applyBtn = page.locator('button:has-text("Відгукнутись"), a:has-text("Відгукнутись"), button.primary-normal, button.primary-large').first();
    if ((await applyBtn.count()) === 0) {
      return {
        success: false,
        coverLetter,
        message: "Кнопку 'Відгукнутись' на сторінці Robota.ua не знайдено.",
      };
    }

    await applyBtn.click();
    await page.waitForTimeout(3000);

    // Перевірка авторизації на Robota.ua
    if (page.url().includes("/auth/login") || ((await page.locator('input[type="email"]').count()) > 0 && !hasCookies)) {
      return {
        success: false,
        requiresAuth: true,
        coverLetter,
        message: "⚠️ Для автовідгуку на Robota.ua потрібні збережені cookies авторизації. Будь ласка, запустіть 'npm run auth'.",
      };
    }

    // Прикріплюємо файл резюме CV (на Robota.ua це #inputFile)
    const fileInput = page.locator('input[type="file"]#inputFile, input[type="file"]').first();
    if ((await fileInput.count()) > 0) {
      await fileInput.setInputFiles(this.cvPath);
      await page.waitForTimeout(1500);
    }

    // Поле супровідного листа / коментаря
    const textarea = page.locator('textarea[name="comment"], textarea[name="coverLetter"], textarea').first();
    if ((await textarea.count()) > 0 && (await textarea.isVisible())) {
      await textarea.fill(coverLetter);
    }

    const screenshotName = `robota-${vacancy.id}-${Date.now()}.png`;
    const screenshotPath = path.join(this.artifactsDir, screenshotName);
    await page.screenshot({ path: screenshotPath, fullPage: false });

    if (!dryRun) {
      const submitBtn = page.locator('button:has-text("Відгукнутись"), button:has-text("Продовжити"), button[type="submit"]').first();
      if ((await submitBtn.count()) > 0) {
        await submitBtn.click();
        await page.waitForTimeout(3000);
      }
    }

    return {
      success: true,
      coverLetter,
      screenshotPath,
      message: dryRun
        ? "✅ Форма на Robota.ua заповнена та CV підготовлено (Тестовий режим)."
        : "🚀 Відгук на Robota.ua успішно відправлено!",
    };
  }

  /**
   * 5. Обробка форми відгуку на Jobico
   */
  private async applyJobico(
    context: BrowserContext,
    vacancy: { id: string; url: string; title: string },
    coverLetter: string,
    dryRun: boolean
  ): Promise<ApplyResult> {
    const hasCookies = await this.loadCookiesForDomain(context, "jobico");
    const page = await context.newPage();

    await page.goto(vacancy.url, { waitUntil: "domcontentloaded", timeout: 25000 });
    await page.waitForTimeout(2000);

    const loginLink = page.locator('a[href*="/login"], a:has-text("Увійти, щоб відгукнутися")').first();
    if (!hasCookies && (await loginLink.count()) > 0) {
      return {
        success: false,
        requiresAuth: true,
        coverLetter,
        message: "⚠️ Для автовідгуку на Jobico потрібні збережені cookies авторизації. Будь ласка, запустіть 'npm run auth'.",
      };
    }

    const applyBtn = page.locator('button:has-text("Відгукнутися"), a:has-text("Відгукнутися")').first();
    if ((await applyBtn.count()) > 0) {
      await applyBtn.click();
      await page.waitForTimeout(1500);
    }

    const textarea = page.locator('textarea').first();
    if ((await textarea.count()) > 0 && (await textarea.isVisible())) {
      await textarea.fill(coverLetter);
    }

    const fileInput = page.locator('input[type="file"]').first();
    if ((await fileInput.count()) > 0) {
      await fileInput.setInputFiles(this.cvPath);
      await page.waitForTimeout(1000);
    }

    const screenshotName = `jobico-${vacancy.id}-${Date.now()}.png`;
    const screenshotPath = path.join(this.artifactsDir, screenshotName);
    await page.screenshot({ path: screenshotPath, fullPage: false });

    if (!dryRun) {
      const submitBtn = page.locator('button[type="submit"]:has-text("Відгукнутися"), button.btn-primary:has-text("Відгукнутися")').first();
      if ((await submitBtn.count()) > 0) {
        await submitBtn.click();
        await page.waitForTimeout(3000);
      }
    }

    return {
      success: true,
      coverLetter,
      screenshotPath,
      message: dryRun
        ? "✅ Форма на Jobico заповнена та CV підготовлено (Тестовий режим)."
        : "🚀 Відгук на Jobico успішно відправлено!",
    };
  }
}

export const playwrightApplyService = new PlaywrightApplyService();
