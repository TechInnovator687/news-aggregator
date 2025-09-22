import NewsService from "./NewsService";
import type { Filters, NewsItem } from "../types/";
import { NewsCategory, Source } from "../types/";
import { API_CONFIG } from "../config/ApiConfig";

interface NYTimesArticle {
  web_url: string;
  headline: { main?: string };
  pub_date: Date;
  section_name: string;
  snippet: string;
  multimedia: {
    default: {
      url: string;
    };
  };
  byline: {
    original: string;
  };
}

interface NYTimesResponse {
  response?: {
    docs: NYTimesArticle[];
  };
}

const categoryMapping = {
  [NewsCategory.technology]: "technology",
  [NewsCategory.sports]: "Sports",
  [NewsCategory.politics]: "politics",
  [NewsCategory.business]: "Business Day",
  [NewsCategory.entertainment]: "Briefing",
  [NewsCategory.global]: "world",
};

class NYTimesService extends NewsService<NYTimesResponse> {
  protected endpoint = API_CONFIG[Source.nytime].endpoint;
  protected apiKey = API_CONFIG[Source.nytime].apiKey;
  protected keyMappings: Record<string, string> = {
    category: "fq",
    keyword: "q",
    dateRange: "pub_date",
  };
  protected separator = "&";

  protected mapFilters(filters: Filters): Record<string, string> {
    const mappedFilters: Record<string, string> = {};
    Object.keys(filters).forEach((key) => {
      if (!filters[key as keyof Filters]) return;
      const sourceKey = this.keyMappings[key];
      if (sourceKey) {
        if (sourceKey === "fq") {
          mappedFilters[sourceKey] = `section_name:${
            categoryMapping[filters[key as keyof Filters]! as NewsCategory]
          }`;
        } else {
          mappedFilters[sourceKey] = filters[key as keyof Filters]!;
        }
      }
    });
    return { ...mappedFilters, "api-key": this.apiKey };
  }

  protected normalizeResponse(data: NYTimesResponse): NewsItem[] {
    return (
      data.response?.docs.map((item: NYTimesArticle) => ({
        url: item.web_url ?? "",
        title: item.headline.main ?? "",
        description: item.snippet ?? "",
        date: item.pub_date,
        category: item.section_name ?? "",
        imgUrl: item.multimedia.default.url,
        author: item.byline.original,
        source: "NY Time",
        Sourcekey: Source.nytime,
      })) ?? []
    );
  }
}

export default new NYTimesService();
