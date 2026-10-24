export interface ScrapedVacancy {
  externalId: string;
  source: string;
  title: string;
  company: string;
  description: string;
  url: string;
  location?: string | undefined;
  salary?: string | undefined;
  postedAt: Date;
}

export interface ScrapeOptions {
  keyword?: string | undefined;
  category?: string | undefined;
  limit?: number | undefined;
  /** Рівень кандидата з профілю (Junior / Middle / Senior) — для фільтра досвіду в URL */
  seniority?: string | undefined;
  /** Локація з профілю кандидата (наприклад, "Remote / Львів") */
  location?: string | undefined;
}

/** Нормалізує рівень профілю до junior | middle | senior (за замовчуванням junior) */
export function normalizeSeniority(level?: string | undefined): "junior" | "middle" | "senior" {
  const l = (level || "").toLowerCase();
  if (l.includes("senior") || l.includes("lead")) return "senior";
  if (l.includes("middle") || l.includes("mid")) return "middle";
  return "junior";
}

export interface JobScraper {
  readonly source: string;
  scrape(options?: ScrapeOptions): Promise<ScrapedVacancy[]>;
}
