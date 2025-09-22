import type { SxProps, Theme } from "@mui/material";

export const filterSearchStyles: Record<string, SxProps<Theme>> = {
  container: {
    p: 4,
    bgcolor: "#f9fafb",
    minHeight: "100vh",
  },
  title: {
    fontWeight: "bold",
    mb: 1,
  },
  subtitle: {
    color: "text.secondary",
    mb: 3,
  },
  card: {
    mb: 3,
    borderRadius: 3,
    boxShadow: 2,
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    mb: 1,
  },
  chipContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
  },
  actionBox: {
    display: "flex",
    justifyContent: "flex-end",
    mt: 3,
  },
  button: {
    borderRadius: 2,
  },
};
