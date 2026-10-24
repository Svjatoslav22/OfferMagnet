import { normalizeSeniority, type JobScraper, type ScrapedVacancy, type ScrapeOptions } from "./types";
import { createStealthBrowser, createStealthContext } from "./browser";
import { parseLocationFilter, matchesLocation } from "../services/location-filter";

export class WorkUaScraper implements JobScraper {
  readonly source = "Work.ua";
  private readonly baseUrl = "https://www.work.ua/jobs/";

  /**
   * Парсить вакансії з Work.ua через stealth-браузер для обходу Cloudflare
   */
  async scrape(options: ScrapeOptions = {}): Promise<ScrapedVacancy[]> {
    const keyword = options.keyword || "Node.js";
    const limit = options.limit || 20;

    // Фільтрація за локацією з SearchProfile
    const { hasLviv, hasRemote } = parseLocationFilter(options.location);
    let targetBaseUrl = this.baseUrl;
    if (hasLviv) {
      targetBaseUrl = "https://www.work.ua/jobs-lviv/";
    } else if (hasRemote) {
      targetBaseUrl = "https://www.work.ua/jobs-remote/";
    }

    const url = new URL(targetBaseUrl);
    url.searchParams.set("search", keyword);
    if (hasLviv) {
      url.searchParams.set("city_id", "74");
    }
    if (hasRemote) {
      url.searchParams.set("remote", "1");
    }

    // Junior: без досвіду / до 1 року (для Middle/Senior фільтр досвіду не задається)
    if (normalizeSeniority(options.seniority) === "junior") {
      url.searchParams.append("experience", "0");
      url.searchParams.append("experience", "1");
    }

    let browser;
    try {
      browser = await createStealthBrowser();
      const context = await createStealthContext(browser);
      const page = await context.newPage();

      await page.goto(url.toString(), {
        waitUntil: "domcontentloaded",
        timeout: 20000,
      });

      // Невелика пауза для відпрацювання Cloudflare скриптів
      await page.waitForTimeout(2500);

      const rawVacancies = await page.evaluate(() => {
        const cards = Array.from(document.querySelectorAll(".card.card-hover, .card.job-link"));
        return cards.map((card) => {
          const titleEl = card.querySelector("h2 a");
          const title = titleEl?.textContent?.trim() || "";
          const relUrl = titleEl?.getAttribute("href") || "";

          // Опис вакансії
          const descEl = card.querySelector("p.ellipsis, p.text-muted, .overflow");
          const description = descEl?.textContent?.trim() || "";

          // Зарплата
          const spans = Array.from(card.querySelectorAll("span"));
          const salarySpan = spans.find((s) => {
            const txt = s.textContent || "";
            return (
              (txt.includes("грн") || txt.includes("$") || txt.includes("€") || txt.includes("₴")) &&
              /\d/.test(txt)
            );
          });
          const salary = salarySpan?.textContent?.trim() || undefined;

          // Компанія (виключаємо текст зарплати)
          const logoImg = card.querySelector("img.preview-img-logo");
          const companyFromLogo = logoImg?.getAttribute("alt")?.trim();
          const candidateElements = Array.from(card.querySelectorAll("a[href*='/companies/'], a[href*='/employer/'], span.strong-600, div.mt-xs > span"));
          const companyEl = candidateElements.find((el) => {
            const txt = el.textContent?.trim() || "";
            return (
              txt &&
              !txt.includes("грн") &&
              !txt.includes("₴") &&
              !txt.includes("$") &&
              !txt.includes("€") &&
              !/\d{3,}/.test(txt) &&
              txt !== salary
            );
          });
          const company = companyFromLogo || companyEl?.textContent?.trim() || "Компанія на Work.ua";

          // Локація
          const locSpan = spans.find((s) => {
            const txt = (s.textContent?.trim() || "").toLowerCase();
            return (
              txt.includes("дистанційно") ||
              txt.includes("віддалено") ||
              txt.includes("remote") ||
              txt.includes("вся україна") ||
              txt.includes("київ") ||
              txt.includes("львів") ||
              txt.includes("одеса") ||
              txt.includes("дніпро") ||
              txt.includes("харків") ||
              txt.includes("запоріжжя") ||
              txt.includes("вінниця") ||
              txt.includes("полтава") ||
              txt.includes("чернігів") ||
              txt.includes("черкаси") ||
              txt.includes("житомир") ||
              txt.includes("суми") ||
              txt.includes("хмельницький") ||
              txt.includes("чернівці") ||
              txt.includes("рівне") ||
              txt.includes("івано-франківськ") ||
              txt.includes("тернопіль") ||
              txt.includes("луцьк") ||
              txt.includes("ужгород")
            );
          });
          const location = locSpan?.textContent?.trim() || "Україна";

          return {
            title,
            relUrl,
            description,
            company,
            salary,
            location,
          };
        });
      });

      const vacancies: ScrapedVacancy[] = [];

      for (const item of rawVacancies) {
        if (!item.title || !item.relUrl) continue;
        if (vacancies.length >= limit) break;

        const idMatch = item.relUrl.match(/\/jobs\/(\d+)/);
        const externalId = idMatch
          ? `workua-${idMatch[1]}`
          : `workua-${Buffer.from(item.relUrl).toString("base64")}`;

        const fullUrl = item.relUrl.startsWith("http")
          ? item.relUrl
          : `https://www.work.ua${item.relUrl.startsWith("/") ? "" : "/"}${item.relUrl}`;

        const candidateVacancy: ScrapedVacancy = {
          externalId,
          source: this.source,
          title: item.title,
          company: item.company,
          description: item.description || item.title,
          url: fullUrl,
          location: item.location,
          salary: item.salary,
          postedAt: new Date(),
        };

        // Гарантуємо відсутність нерелевантних офлайн-вакансій з Києва, Дніпра тощо
        if (options.location && !matchesLocation(candidateVacancy, options.location)) {
          continue;
        }

        vacancies.push(candidateVacancy);
      }

      return vacancies;
    } catch (error) {
      console.error(`[Work.ua Scraper] Помилка під час збору вакансій:`, error);
      throw error;
    } finally {
      if (browser) {
        await browser.close().catch(() => {});
      }
    }
  }
}
