import NewsService from "./NewsHandler";

class NewsAPI extends NewsService<any> {
  protected endpoint: string;
  protected separator: string;
}

export default new NewsAPI();
