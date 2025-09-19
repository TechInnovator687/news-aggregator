import { Chip } from "@mui/material";
import styles from "./styles";

interface SelectableChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export const SelectableChip = ({
  label,
  selected,
  onClick,
}: SelectableChipProps) => {
  return (
    <Chip
      label={label}
      clickable
      color={selected ? "primary" : "default"}
      sx={styles.chip}
      onClick={onClick}
    />
  );
};
