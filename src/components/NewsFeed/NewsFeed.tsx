import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  ClickAwayListener,
  Stack,
  Chip,
} from "@mui/material";
import {
  NewsCategories as categories,
  NewsSources as sources,
} from "../../config/appConfig";
import { Source } from "../../types";
import styles from "./styles";
import SelectableChip from "../SelectableChip/SelectableChip";

interface FeedProps {
  category: string | null;
  source: Source | null;
  onCategoryChange: (category: string | null) => void;
  onSourceChange: (source: Source | null) => void;
  onApplyFilters: () => void;
}

const NewsFeed: React.FC<FeedProps> = ({
  category,
  source,
  onCategoryChange,
  onSourceChange,
  onApplyFilters,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box sx={styles.root}>
        <Chip
          label={"News Feed"}
          clickable
          sx={styles.chip}
          color="primary"
          onClick={() => setOpen((prev) => !prev)}
        />
        {open && (
          <Paper elevation={3} sx={styles.paper}>
            <Typography variant="subtitle1" sx={styles.title}>
              Category
            </Typography>
            <Stack direction="row" spacing={1} sx={styles.stack}>
              {categories.map((cat) => (
                <SelectableChip
                  key={cat.value}
                  label={cat.label}
                  selected={category === cat.value}
                  onClick={() =>
                    onCategoryChange(category === cat.value ? null : cat.value)
                  }
                />
              ))}
            </Stack>
            <Typography variant="subtitle1" sx={styles.title}>
              Source
            </Typography>
            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
              {sources.map((src) => (
                <SelectableChip
                  key={src.value}
                  label={src.label}
                  selected={source === src.value}
                  onClick={() =>
                    onSourceChange(source === src.value ? null : src.value)
                  }
                />
              ))}
            </Stack>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={styles.applyButton}
              onClick={() => {
                onApplyFilters();
                setOpen(false);
              }}
            >
              Apply
            </Button>
          </Paper>
        )}
      </Box>
    </ClickAwayListener>
  );
};

export default NewsFeed;
