import type { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  container: { display: "flex", flexDirection: "column", height: "100%" },
  header: { p: 3, display: "flex", alignItems: "center", gap: 1 },
  logoBox: {
    bgcolor: "primary.main",
    color: "white",
    p: 1,
    borderRadius: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mainMenuTitle: {
    fontWeight: "bold",
    color: "text.secondary",
    letterSpacing: 0.5,
    pl: 2.5,
  },
  statsTitle: {
    fontWeight: "bold",
    color: "text.secondary",
    letterSpacing: 0.5,
  },
  statsRow: {
    mb: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  lastUpdated: { mt: 2, display: "block", color: "text.secondary" },
  userBox: {
    p: 2,
    display: "flex",
    alignItems: "center",
    gap: 1.5,
    bgcolor: "transparent",
    cursor: "pointer",
    "&:hover": { bgcolor: "#f5f7fa", borderRadius: 2 },
  },
  userAvatar: {
    width: 36,
    height: 36,
    bgcolor: "grey.100",
    color: "text.secondary",
  },
  userText: { fontWeight: 600, color: "text.primary" },
  userSubText: { color: "text.secondary", fontWeight: 400 },
  mobileAppBar: {
    bgcolor: "#fff",
    color: "text.primary",
    borderBottom: "1px solid #e0e0e0",
    display: { xs: "flex", md: "none" },
  },
  mobileToolbar: {
    display: "flex",
    alignItems: "center",
  },
  mobileTitle: {
    fontWeight: 700,
    ml: 1,
  },
  permanentDrawer: {
    width: 260,
    flexShrink: 0,
    display: { xs: "none", md: "block" },
    "& .MuiDrawer-paper": {
      width: 260,
      boxSizing: "border-box",
      backgroundColor: "#fff",
      borderRight: "1px solid #e0e0e0",
    },
  },
  temporaryDrawer: {
    display: { xs: "block", md: "none" },
    "& .MuiDrawer-paper": { width: 260, boxSizing: "border-box" },
  },
  mainContent: {
    flexGrow: 1,
    p: 3,
    minHeight: "100vh",
    pt: { xs: 8, md: 3 },
  },
};

export const menuItem = (active: boolean): SxProps<Theme> => ({
  borderRadius: "12px",
  my: 1,
  px: 2,
  py: 0.5,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  bgcolor: active ? "primary.main" : "white",
  color: active ? "#fff" : "text.primary",
  fontWeight: active ? "bold" : "normal",
  boxShadow: active ? "0px 4px 10px rgba(0,0,0,0.15)" : "none",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    bgcolor: active ? "white" : "#f4f6f8",
    color: "black",
    boxShadow: active
      ? "0px 4px 12px rgba(0,0,0,0.25)"
      : "0px 2px 6px rgba(0,0,0,0.08)",
    transform: "translateY(-2px)",
  },
});

export const menuIcon = (active: boolean): SxProps<Theme> => ({
  minWidth: 0,
  color: active ? "#fff" : "inherit",
});

export const activeDot = (active: boolean): SxProps<Theme> => ({
  width: 10,
  height: 10,
  borderRadius: "50%",
  bgcolor: active ? "primary.light" : "transparent",
});
