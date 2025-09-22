import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Drawer } from "@mui/material";
import { SidebarContent } from "./SidebarContent";
import { MobileTopBar } from "./MobileTopBar";
import { styles } from "./styles";

export const SidePanel = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen((v) => !v);

  return (
    <Box sx={{ display: "flex" }}>
      <MobileTopBar onMenuClick={toggleMobile} />

      <Drawer variant="permanent" open sx={styles.permanentDrawer}>
        <SidebarContent />
      </Drawer>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={toggleMobile}
        ModalProps={{ keepMounted: true }}
        sx={styles.temporaryDrawer}
      >
        <SidebarContent onItemClick={toggleMobile} />
      </Drawer>

      <Box component="main" sx={styles.mainContent}>
        <Outlet />
      </Box>
    </Box>
  );
};
