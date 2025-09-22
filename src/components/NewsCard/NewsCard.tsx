import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
  CardMedia,
  Avatar,
  Stack,
} from "@mui/material";
import { AccessTime, MenuBook } from "@mui/icons-material";
import type { NewsCardProps } from "./types";
import { getRandomColor, sourceChipColors } from "@utils/colorUtils";
import { styles } from "./styles";
import { getRelativeTime } from "@utils/dateUtils";
import { DEFAULT_FEATURED_NEWS } from "@utils/defaultNews";

export const NewsCard = ({
  title,
  date = new Date(),
  source,
  category = DEFAULT_FEATURED_NEWS.category,
  readTime = DEFAULT_FEATURED_NEWS.readTime,
  author = DEFAULT_FEATURED_NEWS.author,
  description,
  imgUrl = DEFAULT_FEATURED_NEWS.image,
  ...otherProps
}: NewsCardProps & { readTime?: string; author?: string }) => {
  const cardColor = getRandomColor();
  const sourceColor = sourceChipColors[source] || {
    bg: "#ECEFF1",
    border: "#607D8B",
    hoverBg: "#CFD8DC",
  };
  return (
    <Card
      sx={styles.card}
      onClick={() => otherProps.url && window.open(otherProps.url, "_blank")}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia component="img" height="180" image={imgUrl} alt={title} />
        <Chip
          label={source}
          size="small"
          className="source-chip"
          sx={{
            ...styles.sourceChip,
            bgcolor: sourceColor.bg,
            color: sourceColor.border,
            "&:hover": { bgcolor: sourceColor.hoverBg },
          }}
        />
        <Chip
          icon={<MenuBook />}
          label={readTime}
          size="small"
          sx={styles.readTimeChip}
        />
      </Box>

      <CardContent sx={{ p: 2, flexGrow: 1 }}>
        <Chip
          label={category}
          size="small"
          sx={{
            ...styles.categoryChip,
            bgcolor: cardColor.chipBg,
            color: cardColor.chipBorder,
            border: `1px solid ${cardColor.chipBorder}`,
            "&:hover": { bgcolor: cardColor.hoverBg },
          }}
        />
        <Typography className="news-card-title" variant="h6" sx={styles.title}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={styles.description}
        >
          {description ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis amet, quod laboriosam neque a obcaecati?"}
        </Typography>
      </CardContent>

      <CardActions sx={styles.cardActions}>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ width: "100%", mb: 1, justifyContent: "space-between" }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar sx={styles.authorAvatar}>{author[0]}</Avatar>
            <Typography variant="body2" color="text.secondary">
              {author.split(" ").slice(0, 3).join(" ")}
              {author.split(" ").length > 15 ? "..." : ""}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <AccessTime sx={{ fontSize: 16, color: "text.secondary" }} />
            <Typography variant="body2" color="text.secondary">
              {getRelativeTime(date)}
            </Typography>
          </Stack>
        </Stack>
      </CardActions>

      <Button variant="outlined" fullWidth sx={styles.readMoreButton}>
        Read More
      </Button>
    </Card>
  );
};
