import { Source } from "../../types";

export type NewsCardProps = {
  title: string;
  date: Date;
  author?: string;
  source: string;
  category: string;
  url: string;
  Sourcekey: Source;
};
