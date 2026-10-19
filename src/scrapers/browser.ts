import { chromium, type Browser, type BrowserContext } from "playwright-core";

/**
 * Створює екземпляр headless Chrome з маскуванням автоматизації для обходу Cloudflare
 */
export async function createStealthBrowser(): Promise<Browser> {
  const executablePath =
    process.env.CHROME_BIN || process.env.CHROMIUM_PATH || undefined;

  return await chromium.launch({
    ...(executablePath ? { executablePath } : { channel: "chrome" }),
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-blink-features=AutomationControlled",
      "--disable-infobars",
    ],
  });
}

/**
 * Налаштовує контекст браузера з реалістичним User-Agent та приховуванням navigator.webdriver
 */
export async function createStealthContext(browser: Browser): Promise<BrowserContext> {
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    viewport: { width: 1280, height: 800 },
    locale: "uk-UA",
  });

  await context.addInitScript(() => {
    Object.defineProperty(navigator, "webdriver", {
      get: () => undefined,
    });
  });

  return context;
}
