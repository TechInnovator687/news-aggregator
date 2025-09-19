import { Box, CircularProgress, Container } from "@mui/material";
import { NewsCard } from "@components/NewsCard";
import styles from "./styles";
import { useNews } from "@/context/NewsContext";

export const News = () => {
  const { news, loading } = useNews();

  return (
    <Box sx={styles.root}>
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
