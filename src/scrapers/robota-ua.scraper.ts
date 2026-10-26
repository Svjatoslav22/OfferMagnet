import { normalizeSeniority, type JobScraper, type ScrapedVacancy, type ScrapeOptions } from "./types";
import { createStealthBrowser, createStealthContext } from "./browser";
import { parseLocationFilter, matchesLocation } from "../services/location-filter";

export class RobotaUaScraper implements JobScraper {
  readonly source = "Robota.ua";
  private readonly baseUrl = "https://robota.ua/zapros/";

  /**
   * Парсить вакансії з Robota.ua через stealth-браузер
   */
  async scrape(options: ScrapeOptions = {}): Promise<ScrapedVacancy[]> {
    const targetKeyword = options.keyword || "Frontend";
    const keywordSlug = targetKeyword
      .toLowerCase()
      .trim()
      .replace(/\.js$/i, "-js")
      .replace(/\./g, "-")
      .replace(/\s+/g, "-");
    const limit = options.limit || 20;

    // Фільтрація за локацією з SearchProfile (Lviv = cityId 2, Remote = scheduleId 3)
    const { hasLviv, hasRemote } = parseLocationFilter(options.location);
    let locationSlug = "ukraine";
    if (hasLviv) {
      locationSlug = "lviv";
    }

    const targetUrlObj = new URL(`${this.baseUrl}${encodeURIComponent(keywordSlug)}/${locationSlug}`);
    if (hasLviv) {
      targetUrlObj.searchParams.set("cityId", "2");
    }
    if (hasRemote) {
      targetUrlObj.searchParams.set("scheduleId", "3");
    }
    const targetUrl = targetUrlObj.toString();

    console.log(`[Robota.ua Scraper] Перехід за URL: ${targetUrl}`);

    let browser;
    try {
      browser = await createStealthBrowser();
      const context = await createStealthContext(browser);
      const page = await context.newPage();

      await page.goto(targetUrl, {
        waitUntil: "domcontentloaded",
        timeout: 20000,
      });

      // Пауза для ініціалізації Angular-компонентів та Cloudflare валідації
      await page.waitForTimeout(3500);

      const rawVacancies = await page.evaluate(() => {
        const links = Array.from(document.querySelectorAll("a[href*='/company'][href*='/vacancy']"));
        const seen = new Set<string>();
        const results = [];

        for (const link of links) {
          const href = link.getAttribute("href") || "";
          const match = href.match(/vacancy(\d+)/);
          if (!match) continue;

          const vacancyId = match[1];
          if (!vacancyId || seen.has(vacancyId)) continue;
          seen.add(vacancyId);

          // Заголовок вакансії знаходиться в h2
          const h2 = link.querySelector("h2");
          const title = h2?.textContent?.trim() || "";

          // Короткий опис в тегу p
          const p = link.querySelector("p");
          const description = p?.textContent?.trim() || "";

          // Спан компанії, зарплати та міста
          const spans = Array.from(link.querySelectorAll("span")).map((s) => s.textContent?.trim() || "");
          const filteredSpans = spans.filter(Boolean);

          // Шукаємо зарплату (гривні, $, євро або "Від результату")
          const salary = filteredSpans.find((s) =>
            s.includes("грн") ||
            s.includes("₴") ||
            s.includes("$") ||
            s.includes("€") ||
            s.toLowerCase().includes("співбесід") ||
            /\d+\s*000/.test(s)
          );

          // Локація
          const location = filteredSpans.find((s) => {
            const lower = s.toLowerCase();
            return (
              lower.includes("віддалено") ||
              lower.includes("дистанційно") ||
              lower.includes("remote") ||
              lower.includes("київ") ||
              lower.includes("львів") ||
              lower.includes("одеса") ||
              lower.includes("дніпро") ||
              lower.includes("харків") ||
              lower.includes("запоріжжя") ||
              lower.includes("вінниця") ||
              lower.includes("полтава") ||
              lower.includes("чернігів") ||
              lower.includes("черкаси") ||
              lower.includes("житомир") ||
              lower.includes("суми") ||
              lower.includes("хмельницький") ||
              lower.includes("чернівці") ||
              lower.includes("рівне") ||
              lower.includes("івано-франківськ") ||
              lower.includes("тернопіль") ||
              lower.includes("луцьк") ||
              lower.includes("ужгород") ||
              lower.includes("україн")
            );
          }) || "Україна";

          // Компанія: зазвичай спан біля міста або між зарплатою та описом, який НЕ містить цифр/зарплати
          const company = filteredSpans.find((s) =>
            s !== title &&
            s !== salary &&
            s !== location &&
            !s.includes("грн") &&
            !s.includes("₴") &&
            !s.includes("$") &&
            !s.includes("€") &&
            !/\d+\s*000/.test(s) &&
            !s.includes("Відгукнутись") &&
            !s.includes("тому") &&
            s.length > 2
          ) || "Компанія на Robota.ua";

          results.push({
            id: vacancyId,
            href,
            title: title || filteredSpans[0] || "Вакансія на Robota.ua",
            description,
            company,
            salary,
            location,
          });
        }

        return results;
      });

      for (const item of rawVacancies) {
        if (item.title) {
          console.log(`[Robota.ua Scraper] Знайдено raw title: "${item.title}"`);
        }
      }

      const vacancies: ScrapedVacancy[] = [];

      for (const item of rawVacancies) {
        if (!item.title) continue;
        if (vacancies.length >= limit) break;

        const fullUrl = item.href.startsWith("http")
          ? item.href
          : `https://robota.ua${item.href.startsWith("/") ? "" : "/"}${item.href}`;

        const candidateVacancy: ScrapedVacancy = {
          externalId: `robotaua-${item.id}`,
          source: this.source,
          title: item.title,
          company: item.company,
          description: item.description || item.title,
          url: fullUrl,
          location: hasRemote ? `${item.location} (Віддалено)` : item.location,
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
      console.error(`[Robota.ua Scraper] Помилка під час збору вакансій:`, error);
      throw error;
    } finally {
      if (browser) {
        await browser.close().catch(() => {});
      }
    }
  }
}
