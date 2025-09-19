const getDateRanges = (): { label: string; value: string }[] => {
  const today = new Date();

  const calculateDate = (days: number): string => {
    const date = new Date(today);
    date.setDate(today.getDate() - days);
    return date.toISOString().split("T")[0];
  };

  return [
    { label: "Today", value: new Date().toISOString().split("T")[0] },
    { label: "Yesterday", value: calculateDate(1) },
    { label: "Last Week", value: calculateDate(7) },
    { label: "Last Month", value: calculateDate(30) },
    { label: "Last Year", value: calculateDate(365) },
  ];
};

export const dateRanges = getDateRanges();
