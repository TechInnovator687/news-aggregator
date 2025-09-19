import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";
import { AccessTime, CalendarMonth } from "@mui/icons-material";
import { formatDate, formatTime } from "../../utils/dateTime";
import styles from "./styles";
import NewsLogo from "./NewsLogo";
import type { NewsCardProps } from "./types";

export const NewsCard = ({
  title = "Make Your Products In America Or Pay Tariffs: Trump Tells Davos",
  date,
  source = "Ny Times",
  category = "Technology",
  Sourcekey,
  ...otherProps
}: NewsCardProps) => {
  return (
    <Card
      sx={styles.card}
      onClick={() => otherProps.url && window.open(otherProps.url, "_blank")}
    >
      <CardContent sx={styles.cardContent}>
        <NewsLogo source={source} SourceKey={Sourcekey} />
        <Typography variant="h6" sx={styles.title}>
          {title}
        </Typography>
        <Box sx={styles.dateTimeContainer}>
          <CalendarMonth sx={styles.icon} color="primary" />
          <Typography variant="body2" sx={styles.dateText}>
            {formatDate(date)}
          </Typography>
          <AccessTime sx={styles.icon} color="primary" />
          <Typography variant="body2" sx={styles.dateText}>
            {formatTime(date)}
          </Typography>
        </Box>
      </CardContent>

      <CardActions sx={styles.cardActions}>
        <Chip label={category} sx={styles.chip} />
        <Button sx={styles.readMoreButton}>Read More...</Button>
      </CardActions>
    </Card>
  );
};
