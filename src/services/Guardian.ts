import NewsService from "./NewsHandler";

class GuardianService extends NewsService<any> {
  protected endpoint: string;
  protected separator: string;
}

export default new GuardianService();
