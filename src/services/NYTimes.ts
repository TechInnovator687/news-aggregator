import NewsService from "./NewsHandler";

class NYTimesService extends NewsService<any> {
  protected endpoint: string;
  protected separator: string;
}

export default new NYTimesService();
