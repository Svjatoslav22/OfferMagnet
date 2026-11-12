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
    const urlsToScrape: Array<{ url: string; isRemoteUrl: boolean }> = [];

    if (hasRemote) {
      const remoteUrl = new URL(`${this.baseUrl}${encodeURIComponent(keywordSlug)}/ukraine`);
      remoteUrl.searchParams.set("scheduleId", "3");
      urlsToScrape.push({ url: remoteUrl.toString(), isRemoteUrl: true });
    }
    if (hasLviv) {
      const lvivUrl = new URL(`${this.baseUrl}${encodeURIComponent(keywordSlug)}/lviv`);
      urlsToScrape.push({ url: lvivUrl.toString(), isRemoteUrl: false });
    }
    if (urlsToScrape.length === 0) {
      const defaultUrl = new URL(`${this.baseUrl}${encodeURIComponent(keywordSlug)}/ukraine`);
      urlsToScrape.push({ url: defaultUrl.toString(), isRemoteUrl: false });
    }

    let browser;
    try {
      browser = await createStealthBrowser();
      const context = await createStealthContext(browser);
      const page = await context.newPage();

      const vacancies: ScrapedVacancy[] = [];
      const seenIds = new Set<string>();

      for (const { url: targetUrl, isRemoteUrl } of urlsToScrape) {
        if (vacancies.length >= limit) break;
        console.log(`[Robota.ua Scraper] Перехід за URL: ${targetUrl}`);

        await page.goto(targetUrl, {
          waitUntil: "domcontentloaded",
          timeout: 20000,
        });

        // Пауза для ініціалізації Angular-компонентів та Cloudflare валідації
        await page.waitForTimeout(3000);

        const rawVacancies = await page.evaluate(() => {
          const mainList = document.querySelector("alliance-jobseeker-desktop-vacancies-list");
          const links = Array.from(
            (mainList || document).querySelectorAll("a[href*='/company'][href*='/vacancy']")
          );
          const seen = new Set<string>();
          const results = [];

          for (const link of links) {
            if (link.closest("alliance-jobseeker-recommended-vacancies, [class*='recommend']")) {
              continue;
            }
            const href = link.getAttribute("href") || "";
            const match = href.match(/vacancy(\d+)/);
            if (!match) continue;

            const vacancyId = match[1];
            if (!vacancyId || seen.has(vacancyId)) continue;
            seen.add(vacancyId);

            // Заголовок вакансії знаходиться в h2
            const h2 = link.querySelector("h2");
            const title = h2?.textContent?.trim() || "";

            // Короткий опис в тегу p + бейджі
            const p = link.querySelector("p");
            const badges = Array.from(link.querySelectorAll(".badge"))
              .map((b) => b.textContent?.trim() || "")
              .filter(Boolean)
              .join(", ");
            const pText = p?.textContent?.trim() || "";
            const description = [pText, badges].filter(Boolean).join(". ");

            // Назва компанії в Robota.ua знаходиться у span.santa-mr-20
            const companySpan = link.querySelector("span.santa-mr-20");
            const companyFromSelector = companySpan?.textContent?.trim() || "";

            // Спан компанії, зарплати та міста
            const spans = Array.from(link.querySelectorAll("span")).map((s) => s.textContent?.trim() || "");
            const filteredSpans = spans.filter(Boolean);

            // Шукаємо зарплату (гривні, $, євро)
            const salary = filteredSpans.find(
              (s) =>
                (s.includes("грн") || s.includes("₴") || s.includes("$") || s.includes("€")) &&
                /\d/.test(s)
            );

            // Локація
            const location =
              filteredSpans.find((s) => {
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

            const company =
              companyFromSelector ||
              filteredSpans.find(
                (s) =>
                  s !== title &&
                  s !== salary &&
                  s !== location &&
                  !s.includes("грн") &&
                  !s.includes("₴") &&
                  !s.includes("$") &&
                  !s.includes("€") &&
                  !/\d+\s*000/.test(s) &&
                  !s.toLowerCase().includes("співбесід") &&
                  !s.toLowerCase().includes("доплата") &&
                  !s.toLowerCase().includes("служб") &&
                  !s.includes("Відгукнутись") &&
                  !s.includes("тому") &&
                  s.length > 2
              ) ||
              "Компанія на Robota.ua";

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
            console.log(`[Robota.ua Scraper] Знайдено raw title: "${item.title}" (${item.company})`);
          }
        }

        for (const item of rawVacancies) {
          if (!item.title || seenIds.has(item.id)) continue;
          if (vacancies.length >= limit) break;

          const fullUrl = item.href.startsWith("http")
            ? item.href
            : `https://robota.ua${item.href.startsWith("/") ? "" : "/"}${item.href}`;

          const isOfficeOnly = /офісний\s+формат|тільки\s+в\s+офісі|office\s+only/i.test(
            `${item.title} ${item.description}`
          );

          const candidateVacancy: ScrapedVacancy = {
            externalId: `robotaua-${item.id}`,
            source: this.source,
            title: item.title,
            company: item.company,
            description: item.description || item.title,
            url: fullUrl,
            location:
              isRemoteUrl && !isOfficeOnly && !item.location.toLowerCase().includes("віддален")
                ? `${item.location} (Віддалено)`
                : item.location,
            salary: item.salary,
            postedAt: new Date(),
          };

          // Гарантуємо відсутність нерелевантних офлайн-вакансій з Києва, Дніпра тощо
          if (options.location && !matchesLocation(candidateVacancy, options.location)) {
            continue;
          }

          seenIds.add(item.id);
          vacancies.push(candidateVacancy);
        }
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
