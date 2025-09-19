import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
} from "@mui/material";
import { Label, Category, ArrowBack } from "@mui/icons-material";
import useNewsController from "@container/News/useNewsController";
import { Source, NewsCategory } from "../../types"; // your enums
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const PreferencesPage = () => {
  const { filters, setFilters, onApplyFilters } = useNewsController();
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
        Tailor your news experience. Select your favorite source and category to
        build a feed that's perfectly suited to you.
      </Typography>

      {/* Preferred News Source */}
      <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 2 }}>
        <CardContent>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Label color="primary" />
            <Typography variant="h6" fontWeight="bold">
              Preferred News Source
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Choose the publication you trust the most.
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
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Category color="primary" />
            <Typography variant="h6" fontWeight="bold">
              Preferred Category
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Select the topic that matters most to you.
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

      {/* Action Buttons */}
      <Box display="flex" justifyContent="space-between" mt={3}>
        <Button
          variant="outlined"
          color="inherit"
          startIcon={<ArrowBack />}
          sx={{ borderRadius: 2 }}
        >
          Back to Feed
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: 2 }}
          startIcon={<Label />}
          onClick={() => {
            onApplyFilters(); // Apply filters to update news feed
            navigate("/"); // Redirect to home/feed page
          }}
        >
          Save Preferences
        </Button>
      </Box>
    </Box>
  );
};

export default PreferencesPage;
