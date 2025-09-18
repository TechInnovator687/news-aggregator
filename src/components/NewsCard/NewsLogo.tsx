import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles";

interface NewsLogoProps {
  source: string;
  SourceKey: string;
}

const NewsLogo: React.FC<NewsLogoProps> = ({ source, SourceKey }) => {
  return (
    <Box sx={styles.logoContainer}>
      <img
        src={`/assets/${SourceKey}.png`}
        alt={SourceKey}
        style={source === "All News" ? styles.largeLogo : styles.smallLogo}
      />
      <Typography variant="body2" sx={styles.sourceName}>
        {source}
      </Typography>
    </Box>
  );
};

export default NewsLogo;
