import NewsService from "./NewsService";
import type { Filters, NewsItem } from "../types/";
import { NewsCategory, Source } from "../types/";
import { API_CONFIG } from "../config/ApiConfig";

const categoryMapping = {
  [NewsCategory.technology]: "technology",
  [NewsCategory.sports]: "sports",
  [NewsCategory.politics]: "politics",
  [NewsCategory.business]: "business",
  [NewsCategory.entertainment]: "film",
  [NewsCategory.global]: "world",
};

interface NewsAPIArticle {
  url: string;
  title: string;
  publishedAt: Date;
  source: { name?: string };
}

interface NewsAPIResponse {
  articles?: NewsAPIArticle[];
}

class NewsAPI extends NewsService<NewsAPIResponse> {
  protected endpoint = API_CONFIG[Source.newsApi].endpoint;
  protected apiKey = API_CONFIG[Source.newsApi].apiKey;
  protected keyMappings: Record<string, string> = {
    category: "category",
    keyword: "q",
    dateRange: "from-date",
  };
  protected separator = "";

  protected mapFilters(filters: Filters): Record<string, string> {
    const mappedFilters: Record<string, string> = {};
    Object.keys(filters).forEach((key) => {
      if (!filters[key as keyof Filters]) return;
      const sourceKey = this.keyMappings[key];
      if (sourceKey) {
        if (sourceKey === "category") {
          mappedFilters[sourceKey] = `${
            categoryMapping[filters[key as keyof Filters]! as NewsCategory]
          }`;
        } else {
          mappedFilters[sourceKey] = filters[key as keyof Filters]!;
        }
      }
    });
    return { ...mappedFilters, apiKey: this.apiKey };
  }

  protected normalizeResponse(data: NewsAPIResponse): NewsItem[] {
    return (
      data.articles?.map((item: NewsAPIArticle) => ({
        url: item.url ?? "",
        title: item.title ?? "",
        date: item.publishedAt ?? "",
        category: item.source.name ?? "",
        source: "All News",
        Sourcekey: Source.newsApi,
      })) ?? []
    );
  }
}

export default new NewsAPI();
