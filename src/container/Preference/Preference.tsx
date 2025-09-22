import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
} from "@mui/material";
import { Label, ArrowBack } from "@mui/icons-material";
import { Source, NewsCategory } from "../../types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNews } from "@/context/NewsContext";
import { categories, newsSources } from "@utils/constants";
import { preferenceStyles as styles } from "./styles";

export const Preference = () => {
  const { filters, setFilters, onApplyFilters } = useNews();
  const navigate = useNavigate();

  const [selectedSource, setSelectedSource] = useState<Source | null>(
    filters.source || null
  );
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory | null>(
    filters.category || null
  );

  const handleSourceSelect = (source: Source) => {
    const newSource = selectedSource === source ? null : source;
    setSelectedSource(newSource);
    setFilters((prev) => ({ ...prev, source: newSource }));
  };

  const handleCategorySelect = (category: NewsCategory) => {
    const newCategory = selectedCategory === category ? null : category;
    setSelectedCategory(newCategory);
    setFilters((prev) => ({ ...prev, category: newCategory }));
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h4" sx={styles.title} gutterBottom>
        Personalize Your Feed
      </Typography>
      <Typography variant="body1" sx={styles.subtitle}>
        Tailor your news experience. Select your favorite source and category.
      </Typography>

      <Card sx={styles.card}>
        <CardContent>
          <Typography variant="h6" sx={styles.title}>
            Preferred News Source
          </Typography>
          <Box sx={styles.chipContainer}>
            {newsSources.map(({ label, value }) => (
              <Chip
                key={value}
                label={label}
                clickable
                onClick={() => handleSourceSelect(value)}
                color={selectedSource === value ? "primary" : "default"}
                variant={selectedSource === value ? "filled" : "outlined"}
              />
            ))}
          </Box>
        </CardContent>
      </Card>

      <Card sx={styles.card}>
        <CardContent>
          <Typography variant="h6" sx={styles.title}>
            Preferred Category
          </Typography>
          <Box sx={styles.chipContainer}>
            {categories.map(({ label, value }) => (
              <Chip
                key={value}
                label={label}
                clickable
                onClick={() => handleCategorySelect(value)}
                color={selectedCategory === value ? "primary" : "default"}
                variant={selectedCategory === value ? "filled" : "outlined"}
              />
            ))}
          </Box>
        </CardContent>
      </Card>

      <Box sx={styles.actionBox}>
        <Button
          variant="outlined"
          startIcon={<ArrowBack />}
          onClick={() => navigate("/")}
        >
          Back to Feed
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Label />}
          onClick={() => {
            onApplyFilters();
            navigate("/");
          }}
        >
          Save Preferences
        </Button>
      </Box>
    </Box>
  );
};
