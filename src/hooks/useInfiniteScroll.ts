import { useEffect, useState } from "react";

export const useInfiniteScroll = (
  loading: boolean,
  hasFetched: boolean,
  loadMore: () => void
) => {
  const [internalHasFetched, setInternalHasFetched] = useState(hasFetched);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrolledPercentage = (scrollTop + windowHeight) / fullHeight;

      if (scrolledPercentage >= 0.75 && !loading && !internalHasFetched) {
        setInternalHasFetched(true);
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, internalHasFetched, loadMore]);

  useEffect(() => {
    if (!loading) {
      setInternalHasFetched(false);
    }
  }, [loading]);

  return;
};
