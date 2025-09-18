import type { Source } from "../../types/types";

export type NewsCardProps = {
  title: string;
  date: Date;
  author?: string;
  source: string;
  category: string;
  url: string;
  Sourcekey: keyof typeof Source;
};
