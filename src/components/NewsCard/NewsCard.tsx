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
import { formatDistanceToNow } from "date-fns";
import type { NewsCardProps } from "./types";
import { getRandomColor, sourceChipColors } from "@utils/colorUtils";

export const NewsCard = ({
  title,
  date = new Date(),
  source,
  category = "Business",
  readTime = "1 min",
  author = "David Martinez",
  description,
  imgUrl = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
      sx={{
        width: "100%",
        maxWidth: 380,
        minHeight: 476,
        maxHeight: 486,
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 3,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        transition:
          "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease-in-out",

        ["@media (max-width:768px)"]: {
          maxWidth: "100%",
          width: "100%",
          minHeight: "unset",
          maxHeight: "unset",
          borderRadius: 2,
        },

        "&:hover": {
          transform: "translateY(-6px) scale(1.02)",
          boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
          ".news-card-title": { color: "#0d47a1" },
        },
      }}
      onClick={() => otherProps.url && window.open(otherProps.url, "_blank")}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia component="img" height="180" image={imgUrl} alt={title} />
        <Chip
          label={source}
          size="small"
          className="source-chip"
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            bgcolor: sourceColor.bg,
            color: sourceColor.border,
            fontWeight: 600,
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: sourceColor.hoverBg,
            },
          }}
        />
        <Chip
          icon={<MenuBook />}
          label={readTime}
          size="small"
          className="readtime-chip"
          sx={{
            position: "absolute",
            bottom: 12,
            right: 12,
            bgcolor: "white",
            color: "black",
            border: "1px solid #e0e0e0",
            ".MuiChip-icon": { color: "black" },
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: "#f5f5f5",
            },
          }}
        />
      </Box>
      <CardContent sx={{ p: 2, minHeight: "auto", flexGrow: 1 }}>
        <Chip
          label={category}
          size="small"
          className="category-chip"
          sx={{
            bgcolor: cardColor.chipBg,
            color: cardColor.chipBorder,
            fontWeight: 600,
            mb: 1,
            border: `1px solid ${cardColor.chipBorder}`,
            transition: "all 0.3s ease",
            "&:hover": {
              bgcolor: cardColor.hoverBg,
            },
          }}
        />
        <Typography
          className="news-card-title"
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 1,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            color: "black",
            transition: "color 0.3s ease",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            transition: "color 0.3s ease",
          }}
        >
          {description ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis amet, quod laboriosam neque a obcaecati?"}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          px: 2,
          pb: 1,
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ width: "100%", mb: 1, justifyContent: "space-between" }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar sx={{ width: 24, height: 24, fontSize: 12 }}>
              {author[0]}
            </Avatar>
            <Typography variant="body2" color="text.secondary">
              {author.split(" ").slice(0, 3).join(" ")}
              {author.split(" ").length > 15 ? "..." : ""}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <AccessTime sx={{ fontSize: 16, color: "text.secondary" }} />
            <Typography variant="body2" color="text.secondary">
              {formatDistanceToNow(date, { addSuffix: true })}
            </Typography>
          </Stack>
        </Stack>
      </CardActions>
      <Button
        variant="outlined"
        fullWidth
        className="readmore-button"
        sx={{
          ml: 2,
          mr: 2,
          width: "auto",
          borderRadius: 2,
          mb: 2,
          textTransform: "none",
          fontWeight: 600,
          transition: "all 0.3s ease",
          "&:hover": {
            bgcolor: "rgba(0,0,0,0.08)",
          },
        }}
      >
        Read More
      </Button>
    </Card>
  );
};
