import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { styles } from "./styles";

type MobileTopBarProps = { onMenuClick: () => void };

export const MobileTopBar = ({ onMenuClick }: MobileTopBarProps) => (
  <AppBar elevation={0} position="fixed" sx={styles.mobileAppBar}>
    <Toolbar sx={styles.mobileToolbar}>
      <IconButton edge="start" onClick={onMenuClick} aria-label="open drawer">
        <MenuIcon />
      </IconButton>
      <Typography variant="subtitle1" sx={styles.mobileTitle}>
        NewsFlow
      </Typography>
    </Toolbar>
  </AppBar>
);
