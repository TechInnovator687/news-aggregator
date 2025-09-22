import { formatDistanceToNow } from "date-fns";

export const getRelativeTime = (
  date: Date | string | number,
  withSuffix: boolean = true
): string => {
  try {
    return formatDistanceToNow(new Date(date), { addSuffix: withSuffix });
  } catch (error) {
    console.error("Invalid date provided to getRelativeTime:", error);
    return "";
  }
};
