import React, { useState } from "react";
import {
  Box,
  IconButton,
  Paper,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  NewsCategories as categories,
  NewsSources as sources,
} from "../../config/appConfig";
import { dateRanges } from "./constants";
import { Source } from "../../types";
import styles from "./styles";
import DropdownSelect from "../DropdownSelect/DropdownSelect";

interface FiltersProps {
  category: string | null;
  source: Source | null;
  keyword: string | null;
  dateRange: string | null;
  onCategoryChange: (category: string) => void;
  onSourceChange: (source: Source) => void;
  onKeywordChange: (keyword: string) => void;
  onDateRangeChange: (dateRange: string) => void;
  onApplyFilters: () => void;
}

const Filters: React.FC<FiltersProps> = ({
  category,
  source,
  keyword,
  dateRange,
  onCategoryChange,
  onSourceChange,
  onKeywordChange,
  onDateRangeChange,
  onApplyFilters,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={styles.root}>
      <IconButton onClick={() => setOpen((prev) => !prev)} color="primary">
        <FilterListIcon />
      </IconButton>
      {open && (
        <Paper elevation={3} sx={styles.paper}>
          <Typography variant="h6" gutterBottom>
            Filters
          </Typography>
          <DropdownSelect
            label="Category"
            value={category}
            options={categories}
            onChange={onCategoryChange}
          />
          <DropdownSelect
            label="Source"
            value={source}
            options={sources}
            onChange={onSourceChange}
          />
          <TextField
            label="Search Keywords"
            variant="outlined"
            value={keyword}
            onChange={(e) => onKeywordChange(e.target.value)}
            fullWidth
            sx={styles.keywordInput}
          />
          <DropdownSelect
            label="Date Range"
            value={dateRange}
            options={dateRanges}
            onChange={onDateRangeChange}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => {
              onApplyFilters();
              setOpen(false);
            }}
          >
            Apply Filters
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default Filters;
