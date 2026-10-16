export interface ScrapedVacancy {
  externalId: string;
  source: string;
  title: string;
  company: string;
  description: string;
  url: string;
  location?: string;
  salary?: string;
  postedAt: Date;
}

export interface ScrapeOptions {
  keyword?: string;
  category?: string;
  limit?: number;
}

export interface JobScraper {
  readonly source: string;
  scrape(options: ScrapeOptions): Promise<ScrapedVacancy[]>;
}
