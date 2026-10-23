import * as cheerio from "cheerio";
import type { JobScraper, ScrapedVacancy, ScrapeOptions } from "./types";

export class DouScraper implements JobScraper {
  readonly source = "DOU";
  private readonly baseUrl = "https://jobs.dou.ua/vacancies/";

  /**
   * Парсить вакансії з DOU за ключовим словом або категорією
   */
  async scrape(options: ScrapeOptions = {}): Promise<ScrapedVacancy[]> {
    const { keyword, category, limit } = options;
    const url = new URL(this.baseUrl);

    if (keyword) {
      url.searchParams.set("search", keyword);
    }
    if (category) {
      url.searchParams.set("category", category);
    }
    // Junior: досвід 0-1 рік
    url.searchParams.set("exp", "0-1");

    const response = await fetch(url.toString(), {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "uk-UA,uk;q=0.9,en-US;q=0.8,en;q=0.7",
      },
    });

    if (!response.ok) {
      throw new Error(`[DOU Scraper] HTTP Error ${response.status}: ${response.statusText}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);
    const vacancies: ScrapedVacancy[] = [];

    const vacancyItems = $("li.l-vacancy");

    vacancyItems.each((_, element) => {
      if (limit && vacancies.length >= limit) {
        return false; // Break cheerio loop
      }

      const $el = $(element);
      const titleLink = $el.find("div.title a.vt");
      const title = titleLink.text().trim();
      const jobUrl = titleLink.attr("href")?.trim();

      if (!title || !jobUrl) return;

      // Витягуємо externalId з URL (наприклад: https://jobs.dou.ua/.../vacancies/347775/)
      const idMatch = jobUrl.match(/\/vacancies\/(\d+)\/?/);
      const externalId = idMatch ? `dou-${idMatch[1]}` : `dou-${Buffer.from(jobUrl).toString("base64")}`;

      const company = $el.find("a.company").first().text().replace(/\u00a0/g, " ").trim();
      const location = $el.find("span.cities").text().trim();
      const salary = $el.find("span.salary").text().trim() || undefined;
      const description = $el.find("div.sh-info").text().replace(/\s+/g, " ").trim();
      const dateText = $el.find("div.date").text().trim();

      const postedAt = this.parseDouDate(dateText);

      vacancies.push({
        externalId,
        source: this.source,
        title,
        company,
        description,
        url: jobUrl,
        location: location || undefined,
        salary,
        postedAt,
      });
    });

    return vacancies;
  }

  /**
   * Конвертує текстову дату DOU (наприклад: "сьогодні", "15 жовтня") в Date
   */
  private parseDouDate(dateStr: string): Date {
    const now = new Date();
    if (!dateStr) return now;

    const lower = dateStr.toLowerCase();
    if (lower.includes("сьогодні")) return now;
    if (lower.includes("вчора")) {
      const yesterday = new Date(now);
      yesterday.setDate(now.getDate() - 1);
      return yesterday;
    }

    const months: Record<string, number> = {
      січня: 0,
      лютого: 1,
      березня: 2,
      квітня: 3,
      травня: 4,
      червня: 5,
      липня: 6,
      серпня: 7,
      вересня: 8,
      жовтня: 9,
      листопада: 10,
      грудня: 11,
    };

    const parts = lower.split(" ");
    const dayStr = parts[0];
    const monthStr = parts[1];
    if (dayStr && monthStr) {
      const day = parseInt(dayStr, 10);
      const month = months[monthStr];
      if (!isNaN(day) && month !== undefined) {
        return new Date(now.getFullYear(), month, day);
      }
    }

    return now;
  }
}
