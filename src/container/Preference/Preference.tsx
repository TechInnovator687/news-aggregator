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

const Preference = () => {
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
    <Box sx={{ p: 4, bgcolor: "#f9fafb", minHeight: "100vh" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Personalize Your Feed
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Tailor your news experience. Select your favorite source and category.
      </Typography>

      <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 2 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Preferred News Source
          </Typography>
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

      <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 2 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Preferred Category
          </Typography>
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

      <Box display="flex" justifyContent="space-between" mt={3}>
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

export default Preference;
