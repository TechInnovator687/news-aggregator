import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { NewsCard } from "@components/NewsCard";
import styles from "./styles";
import { useNews } from "@/context/NewsContext";
import { FeaturedNewsCard } from "@components/FeaturedNewsCard";

export const News = () => {
  const { news, loading } = useNews();
  const [featuredNews, ...newsList] = news || [];

  return (
    <Box sx={styles.root}>
      <Container maxWidth={false} sx={styles.newsContainer}>
        <Box>
          <FeaturedNewsCard
            source={featuredNews?.source || ""}
            title={featuredNews?.title || ""}
            category={featuredNews?.category || ""}
            date={featuredNews?.date || ""}
            readTime={"1 min"}
            articleUrl={featuredNews?.url || ""}
          />
        </Box>
        <Box sx={styles.sectionHeader}>
          <Typography variant="h5" fontWeight={800}>
            More News
          </Typography>
        </Box>

        <Box sx={styles.newsList}>
          {newsList?.map((newsItem) => (
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
