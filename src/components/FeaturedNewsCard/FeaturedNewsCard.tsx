import {
  Box,
  Card,
  CardMedia,
  Typography,
  Chip,
  Button,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import {
  AccessTime,
  Share,
  Visibility,
  Refresh,
  Settings,
  MenuBook,
} from "@mui/icons-material";
import { formatDistanceToNow } from "date-fns";
import { useNavigate } from "react-router-dom";

export interface FeaturedNewsCardProps {
  image?: string;
  source: string;
  title: string;
  description?: string;
  category: string;
  author?: string;
  date: Date | string;
  readTime: string;
  articleUrl: string;
  shareUrl?: string;
}

export const FeaturedNewsCard = ({
  image = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  source,
  title,
  description = "",
  category,
  author = "David Martinez",
  date,
  readTime,
  articleUrl,
}: FeaturedNewsCardProps) => {
  const navigate = useNavigate();
  const sourceColor = { bg: "#ECEFF1", border: "#607D8B", hoverBg: "#CFD8DC" };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 1200,
        mx: "auto",
        mt: 0,
      }}
    >
      <Box sx={{ position: "relative", mb: 3 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
          spacing={{ xs: 2, sm: 0 }}
          sx={{ width: "100%" }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ fontSize: { xs: "1.5rem", sm: "2.125rem" } }}
          >
            Top Stories
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            <Button
              variant="outlined"
              startIcon={<Refresh />}
              sx={{
                textTransform: "none",
                borderRadius: 2,
                color: "black",
                borderColor: "black",
                "&:hover": {
                  color: "white",
                  backgroundColor: "primary.main",
                  borderColor: "primary.main",
                },
                "& .MuiSvgIcon-root": { color: "inherit" },
              }}
              onClick={() => window.location.reload()}
            >
              Refresh Feed
            </Button>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<Settings />}
              sx={{
                textTransform: "none",
                borderRadius: 2,
                color: "black",
                borderColor: "black",
                "&:hover": {
                  color: "white",
                  backgroundColor: "primary.main",
                  borderColor: "primary.main",
                },
                "& .MuiSvgIcon-root": { color: "inherit" },
              }}
              onClick={() => navigate("/preferences")}
            >
              Preferences
            </Button>
          </Stack>
        </Stack>
      </Box>

      <Card
        sx={{
          display: "flex",
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-6px) scale(1.01)",
            boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
          },
          ["@media (max-width:768px)"]: { flexDirection: "column" },
          ["@media (min-width:769px)"]: { flexDirection: "row" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "50%",
            flexShrink: 1,
            minWidth: 0,
            zIndex: 0,
            ["@media (max-width:768px)"]: {
              width: "100%",
              aspectRatio: "16 / 9",
            },
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
          <Chip
            label={source}
            size="small"
            sx={{
              position: "absolute",
              bottom: 16,
              left: 16,
              fontWeight: 600,
              borderRadius: "12px",
              px: 1,
              bgcolor: sourceColor.bg,
              color: sourceColor.border,
              transition: "all 0.3s ease",
              "&:hover": { bgcolor: sourceColor.hoverBg },
            }}
          />
        </Box>

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            p: 4,
            width: "50%",
            flexShrink: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            ["@media (max-width:768px)"]: { width: "100%", p: 2.5 },
          }}
        >
          <Chip
            label={category}
            size="small"
            sx={{
              bgcolor: "#e8f2fd",
              color: "#1976d2",
              fontWeight: 600,
              mb: 2,
              alignSelf: "flex-start",
              borderRadius: "12px",
            }}
          />

          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 1.5,
              color: "#0a2540",
              lineHeight: 1.3,
              fontSize: { xs: "1.125rem", md: "1.5rem" },
              overflowWrap: "anywhere",
              ["@media (max-width:768px)"]: { mr: 4 },
            }}
          >
            {title}
          </Typography>

          {(description || title) && (
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: "text.secondary",
                flexGrow: 1,
                fontSize: { xs: "0.95rem", md: "1rem" },
                overflowWrap: "anywhere",
                ["@media (max-width:768px)"]: { mr: 4 },
              }}
            >
              {description || title}
            </Typography>
          )}

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{
              mb: 3,
              ["@media (max-width:768px)"]: {
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 1.5,
              },
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar sx={{ width: 26, height: 26, fontSize: 12 }}>
                {author?.[0] || "?"}
              </Avatar>
              <Typography variant="body2" color="text.secondary">
                {author}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <AccessTime sx={{ fontSize: 16, color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">
                {date &&
                  formatDistanceToNow(new Date(date), { addSuffix: true })}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <MenuBook sx={{ fontSize: 16, color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">
                {readTime}
              </Typography>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            alignItems="stretch"
            sx={{
              mt: "auto",
              ["@media (max-width:768px)"]: { flexDirection: "column", mr: 5 },
            }}
          >
            <Button
              variant="contained"
              startIcon={<Visibility />}
              sx={{
                flexGrow: 1,
                py: { xs: 1, md: 1.2 },
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                bgcolor: "#1976d2",
                "&:hover": { bgcolor: "#0d47a1", transform: "scale(1.02)" },
              }}
              onClick={() => window.open(articleUrl, "_blank")}
            >
              Read Article
            </Button>
            <IconButton
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: 2,
                p: 1.2,
                color: "text.secondary",
                "&:hover": { bgcolor: "#f5f5f5", transform: "scale(1.1)" },
                ["@media (max-width:768px)"]: { display: "none" },
              }}
              onClick={() => articleUrl && window.open(articleUrl, "_blank")}
            >
              <Share />
            </IconButton>
          </Stack>
        </Box>
      </Card>
    </Box>
  );
};
