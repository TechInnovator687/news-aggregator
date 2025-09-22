import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Drawer } from "@mui/material";
import { SidebarContent } from "./SidebarContent";
import { MobileTopBar } from "./MobileTopBar";

const drawerWidth = 260;

export const SidePanel = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen((v) => !v);

  return (
    <Box sx={{ display: "flex" }}>
      <MobileTopBar onMenuClick={toggleMobile} />

      <Drawer
        variant="permanent"
        open
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { xs: "none" },
          ["@media (min-width:768px)"]: { display: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#fff",
            borderRight: "1px solid #e0e0e0",
          },
        }}
      >
        <SidebarContent />
      </Drawer>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={toggleMobile}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block" },
          ["@media (min-width:768px)"]: { display: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <SidebarContent onItemClick={toggleMobile} />
      </Drawer>

      {/* Main */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f9fafb",
          p: 3,
          minHeight: "100vh",
          pt: { xs: 8, ["@media (min-width:768px)"]: 3 },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
