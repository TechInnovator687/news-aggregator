import { Chip } from "@mui/material";

type SelectableChipProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
};

const SelectableChip = ({ label, selected, onClick }: SelectableChipProps) => (
  <Chip
    label={label}
    clickable
    color={selected ? "primary" : "default"}
    onClick={onClick}
  />
);

export default SelectableChip;
