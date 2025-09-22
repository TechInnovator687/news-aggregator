import React from "react";
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
} from "@mui/icons-material";
import { formatDistanceToNow } from "date-fns";

export interface FeaturedNewsCardProps {
  image?: string;
  source: string;
  title: string;
  description?: string;
  category: string;
  author: string;
  date: Date | string;
  readTime: string;
  articleUrl: string;
  shareUrl?: string;
}

export const FeaturedNewsCard: React.FC<FeaturedNewsCardProps> = ({
  image = "https://images.unsplash.com/photo-1633026596327-905c0bcff61e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  source,
  title,
  description = "",
  category,
  author,
  date,
  readTime,
  articleUrl,
  shareUrl,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 1100,
        mx: "auto",
        mt: 5,
      }}
    >
      {/* Top Action Buttons */}
      <Stack
        direction="row"
        spacing={2}
        sx={{ position: "absolute", top: -55, right: 0 }}
      >
        <Button
          variant="outlined"
          startIcon={<Refresh />}
          sx={{ textTransform: "none", borderRadius: 2 }}
        >
          Refresh Feed
        </Button>
        <Button
          variant="outlined"
          startIcon={<Settings />}
          sx={{ textTransform: "none", borderRadius: 2 }}
        >
          Preferences
        </Button>
      </Stack>

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
        }}
      >
        {/* Left Section: Image */}
        <Box sx={{ position: "relative", width: "50%", flexShrink: 0 }}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              height: "100%",
              objectFit: "cover",
            }}
          />
          {/* Source chip */}
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
              ...(source.toLowerCase() === "guardian"
                ? {
                    bgcolor: "rgba(25, 118, 210, 0.1)", // soft shadowy blue tint
                    color: "#1976d2",
                    border: "1px solid rgba(25, 118, 210, 0.3)",
                  }
                : {
                    bgcolor: "#1976d2",
                    color: "white",
                  }),
            }}
          />
        </Box>

        {/* Right Section: Content */}
        <Box
          sx={{ p: 4, width: "50%", display: "flex", flexDirection: "column" }}
        >
          {/* Category Chip */}
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

          {/* Title */}
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 1.5,
              color: "#0a2540",
              lineHeight: 1.3,
            }}
          >
            {title}
          </Typography>

          {/* Description */}
          {description && (
            <Typography
              variant="body1"
              sx={{ mb: 3, flexGrow: 1, color: "text.secondary" }}
            >
              {description}
            </Typography>
          )}

          {/* Author, Date, Read Time */}
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar sx={{ width: 26, height: 26, fontSize: 12 }}>
                {author?.[0] || "?"}
              </Avatar>
              <Typography variant="body2" color="text.secondary">
                {author}
              </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              {/* • {formatDistanceToNow(new Date(date), { addSuffix: true })} */}
            </Typography>
            <Stack direction="row" spacing={0.5} alignItems="center">
              <AccessTime sx={{ fontSize: 16, color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">
                {readTime}
              </Typography>
            </Stack>
          </Stack>

          {/* Action Buttons */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              variant="contained"
              startIcon={<Visibility />}
              sx={{
                flexGrow: 1,
                py: 1.2,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                bgcolor: "#1976d2",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  bgcolor: "#0d47a1",
                  transform: "scale(1.02)",
                },
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
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  bgcolor: "#f5f5f5",
                  transform: "scale(1.1)",
                },
              }}
              onClick={() => shareUrl && window.open(shareUrl, "_blank")}
            >
              <Share />
            </IconButton>
          </Stack>
        </Box>
      </Card>
    </Box>
  );
};
