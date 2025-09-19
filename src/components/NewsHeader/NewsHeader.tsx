import { Box, Typography } from "@mui/material";
import NewsFilters from "../../components/NewsFilter";
import NewsFeed from "../../components/NewsFeed";
import type { Filters } from "../../types";
import styles from "./styles";

type NewsHeaderProps<T> = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<T>>;
  onApplyFilters: () => void;
};

export const NewsHeader = <T,>({
  filters,
  setFilters,
  onApplyFilters,
}: NewsHeaderProps<T>) => (
  <Box sx={styles.newsHeaderRoot}>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        News Aggregator
      </Typography>
    </Box>
    <Box sx={{ display: "flex", mr: 5, gap: 2 }}>
      <NewsFeed
        category={filters.category}
        source={filters.source}
        onCategoryChange={(category) =>
          setFilters((prev) => ({ ...prev, category }))
        }
        onSourceChange={(source) => setFilters((prev) => ({ ...prev, source }))}
        onApplyFilters={onApplyFilters}
      />
      <NewsFilters
        category={filters.category}
        source={filters.source}
        keyword={filters.keyword}
        dateRange={filters.dateRange}
        onCategoryChange={(category) =>
          setFilters((prev) => ({ ...prev, category }))
        }
        onSourceChange={(source) => setFilters((prev) => ({ ...prev, source }))}
        onKeywordChange={(keyword) =>
          setFilters((prev) => ({ ...prev, keyword }))
        }
        onDateRangeChange={(dateRange) =>
          setFilters((prev) => ({ ...prev, dateRange }))
        }
        onApplyFilters={onApplyFilters}
      />
    </Box>
  </Box>
);
