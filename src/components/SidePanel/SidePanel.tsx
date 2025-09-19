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
} from "@mui/material";
import { Home, Search, Settings } from "@mui/icons-material";

const drawerWidth = 260;

const SidePanel = () => {
  const location = useLocation();

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
      {/* Sidebar Drawer */}
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
          {/* Header */}
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

          {/* Main Menu */}
          <Box sx={{ px: 2, mt: 1 }}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: "bold",
                color: "text.secondary",
                letterSpacing: 0.5,
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
                      borderRadius: "30px",
                      my: 1,
                      px: 2,
                      py: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      bgcolor: active ? "primary.main" : "grey.100",
                      color: active ? "#fff" : "text.primary",
                      fontWeight: active ? "bold" : "normal",
                      boxShadow: active
                        ? "0px 4px 10px rgba(0,0,0,0.15)"
                        : "none",
                      "&:hover": {
                        bgcolor: active ? "primary.dark" : "grey.200",
                      },
                    }}
                  >
                    {/* Left content: Icon + Label */}
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

                    {/* Right-side dot */}
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        bgcolor: active ? "primary.light" : "transparent",
                      }}
                    />
                  </ListItemButton>
                );
              })}
            </List>
          </Box>

          {/* Quick Stats */}
          <Box sx={{ px: 2, mt: 2 }}>
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
            <Typography variant="body2" sx={{ mt: 0.5 }}>
              Today&apos;s Articles{" "}
              <Typography
                component="span"
                fontWeight="bold"
                color="text.primary"
              >
                24
              </Typography>
            </Typography>
            <Typography variant="body2">
              Sources Active{" "}
              <Typography component="span" fontWeight="bold" color="primary">
                7
              </Typography>
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ mt: 1, display: "block" }}
            >
              Last updated: Just now
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Footer User Info */}
          <Divider />
          <Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar sx={{ width: 32, height: 32, bgcolor: "grey.200" }}>
              N
            </Avatar>
            <Box>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                News Reader
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Welcome back!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Drawer>

      {/* Main Content */}
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
