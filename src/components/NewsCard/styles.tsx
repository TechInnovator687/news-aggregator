export const styles = {
  card: {
    width: "100%",
    maxWidth: 380,
    minHeight: 476,
    maxHeight: 486,
    borderRadius: 3,
    overflow: "hidden",
    boxShadow: 3,
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    transition:
      "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease-in-out",
    "@media (max-width:768px)": {
      maxWidth: "100%",
      width: "100%",
      minHeight: "unset",
      maxHeight: "unset",
      borderRadius: 2,
    },
    "&:hover": {
      transform: "translateY(-6px) scale(1.02)",
      boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
      ".news-card-title": { color: "#0d47a1" },
    },
  },

  sourceChip: {
    position: "absolute",
    top: 12,
    left: 12,
    fontWeight: 600,
    transition: "all 0.3s ease",
  },

  readTimeChip: {
    position: "absolute",
    bottom: 12,
    right: 12,
    bgcolor: "white",
    color: "black",
    border: "1px solid #e0e0e0",
    ".MuiChip-icon": { color: "black" },
    transition: "all 0.3s ease",
    "&:hover": { bgcolor: "#f5f5f5" },
  },

  categoryChip: {
    fontWeight: 600,
    mb: 1,
    transition: "all 0.3s ease",
  },

  title: {
    fontWeight: 700,
    mb: 1,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    color: "black",
    transition: "color 0.3s ease",
  },

  description: {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    transition: "color 0.3s ease",
  },

  cardActions: {
    px: 2,
    pb: 1,
  },

  authorAvatar: {
    width: 24,
    height: 24,
    fontSize: 12,
  },

  readMoreButton: {
    ml: 2,
    mr: 2,
    width: "auto",
    borderRadius: 2,
    mb: 2,
    textTransform: "none",
    fontWeight: 600,
    transition: "all 0.3s ease",
    "&:hover": {
      bgcolor: "rgba(0,0,0,0.08)",
    },
  },
};
