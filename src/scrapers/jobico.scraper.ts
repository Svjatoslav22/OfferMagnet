import * as cheerio from "cheerio";
import type { JobScraper, ScrapedVacancy, ScrapeOptions } from "./types";
import { matchesLocation } from "../services/location-filter";

export class JobicoScraper implements JobScraper {
  readonly source = "JOBICO";
  private readonly mcpUrl = "https://jobico.io/api/mcp";
  private readonly feedUrl = "https://jobico.io/api/feeds/jobs.xml";

  /**
   * Парсить свіжі IT-вакансії з Jobico за ключовим словом
   */
  async scrape(options: ScrapeOptions = {}): Promise<ScrapedVacancy[]> {
    const { keyword = "Node.js", limit = 5, location } = options;

    let results: ScrapedVacancy[];
    try {
      results = await this.scrapeViaMcp(keyword, limit);
    } catch (mcpError) {
      console.warn("⚠️ [Jobico Scraper] MCP API помилка, резервний парсинг через XML-фід:", mcpError);
      results = await this.scrapeViaXmlFeed(keyword, limit);
    }

    if (location) {
      return results.filter((v) => matchesLocation(v, location));
    }
    return results;
  }

  /**
   * Отримує вакансії через офіційний Jobico MCP endpoint (streamable HTTP API)
   */
  private async scrapeViaMcp(keyword: string, limit: number): Promise<ScrapedVacancy[]> {
    const response = await fetch(this.mcpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "MCP-Protocol-Version": "2026-07-28",
        "Mcp-Method": "tools/call",
        "Mcp-Name": "search_jobs",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "tools/call",
        params: {
          name: "search_jobs",
          arguments: {
            query: keyword,
            limit: Math.min(limit * 2, 20),
          },
          _meta: { "io.modelcontextprotocol/protocolVersion": "2026-07-28" },
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`[Jobico Scraper] MCP Error HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    const contentText = data?.result?.content?.[0]?.text;
    if (!contentText) {
      return [];
    }

    const parsed = JSON.parse(contentText);
    const jobs: any[] = parsed?.jobs || [];
    const selectedJobs = jobs.slice(0, limit);

    // Паралельно довантажуємо повні описи вакансій через get_job
    const vacanciesWithDetails = await Promise.allSettled(
      selectedJobs.map(async (job) => {
        let fullDescription = `${job.title} в компанії ${job.company?.name || "Jobico"}.`;
        if (job.techStack?.length) {
          fullDescription += ` Стек технологій: ${job.techStack.join(", ")}.`;
        }

        try {
          const detailRes = await fetch(this.mcpUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "MCP-Protocol-Version": "2026-07-28",
              "Mcp-Method": "tools/call",
              "Mcp-Name": "get_job",
            },
            body: JSON.stringify({
              jsonrpc: "2.0",
              id: 2,
              method: "tools/call",
              params: {
                name: "get_job",
                arguments: { slug: job.slug },
                _meta: { "io.modelcontextprotocol/protocolVersion": "2026-07-28" },
              },
            }),
          });

          if (detailRes.ok) {
            const detailData = await detailRes.json();
            const detailText = detailData?.result?.content?.[0]?.text;
            if (detailText) {
              const fullJob = JSON.parse(detailText);
              if (fullJob.description) {
                const $ = cheerio.load(fullJob.description);
                fullDescription = $.text().replace(/\s+/g, " ").trim();
              }
            }
          }
        } catch {
          // Якщо get_job дав збій, залишаємо базовий опис
        }

        // Форматуємо заробітну плату
        let salaryFormatted: string | undefined;
        if (job.salary) {
          const min = job.salary.min ? `$${job.salary.min}` : "";
          const max = job.salary.max ? `$${job.salary.max}` : "";
          const sep = min && max ? " - " : "";
          salaryFormatted = `${min}${sep}${max} ${job.salary.currency || "USD"}`.trim();
        }

        // Форматуємо локацію (Remote, місто тощо)
        let locationFormatted = "Україна";
        if (job.locationType === "remote") {
          locationFormatted = "Remote";
        } else if (job.city) {
          locationFormatted = job.country ? `${job.city}, ${job.country}` : job.city;
        } else if (job.locationType) {
          locationFormatted = job.locationType;
        }

        const vacancy: ScrapedVacancy = {
          externalId: `jobico-${job.slug}`,
          source: "JOBICO",
          title: job.title,
          company: job.company?.name || "Компанія на Jobico",
          description: fullDescription,
          url: job.url || `https://jobico.io/jobs/${job.slug}`,
          location: locationFormatted,
          salary: salaryFormatted,
          postedAt: job.postedAt ? new Date(job.postedAt) : new Date(),
        };

        return vacancy;
      })
    );

    return vacanciesWithDetails
      .filter((r): r is PromiseFulfilledResult<ScrapedVacancy> => r.status === "fulfilled")
      .map((r) => r.value);
  }

  /**
   * Резервний метод парсингу через публічний XML-фід для агрегаторів
   */
  private async scrapeViaXmlFeed(keyword: string, limit: number): Promise<ScrapedVacancy[]> {
    const res = await fetch(this.feedUrl);
    if (!res.ok) {
      throw new Error(`[Jobico Scraper] XML Feed HTTP ${res.status}`);
    }

    const xml = await res.text();
    const $ = cheerio.load(xml, { xmlMode: true });
    const vacancies: ScrapedVacancy[] = [];
    const lowerKw = keyword.toLowerCase();

    $("job").each((_, el) => {
      if (vacancies.length >= limit) return false;

      const $job = $(el);
      const title = $job.find("title").text().trim();
      const descHtml = $job.find("description").text().trim();
      const $desc = cheerio.load(descHtml);
      const description = $desc.text().replace(/\s+/g, " ").trim();

      // Фільтруємо за ключовим словом
      if (lowerKw && !title.toLowerCase().includes(lowerKw) && !description.toLowerCase().includes(lowerKw)) {
        return;
      }

      const id = $job.find("id").text().trim();
      const link = $job.find("link").text().trim();
      const company = $job.find("company").text().trim() || "Компанія на Jobico";
      const salary = $job.find("salary").text().trim() || undefined;
      const locationType = $job.find("locationtype").text().trim();
      const city = $job.find("city").text().trim();
      const dateStr = $job.find("date").text().trim();

      let location = "Україна";
      if (locationType === "remote") location = "Remote";
      else if (city) location = city;

      vacancies.push({
        externalId: `jobico-${id || Buffer.from(link).toString("base64").slice(0, 16)}`,
        source: "JOBICO",
        title,
        company,
        description: description || `${title} в ${company}`,
        url: link,
        location,
        salary,
        postedAt: dateStr ? new Date(dateStr) : new Date(),
      });
    });

    return vacancies;
  }
}
