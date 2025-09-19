import React from "react";
import { Chip } from "@mui/material";
import styles from "./styles";

interface SelectableChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const SelectableChip: React.FC<SelectableChipProps> = ({
  label,
  selected,
  onClick,
}) => {
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

export default SelectableChip;
