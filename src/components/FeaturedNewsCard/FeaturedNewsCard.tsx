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
import { useNavigate } from "react-router-dom";
import { getRelativeTime } from "@utils/dateUtils";
import { styles } from "./style";
import { DEFAULT_FEATURED_NEWS } from "@utils/defaultNews";

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
  image = DEFAULT_FEATURED_NEWS.image,
  source,
  title,
  description = "",
  category,
  author = DEFAULT_FEATURED_NEWS.author,
  date,
  readTime,
  articleUrl,
}: FeaturedNewsCardProps) => {
  const navigate = useNavigate();
  const sourceColor = { bg: "#ECEFF1", border: "#607D8B", hoverBg: "#CFD8DC" };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.headerWrapper}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
          spacing={{ xs: 2, sm: 0 }}
          sx={styles.headerStack}
        >
          <Typography variant="h4" sx={styles.headerTitle}>
            Top Stories
          </Typography>

          <Stack direction="row" spacing={2} sx={styles.headerButtonStack}>
            <Button
              sx={styles.actionButton}
              startIcon={<Refresh />}
              onClick={() => window.location.reload()}
            >
              Refresh Feed
            </Button>
            <Button
              sx={styles.actionButton}
              startIcon={<Settings />}
              onClick={() => navigate("/preferences")}
            >
              Preferences
            </Button>
          </Stack>
        </Stack>
      </Box>

      <Card sx={styles.card}>
        <Box sx={styles.imageWrapper}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={styles.cardMedia}
          />
          <Chip
            label={source}
            size="small"
            sx={{
              ...styles.sourceChip,
              bgcolor: sourceColor.bg,
              color: sourceColor.border,
              "&:hover": { bgcolor: sourceColor.hoverBg },
            }}
          />
        </Box>

        <Box sx={styles.contentBox}>
          <Chip label={category} size="small" sx={styles.categoryChip} />
          <Typography sx={styles.title}>{title}</Typography>
          {description && (
            <Typography sx={styles.description}>{description}</Typography>
          )}

          <Stack direction="row" spacing={2} sx={styles.infoStack}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar sx={styles.authorAvatar}>{author?.[0]}</Avatar>
              <Typography variant="body2" color="text.secondary">
                {author}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.5} alignItems="center">
              <AccessTime sx={{ fontSize: 16, color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">
                {getRelativeTime(date)}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.5} alignItems="center">
              <MenuBook sx={{ fontSize: 16, color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">
                {readTime}
              </Typography>
            </Stack>
          </Stack>

          <Stack direction="row" spacing={2} sx={styles.cardButtonStack}>
            <Button
              sx={styles.readButton}
              startIcon={<Visibility />}
              onClick={() => window.open(articleUrl, "_blank")}
            >
              Read Article
            </Button>
            <IconButton
              sx={styles.shareButton}
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
