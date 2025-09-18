import type { Filters, NewsItem } from "../types/types";

abstract class NewsService<T> {
  protected abstract endpoint: string;
  protected abstract apiKey: string;
  protected abstract keyMappings: Record<string, string>;
  protected abstract separator: string;
  protected abstract normalizeResponse(data: T): NewsItem[];

  protected mapFilters(filters: Filters): Record<string, string> {
    const mappedFilters: Record<string, string> = {};
    Object.keys(filters).forEach((key) => {
      const sourceKey = this.keyMappings[key];
      if (sourceKey) {
        mappedFilters[sourceKey] = filters[key as keyof Filters]!;
      }
    });
    return mappedFilters;
  }

  public async fetchNews(filters: Filters, page: number): Promise<NewsItem[]> {
    const mappedFilters = this.mapFilters(filters);
    const queryParams: Record<string, string> = {
      ...mappedFilters,
      page: page.toString(),
    };
    const params = new URLSearchParams(queryParams).toString();
    const response = await fetch(
      `${this.endpoint}${this.separator ?? ""}${params}`
    );
    const data = await response.json();

    return this.normalizeResponse(data);
  }
}

export default NewsService;
