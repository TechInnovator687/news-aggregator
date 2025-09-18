import { TextField, MenuItem } from "@mui/material";

interface DropdownSelectProps<T> {
  label: string;
  value: T | null;
  options: { label: string; value: string }[];
  onChange: (value: T) => void;
}

const DropdownSelect = <T,>({
  label,
  value,
  options,
  onChange,
}: DropdownSelectProps<T>) => {
  return (
    <TextField
      select
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
      variant="outlined"
      fullWidth
      sx={{ marginBottom: 2 }}
    >
      {options.map(({ label, value }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default DropdownSelect;
