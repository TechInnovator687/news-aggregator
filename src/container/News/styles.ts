const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    width: "100vw",
  },
  newsContainer: {
    marginTop: "20px",
    backgroundColor: "#f5f5f5",
    padding: "20px",
  },
  newsList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "100px",
  },
  newsCard: {
    flex: "1 1 calc(25% - 20px)",
    maxWidth: "calc(25% - 20px)",
    "@media (max-width: 1200px)": {
      flex: "1 1 calc(33.33% - 20px)",
      maxWidth: "calc(33.33% - 20px)",
    },
    "@media (max-width: 900px)": {
      flex: "1 1 calc(50% - 20px)",
      maxWidth: "calc(50% - 20px)",
    },
    "@media (max-width: 600px)": {
      flex: "1 1 100%",
      maxWidth: "100%",
    },
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
    width: "100vw",
    zIndex: 1000,
    padding: "10px 20px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  },
};

export default styles;
