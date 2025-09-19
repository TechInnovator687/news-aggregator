import NewsService from "./NewsService";
import type { Filters, NewsItem } from "../types/";
import { NewsCategory, Source } from "../types/";
import { API_CONFIG } from "../config/ApiConfig";

const categoryMapping = {
  [NewsCategory.technology]: "technology",
  [NewsCategory.sports]: "sport",
  [NewsCategory.politics]: "politics",
  [NewsCategory.business]: "business",
  [NewsCategory.entertainment]: "film",
  [NewsCategory.global]: "world",
};

interface GuardianArticle {
  webUrl: string;
  webTitle: string;
  webPublicationDate: Date;
  sectionName: string;
}

interface GuardianResponse {
  response: {
    results: GuardianArticle[];
  };
}

class GuardianService extends NewsService<GuardianResponse> {
  protected endpoint = API_CONFIG[Source.guardian].endpoint;
  protected apiKey = API_CONFIG[Source.guardian].apiKey;
  protected keyMappings: Record<string, string> = {
    category: "section",
    keyword: "q",
    dateRange: "from-date",
  };
  protected separator = "?";

  protected mapFilters(filters: Filters): Record<string, string> {
    const mappedFilters: Record<string, string> = {};
    Object.keys(filters).forEach((key) => {
      if (!filters[key as keyof Filters]) return;
      const sourceKey = this.keyMappings[key];
      if (sourceKey) {
        if (sourceKey === "section") {
          mappedFilters[sourceKey] =
            categoryMapping[filters[key as keyof Filters]! as NewsCategory];
        } else {
          mappedFilters[sourceKey] = filters[key as keyof Filters]!;
        }
      }
    });
    return { ...mappedFilters, "api-key": this.apiKey };
  }

  protected normalizeResponse(data: GuardianResponse): NewsItem[] {
    return (
      data.response.results.map((item: GuardianArticle) => ({
        url: item.webUrl ?? "",
        title: item.webTitle ?? "",
        date: item.webPublicationDate,
        category: item.sectionName ?? "",
        source: "Guardian",
        Sourcekey: Source.guardian,
      })) ?? []
    );
  }
}

export default new GuardianService();
