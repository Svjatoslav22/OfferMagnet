import * as cheerio from "cheerio";
import type { JobScraper, ScrapedVacancy, ScrapeOptions } from "./types";

export class DjinniScraper implements JobScraper {
  readonly source = "DJINNI";
  private readonly baseUrl = "https://djinni.co/jobs/";

  /**
   * Парсить вакансії з Djinni за ключовим словом або спеціалізацією
   */
  async scrape(options: ScrapeOptions = {}): Promise<ScrapedVacancy[]> {
    const { keyword, limit } = options;
    const url = new URL(this.baseUrl);

    if (keyword) {
      url.searchParams.set("primary_keyword", keyword);
    }
    // Junior: без досвіду та до 1 року
    url.searchParams.append("exp_level", "no_exp");
    url.searchParams.append("exp_level", "1y");

    const response = await fetch(url.toString(), {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "Accept":
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "uk-UA,uk;q=0.9,en-US;q=0.8,en;q=0.7",
      },
    });

    if (!response.ok) {
      throw new Error(`[Djinni Scraper] HTTP Error ${response.status}: ${response.statusText}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);
    const vacancies: ScrapedVacancy[] = [];

    const items = $("div.job-item");

    items.each((_, el) => {
      if (limit && vacancies.length >= limit) {
        return false;
      }

      const $el = $(el);
      const link = $el.find("a.job_item__header-link, a[href^='/jobs/']").first();
      const href = link.attr("href")?.trim();
      const title = $el.find("h2.job-item__position").text().trim() || link.text().trim();

      if (!href || !title) return;

      const fullUrl = href.startsWith("http") ? href : `https://djinni.co${href}`;
      const idMatch = href.match(/\/jobs\/(\d+)-/);
      const externalId = idMatch ? `djinni-${idMatch[1]}` : `djinni-${Buffer.from(href).toString("base64")}`;

      const company = $el.find("span.text-gray-800").first().text().trim() || "Djinni Employer";
      const locationAndMeta = $el.find("div.fw-medium").first().text().replace(/\s+/g, " ").trim();
      const salary = $el.find("span.text-body-tertiary").first().text().trim() || undefined;

      const descContainer = $el.find("div[id^='job-description-']");
      const description = descContainer.text().replace(/\s+/g, " ").trim() || `${title} at ${company}. ${locationAndMeta}`;

      vacancies.push({
        externalId,
        source: this.source,
        title,
        company,
        description,
        url: fullUrl,
        location: locationAndMeta || undefined,
        salary,
        postedAt: new Date(),
      });
    });

    return vacancies;
  }
}
