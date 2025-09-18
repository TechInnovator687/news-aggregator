export const Source = {
  nytime: "nytime",
  guardian: "guardian",
  newsApi: "newsApi",
} as const;

export interface Filters {
  category: NewsCategory | null;
  dateRange: string | null;
  keyword: string | null;
  source: keyof typeof Source | null;
}

export interface NewsItem {
  description?: string;
  url: string;
  title: string;
  date: Date;
  author?: string;
  source: string;
  category: string;
  Sourcekey: keyof typeof Source;
}

export const NewsCategory = {
  technology: "technology",
  sports: "sports",
  politics: "politics",
  business: "business",
  entertainment: "entertainment",
  global: "global",
} as const;

export type NewsCategory = (typeof NewsCategory)[keyof typeof NewsCategory];
