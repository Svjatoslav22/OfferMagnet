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
}

export interface JobScraper {
  readonly source: string;
  scrape(options?: ScrapeOptions): Promise<ScrapedVacancy[]>;
}
