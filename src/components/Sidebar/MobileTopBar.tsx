import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

type MobileTopBarProps = { onMenuClick: () => void };

export const MobileTopBar = ({ onMenuClick }: MobileTopBarProps) => (
  <AppBar
    elevation={0}
    position="fixed"
    sx={{
      bgcolor: "#fff",
      color: "text.primary",
      borderBottom: "1px solid #e0e0e0",
      display: { xs: "flex" },
      ["@media (min-width:768px)"]: { display: "none" },
    }}
  >
    <Toolbar>
      <IconButton edge="start" onClick={onMenuClick} aria-label="open drawer">
        <MenuIcon />
      </IconButton>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, ml: 1 }}>
        NewsFlow
      </Typography>
    </Toolbar>
  </AppBar>
);
