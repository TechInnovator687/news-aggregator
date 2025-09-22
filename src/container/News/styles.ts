const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    flex: 1,
    overflowX: "hidden",
  },
  newsContainer: {
    marginTop: "20px",
    padding: "20px",
    width: "100%",
    boxSizing: "border-box",
  },
  newsList: {
    maxWidth: 1200,
    margin: "40px auto 0 auto",
    display: "grid",
    gap: "24px",
    justifyItems: "center",
    gridTemplateColumns: "repeat(3, 1fr)",
    "@media (max-width: 1200px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 900px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },

  newsCard: {
    width: "100%",
    minHeight: 456,
    boxSizing: "border-box",
  },
  sectionHeader: {
    maxWidth: 1200,
    margin: "32px auto 12px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: 0,
  },

  newsLoader: {
    display: "flex",
    justifyContent: "center",
    mt: 3,
  },
  newsHeaderRoot: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    zIndex: 1000,
    padding: "10px 20px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  },
};

export default styles;
