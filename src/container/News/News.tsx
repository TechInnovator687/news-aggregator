import { Box, CircularProgress, Container } from "@mui/material";
import { NewsHeader } from "../../components/NewsHeader/NewsHeader";
import useNewsController from "./useNewsController";
import styles from "./styles";
import NewsCard from "../../components/NewsCard/NewsCard";

export const News = () => {
  const { filters, setFilters, onApplyFilters, news, loading } =
    useNewsController();

  return (
    <Box sx={styles.root}>
      <NewsHeader
        filters={filters}
        setFilters={setFilters}
        onApplyFilters={onApplyFilters}
      />
      <Container maxWidth={false} sx={styles.newsContainer}>
        <Box sx={styles.newsList}>
          {news?.map((newsItem) => (
            <Box key={newsItem?.title} sx={styles.newsCard}>
              <NewsCard {...newsItem} />
            </Box>
          ))}
        </Box>
        {loading && (
          <Box sx={styles.newsLoader}>
            <CircularProgress color="secondary" />
          </Box>
        )}
      </Container>
    </Box>
  );
};
