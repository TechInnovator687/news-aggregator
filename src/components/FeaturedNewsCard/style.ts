export const styles = {
  container: {
    position: "relative",
    width: "100%",
    maxWidth: 1200,
    mx: "auto",
    mt: 0,
  },

  headerWrapper: {
    position: "relative",
    mb: 3,
  },

  headerStack: {
    width: "100%",
  },

  headerTitle: {
    fontWeight: 700,
    fontSize: { xs: "1.5rem", sm: "2.125rem" },
  },

  headerButtonStack: {
    width: { xs: "100%", sm: "auto" },
  },

  actionButton: {
    textTransform: "none",
    borderRadius: 2,
    color: "black",
    borderColor: "black",
    "&:hover": {
      color: "white",
      backgroundColor: "primary.main",
      borderColor: "primary.main",
    },
    "& .MuiSvgIcon-root": { color: "inherit" },
  },

  card: {
    display: "flex",
    borderRadius: 3,
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-6px) scale(1.01)",
      boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
    },
    "@media (max-width:768px)": { flexDirection: "column" },
    "@media (min-width:769px)": { flexDirection: "row" },
  },

  imageWrapper: {
    position: "relative",
    width: "50%",
    flexShrink: 1,
    minWidth: 0,
    zIndex: 0,
    "@media (max-width:768px)": {
      width: "100%",
      aspectRatio: "16 / 9",
    },
  },

  cardMedia: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    display: "block",
  },

  sourceChip: {
    position: "absolute",
    bottom: 16,
    left: 16,
    fontWeight: 600,
    borderRadius: "12px",
    px: 1,
    transition: "all 0.3s ease",
  },

  contentBox: {
    position: "relative",
    zIndex: 1,
    p: 4,
    width: "50%",
    flexShrink: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    "@media (max-width:768px)": { width: "100%", p: 2.5 },
  },

  categoryChip: {
    bgcolor: "#e8f2fd",
    color: "#1976d2",
    fontWeight: 600,
    mb: 2,
    alignSelf: "flex-start",
    borderRadius: "12px",
  },

  title: {
    fontWeight: 800,
    mb: 1.5,
    color: "#0a2540",
    lineHeight: 1.3,
    fontSize: { xs: "1.125rem", md: "1.5rem" },
    overflowWrap: "anywhere",
    "@media (max-width:768px)": { mr: 4 },
  },

  description: {
    mb: 3,
    color: "text.secondary",
    flexGrow: 1,
    fontSize: { xs: "0.95rem", md: "1rem" },
    overflowWrap: "anywhere",
    "@media (max-width:768px)": { mr: 4 },
  },

  infoStack: {
    mb: 3,
    "@media (max-width:768px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 1.5,
    },
  },

  authorAvatar: {
    width: 26,
    height: 26,
    fontSize: 12,
  },

  readButton: {
    flexGrow: 1,
    py: { xs: 1, md: 1.2 },
    borderRadius: 2,
    textTransform: "none",
    fontWeight: 600,
    color: " white",
    bgcolor: "#1976d2",
    "&:hover": { bgcolor: "#0d47a1", transform: "scale(1.02)" },
  },

  shareButton: {
    border: "1px solid #e0e0e0",
    borderRadius: 2,
    p: 1.2,
    color: "text.secondary",
    "&:hover": { bgcolor: "#f5f5f5", transform: "scale(1.1)" },
    "@media (max-width:768px)": { display: "none" },
  },

  cardButtonStack: {
    mt: "auto",
    "@media (max-width:768px)": { flexDirection: "column", mr: 5 },
  },
};
