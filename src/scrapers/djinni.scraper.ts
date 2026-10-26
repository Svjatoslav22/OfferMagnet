import * as cheerio from "cheerio";
import { normalizeSeniority, type JobScraper, type ScrapedVacancy, type ScrapeOptions } from "./types";
import { parseLocationFilter, matchesLocation } from "../services/location-filter";

export class DjinniScraper implements JobScraper {
  readonly source = "DJINNI";
  private readonly baseUrl = "https://djinni.co/jobs/";

  /**
   * Парсить вакансії з Djinni за ключовим словом або спеціалізацією
   */
  async scrape(options: ScrapeOptions = {}): Promise<ScrapedVacancy[]> {
    const { keyword, limit, location: profileLocation } = options;
    const targetKeyword = keyword || "JavaScript";
    const url = new URL(this.baseUrl);

    url.searchParams.set("primary_keyword", targetKeyword);
    // Досвід за рівнем профілю
    const levels = {
      junior: ["no_exp", "1y"],
      middle: ["2y", "3y"],
      senior: ["5y"],
    }[normalizeSeniority(options.seniority)];
    for (const lvl of levels) url.searchParams.append("exp_level", lvl);

    // Фільтрація за локацією з SearchProfile
    const { hasLviv, hasRemote } = parseLocationFilter(profileLocation);
    if (hasLviv) {
      url.searchParams.set("location", "lviv");
    }
    if (hasRemote) {
      url.searchParams.set("employment", "remote");
    }

    console.log(`[Djinni Scraper] Запит URL: ${url.toString()}`);

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
      const $el = $(el);
      const link = $el.find("a.job_item__header-link, a[href^='/jobs/']").first();
      const href = link.attr("href")?.trim();
      const title = $el.find("h2.job-item__position").text().trim() || link.text().trim();

      if (title) {
        console.log(`[Djinni Scraper] Знайдено raw title: "${title}"`);
      }

      if (limit && vacancies.length >= limit) {
        return false;
      }

      if (!href || !title) return;

      const fullUrl = href.startsWith("http") ? href : `https://djinni.co${href}`;
      const idMatch = href.match(/\/jobs\/(\d+)-/);
      const externalId = idMatch ? `djinni-${idMatch[1]}` : `djinni-${Buffer.from(href).toString("base64")}`;

      const company = $el.find("span.text-gray-800").first().text().trim() || "Djinni Employer";
      const locationAndMeta = $el.find("div.fw-medium").first().text().replace(/\s+/g, " ").trim();
      const salary = $el.find("span.text-body-tertiary").first().text().trim() || undefined;

      const descContainer = $el.find("div[id^='job-description-']");
      const description = descContainer.text().replace(/\s+/g, " ").trim() || `${title} at ${company}. ${locationAndMeta}`;

      const candidateVacancy: ScrapedVacancy = {
        externalId,
        source: this.source,
        title,
        company,
        description,
        url: fullUrl,
        location: locationAndMeta || undefined,
        salary,
        postedAt: new Date(),
      };

      // Гарантуємо відсутність нерелевантних офлайн-вакансій
      if (profileLocation && !matchesLocation(candidateVacancy, profileLocation)) {
        return;
      }

      vacancies.push(candidateVacancy);
    });

    return vacancies;
  }
}
