import { Box, Typography } from "@mui/material";

export const NewsHeader = () => (
  <Box>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        News Hub
      </Typography>
    </Box>
  </Box>
);
