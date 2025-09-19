import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
} from "@mui/material";
import { Label, Category, ArrowBack } from "@mui/icons-material";
import { useState } from "react";

const newsSources = [
  "NewsAPI",
  "The Guardian",
  "New York Times",
  "BBC News",
  "OpenNews",
  "NewsCred",
  "Reuters",
];

const categories = [
  "Business",
  "Technology",
  "Politics",
  "Sports",
  "Entertainment",
  "Health",
  "Science",
  "World",
];

const PreferencesPage = () => {
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleSelection = (
    item: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <Box sx={{ p: 4, bgcolor: "#f9fafb", minHeight: "100vh" }}>
      {/* Page Title */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Personalize Your Feed
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Tailor your news experience. Select your favorite sources, topics, and
        authors to build a feed that's perfectly suited to you.
      </Typography>

      {/* Preferred News Sources */}
      <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 2 }}>
        <CardContent>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Label color="primary" />
            <Typography variant="h6" fontWeight="bold">
              Preferred News Sources
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Choose the publications you trust and enjoy.
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {newsSources.map((source) => (
              <Chip
                key={source}
                label={source}
                clickable
                onClick={() =>
                  toggleSelection(source, selectedSources, setSelectedSources)
                }
                color={selectedSources.includes(source) ? "primary" : "default"}
                variant={
                  selectedSources.includes(source) ? "filled" : "outlined"
                }
              />
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* Preferred Categories */}
      <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 2 }}>
        <CardContent>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Category color="primary" />
            <Typography variant="h6" fontWeight="bold">
              Preferred Categories
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Select the topics that matter most to you.
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                clickable
                onClick={() =>
                  toggleSelection(
                    category,
                    selectedCategories,
                    setSelectedCategories
                  )
                }
                color={
                  selectedCategories.includes(category) ? "primary" : "default"
                }
                variant={
                  selectedCategories.includes(category) ? "filled" : "outlined"
                }
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
        >
          Save Preferences
        </Button>
      </Box>
    </Box>
  );
};

export default PreferencesPage;
