import { useEffect, useState } from "react";
import NewsServices from "../../services";
import type { Filters, NewsItem } from "../../types";
import { Source } from "../../types";
import { useInfiniteScroll } from "@hooks/useInfiniteScroll";

const selectedSources: Source[] = Object.keys(NewsServices) as Source[];

export const useNewsController = () => {
  const [filters, setFilters] = useState<Filters>({
    category: null,
    dateRange: null,
    keyword: null,
    source: null,
  });
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const loadMore = () => setPage((prev) => prev + 1);

  useInfiniteScroll(loading, false, loadMore);

  const fetchNews = async (
    filters: Filters,
    page: number,
    updateNews: (news: NewsItem[]) => void,
    shouldSort: boolean = true
  ) => {
    setLoading(true);
    try {
      let allNews;

      if (filters.source) {
        allNews = await NewsServices[filters.source]?.fetchNews(filters, page);
      } else {
        const results = await Promise.allSettled(
          selectedSources.map((source) =>
            NewsServices[source]?.fetchNews(filters, page)
          )
        );

        allNews = results
          .filter((res) => res.status === "fulfilled")
          .flatMap((res) => (res as PromiseFulfilledResult<NewsItem[]>).value);
      }

      if (shouldSort) {
        allNews.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      }

      updateNews(allNews);
    } catch (err) {
      console.error("Error fetching news:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const appendNews = (fetched: NewsItem[]) => {
      setNews((prev) => [...prev, ...fetched]);
    };

    fetchNews(filters, page, appendNews, true);
  }, [page, filters]);

  useEffect(() => {
    setNews([]);
    setPage(1);
  }, [filters]);

  const onApplyFilters = async () => {
    fetchNews(filters, 1, (allNews) => setNews(allNews), false);
  };

  return { filters, setFilters, news, loading, onApplyFilters };
};
