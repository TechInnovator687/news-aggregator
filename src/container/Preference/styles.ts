import type { SxProps, Theme } from "@mui/material";

export const preferenceStyles: Record<string, SxProps<Theme>> = {
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
  chipContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
  },
  actionBox: {
    display: "flex",
    justifyContent: "space-between",
    mt: 3,
  },
};
