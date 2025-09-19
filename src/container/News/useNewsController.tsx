import { useEffect, useState } from "react";
import NewsServices from "../../services";
import type { Filters, NewsItem } from "../../types";
import { Source } from "../../types";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

const selectedSources: Source[] = Object.keys(NewsServices) as Source[];

const useNewsController = () => {
  const [filters, setFilters] = useState<Filters>({
    category: null,
    dateRange: null,
    keyword: null,
    source: null,
  });
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useInfiniteScroll(loading, false, loadMore);

  const fetchNews = async (
    filters: Filters,
    page: number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateNews: (news: any[]) => void,
    shouldSort: boolean = true
  ) => {
    setLoading(true);
    try {
      let allNews;

      if (filters.source) {
        allNews = await NewsServices[filters.source].fetchNews(filters, page);
      } else {
        const results = await Promise.allSettled(
          selectedSources.map((source) =>
            NewsServices[source].fetchNews(filters, page)
          )
        );

        allNews = results
          .filter((result) => result.status === "fulfilled")
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .flatMap((result) => (result as PromiseFulfilledResult<any[]>).value);
      }

      if (shouldSort) {
        allNews = allNews.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      }

      updateNews(allNews);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(
      filters,
      page,
      (sortedArticles) => {
        setNews((prevNews) => [...prevNews, ...sortedArticles]);
      },
      true
    );
  }, [page, filters]);

  useEffect(() => {
    setNews([]);
    setPage(1);
  }, [filters]);

  const onApplyFilters = async () => {
    fetchNews(
      filters,
      page,
      (allNews) => {
        setNews(allNews);
      },
      false
    );
  };

  return { filters, setFilters, onApplyFilters, news, loading };
};

export default useNewsController;
