const styles = {
  card: {
    borderRadius: 3,
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    padding: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "200px",
    cursor: "pointer",
  },
  cardContent: {
    paddingBottom: 1,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    marginBottom: 1.5,
  },
  sourceText: {
    color: "gray",
  },
  sourceName: {
    fontWeight: "bold",
  },
  smallLogo: {
    width: "18px",
    height: "18px",
  },
  largeLogo: {
    width: "50px",
    height: "16px",
  },
  title: {
    fontWeight: 600,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  dateTimeContainer: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    mt: 1,
    flexWrap: "nowrap",
  },
  dateText: {
    color: "gray",
    fontSize: "0.75rem",
    lineHeight: "1",
  },
  icon: {
    fontSize: "14px",
    color: "primary",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 16px",
  },
  chip: {
    px: 1,
    py: 1,
    backgroundColor: "#E4F2FF",
    color: "#007BFF",
    fontWeight: "bold",
  },
  readMoreButton: {
    fontWeight: "bold",
    fontSize: "0.875rem",
  },
};

export default styles;
