abstract class NewsService<T> {
  protected abstract endpoint: string;
  protected abstract separator: string;
  protected abstract normalizeResponse(data: T): any;

  public async fetchNews(page: number): Promise<any[]> {
    const queryParams: Record<string, string> = {
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
