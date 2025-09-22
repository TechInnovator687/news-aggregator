import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  CircularProgress,
} from "@mui/material";
import { Home, Search, Settings } from "@mui/icons-material";
import { useNews } from "@/context/NewsContext";
import { styles, menuItem, menuIcon, activeDot } from "./styles";

export type SidebarContentProps = {
  onItemClick?: () => void;
};

export const SidebarContent = ({ onItemClick }: SidebarContentProps) => {
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
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Box sx={styles.logoBox}>
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
        <Typography variant="caption" sx={styles.mainMenuTitle}>
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
                onClick={onItemClick}
                sx={menuItem(active)}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <ListItemIcon sx={menuIcon(active)}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </Box>
                <Box sx={activeDot(active)} />
              </ListItemButton>
            );
          })}
        </List>
      </Box>
      <Box sx={{ px: 4, mt: 2 }}>
        <Typography variant="caption" sx={styles.statsTitle}>
          QUICK STATS
        </Typography>
        <Box sx={styles.statsRow}>
          <Typography variant="body2" color="text.secondary">
            Today&apos;s Articles
          </Typography>
          <Typography component="span" fontWeight="bold" color="text.primary">
            {loading ? <CircularProgress size={15} /> : news.length}
          </Typography>
        </Box>
        <Box sx={styles.statsRow}>
          <Typography variant="body2" color="text.secondary">
            Sources Active
          </Typography>
          <Typography component="span" fontWeight="bold" color="primary">
            3
          </Typography>
        </Box>
        <Divider />
        <Typography
          variant="caption"
          color="text.secondary"
          sx={styles.lastUpdated}
        >
          Last updated: Just now
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={styles.userBox}>
        <Avatar sx={styles.userAvatar}>
          <Home fontSize="small" />
        </Avatar>
        <Box>
          <Typography variant="body2" sx={styles.userText}>
            News Reader
          </Typography>
          <Typography variant="caption" sx={styles.userSubText}>
            Welcome back!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
