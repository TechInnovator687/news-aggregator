import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Divider,
  Avatar,
  CircularProgress,
} from "@mui/material";
import { Home, Search, Settings } from "@mui/icons-material";
import { useNews } from "@/context/NewsContext";

const drawerWidth = 260;

const SidePanel = () => {
  const location = useLocation();
  const { news, loading } = useNews();
  const menuItems = [
    { label: "News Feed", icon: <Home fontSize="small" />, path: "/" },
    { label: "Search", icon: <Search fontSize="small" />, path: "/search" },
    {
      label: "Preferences",
      icon: <Settings fontSize="small" />,
      path: "/preferences",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#fff",
            borderRight: "1px solid #e0e0e0",
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Box sx={{ p: 3, display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                bgcolor: "primary.main",
                color: "white",
                p: 1,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Home fontSize="small" />
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                NewsFlow
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Your Personal News Hub
              </Typography>
            </Box>
          </Box>
          <Divider />

          <Box sx={{ px: 2, mt: 3.5 }}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: "bold",
                color: "text.secondary",
                letterSpacing: 0.5,
                pl: 2.5,
              }}
            >
              MAIN MENU
            </Typography>
            <List>
              {menuItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <ListItemButton
                    key={item.path}
                    component={Link}
                    to={item.path}
                    sx={{
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
                      boxShadow: active
                        ? "0px 4px 10px rgba(0,0,0,0.15)"
                        : "none",
                      transition: "all 0.2s ease-in-out",
                      "&:hover": {
                        bgcolor: active ? "white" : "#f4f6f8",
                        color: "black",
                        boxShadow: active
                          ? "0px 4px 12px rgba(0,0,0,0.25)"
                          : "0px 2px 6px rgba(0,0,0,0.08)",
                        transform: "translateY(-2px)",
                      },
                      "&:hover .MuiListItemIcon-root": {
                        color: "black",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          color: active ? "#fff" : "inherit",
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.label} />
                    </Box>

                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        bgcolor: active ? "primary.light" : "transparent",
                        transition: "all 0.2s ease-in-out",
                      }}
                    />
                  </ListItemButton>
                );
              })}
            </List>
          </Box>

          <Box sx={{ px: 4, mt: 2 }}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: "bold",
                color: "text.secondary",
                letterSpacing: 0.5,
              }}
            >
              QUICK STATS
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                mb: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Today&apos;s Articles
              </Typography>
              <Typography
                component="span"
                fontWeight="bold"
                color="text.primary"
              >
                {loading ? <CircularProgress size={15} /> : news.length}
              </Typography>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Sources Active
              </Typography>
              <Typography component="span" fontWeight="bold" color="primary">
                3
              </Typography>
            </Typography>
            <Divider />

            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ mt: 2, display: "block" }}
            >
              Last updated: Just now
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Divider />
          <Box
            sx={{
              p: 2,
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              bgcolor: "transparent",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#f5f7fa",
                borderRadius: 2,
              },
            }}
          >
            <Avatar
              sx={{
                width: 36,
                height: 36,
                bgcolor: "grey.100",
                color: "text.secondary",
              }}
            >
              <Home fontSize="small" />
            </Avatar>
            <Box>
              <Typography
                variant="body2"
                sx={{ fontWeight: 600, color: "text.primary" }}
              >
                News Reader
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", fontWeight: 400 }}
              >
                Welcome back!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "#f9fafb", p: 3, minHeight: "100vh" }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default SidePanel;
