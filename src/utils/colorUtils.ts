export const getRandomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  return {
    chipBg: `hsl(${hue}, 70%, 90%)`,
    chipBorder: `hsl(${hue}, 70%, 40%)`,
    hoverBg: `hsl(${hue}, 70%, 80%)`,
  };
};

export const sourceChipColors: Record<
  string,
  { bg: string; border: string; hoverBg: string }
> = {
  Guardian: { bg: "#E0F7FA", border: "#00ACC1", hoverBg: "#B2EBF2" },
  "NY Times": { bg: "#F3E5F5", border: "#8E24AA", hoverBg: "#E1BEE7" },
  Reuters: { bg: "#FFF3E0", border: "#FB8C00", hoverBg: "#FFE0B2" },
};
