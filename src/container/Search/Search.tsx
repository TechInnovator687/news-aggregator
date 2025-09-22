import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  TextField,
  Button,
} from "@mui/material";
import { Search, FilterAlt, Label, Category } from "@mui/icons-material";
import { useState } from "react";
import { Source, NewsCategory } from "../../types";
import { useNews } from "@/context/NewsContext";
import { useNavigate } from "react-router-dom";
import { categories, newsSources } from "@utils/constants";
import { filterSearchStyles as styles } from "./styles";

export const FilterSearch = () => {
  const { filters, setFilters, onApplyFilters } = useNews();
  const [keywords, setKeywords] = useState(filters.keyword || "");
  const [selectedSource, setSelectedSource] = useState<Source | null>(
    filters.source || null
  );
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory | null>(
    filters.category || null
  );
  const navigate = useNavigate();

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

  const handleSearch = () => {
    setFilters((prev) => ({ ...prev, keyword: keywords }));
    onApplyFilters();
    navigate("/");
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h4" sx={styles.title} gutterBottom>
        Filter & Search
      </Typography>
      <Typography variant="body1" sx={styles.subtitle}>
        Refine your search to find exactly what you're looking for.
      </Typography>

      <Card sx={styles.card}>
        <CardContent>
          <Box sx={styles.sectionHeader}>
            <FilterAlt color="primary" />
            <Typography variant="h6" sx={styles.title}>
              Keywords
            </Typography>
          </Box>
          <TextField
            placeholder="e.g. 'AI safety'"
            fullWidth
            size="small"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </CardContent>
      </Card>

      <Card sx={styles.card}>
        <CardContent>
          <Box sx={styles.sectionHeader}>
            <Label color="primary" />
            <Typography variant="h6" sx={styles.title}>
              Sources
            </Typography>
          </Box>
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
          <Box sx={styles.sectionHeader}>
            <Category color="primary" />
            <Typography variant="h6" sx={styles.title}>
              Categories
            </Typography>
          </Box>
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
          variant="contained"
          color="primary"
          startIcon={<Search />}
          sx={styles.button}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};
