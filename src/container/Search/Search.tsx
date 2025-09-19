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

const FilterSearch = () => {
  const [keywords, setKeywords] = useState("");
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

  const handleSearch = () => {
    console.log({
      keywords,
      selectedSources,
      selectedCategories,
    });
  };

  return (
    <Box sx={{ p: 4, bgcolor: "#f9fafb", minHeight: "100vh" }}>
      {/* Page Title */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Filter & Search
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Refine your search to find exactly what you're looking for.
      </Typography>

      {/* Keywords Section */}
      <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 2 }}>
        <CardContent>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <FilterAlt color="primary" />
            <Typography variant="h6" fontWeight="bold">
              Keywords
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Enter keywords to narrow down your search results.
          </Typography>
          <TextField
            placeholder="e.g. 'AI safety'"
            fullWidth
            size="small"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </CardContent>
      </Card>

      {/* Sources Section */}
      <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 2 }}>
        <CardContent>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Label color="primary" />
            <Typography variant="h6" fontWeight="bold">
              Sources
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Choose the publications you want to search from.
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

      {/* Categories Section */}
      <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 2 }}>
        <CardContent>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Category color="primary" />
            <Typography variant="h6" fontWeight="bold">
              Categories
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Select the categories you want to filter.
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                clickable
                onClick={() =>
                  toggleSelection(
                    cat,
                    selectedCategories,
                    setSelectedCategories
                  )
                }
                color={selectedCategories.includes(cat) ? "primary" : "default"}
                variant={
                  selectedCategories.includes(cat) ? "filled" : "outlined"
                }
              />
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* Search Button */}
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
