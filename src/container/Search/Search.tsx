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
import { Source, NewsCategory } from "../../types"; // your enums
import { useNews } from "@/context/NewsContext";

const newsSources: { label: string; value: Source }[] = [
  { label: "NewsAPI", value: Source.newsApi },
  { label: "The Guardian", value: Source.guardian },
  { label: "New York Times", value: Source.nytime },
];

const categories: { label: string; value: NewsCategory }[] = [
  { label: "Technology", value: NewsCategory.technology },
  { label: "Sports", value: NewsCategory.sports },
  { label: "Politics", value: NewsCategory.politics },
  { label: "Business", value: NewsCategory.business },
  { label: "Entertainment", value: NewsCategory.entertainment },
  { label: "World", value: NewsCategory.global },
];

const FilterSearch = () => {
  const { filters, setFilters, onApplyFilters } = useNews();
  const [keywords, setKeywords] = useState(filters.keyword || "");
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

  const handleSearch = () => {
    setFilters((prev) => ({ ...prev, keyword: keywords }));
    onApplyFilters(); // Apply the selected filters
  };

  return (
    <Box sx={{ p: 4, bgcolor: "#f9fafb", minHeight: "100vh" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Filter & Search
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Refine your search to find exactly what you're looking for.
      </Typography>

      {/* Keywords */}
      <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 2 }}>
        <CardContent>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <FilterAlt color="primary" />
            <Typography variant="h6" fontWeight="bold">
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

      {/* Sources */}
      <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 2 }}>
        <CardContent>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Label color="primary" />
            <Typography variant="h6" fontWeight="bold">
              Sources
            </Typography>
          </Box>
          <Box display="flex" flexWrap="wrap" gap={1}>
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

      {/* Categories */}
      <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 2 }}>
        <CardContent>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Category color="primary" />
            <Typography variant="h6" fontWeight="bold">
              Categories
            </Typography>
          </Box>
          <Box display="flex" flexWrap="wrap" gap={1}>
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

      <Box display="flex" justifyContent="flex-end" mt={3}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Search />}
          sx={{ borderRadius: 2 }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default FilterSearch;
