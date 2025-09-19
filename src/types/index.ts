export interface Filters {
  category: NewsCategory | null;
  dateRange: string | null;
  keyword: string | null;
  source: Source | null;
}

export interface NewsItem {
  description?: string;
  url: string;
  title: string;
  date: Date;
  author?: string;
  source: string;
  category: string;
  Sourcekey: Source;
}
export enum Source {
  nytime = "nytime",
  guardian = "guardian",
  newsApi = "newsapi",
}

export enum NewsCategory {
  technology = "technology",
  sports = "sports",
  politics = "politics",
  business = "business",
  entertainment = "entertainment",
  global = "global",
}
