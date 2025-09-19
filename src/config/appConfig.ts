import { NewsCategory, Source } from "../types";

export const NewsCategories = [
  { label: "Technology", value: NewsCategory.technology },
  { label: "Sports", value: NewsCategory.sports },
  { label: "Politics", value: NewsCategory.politics },
  { label: "Business", value: NewsCategory.business },
  { label: "Entertainment", value: NewsCategory.entertainment },
  { label: "Global", value: NewsCategory.global },
];

export const NewsSources = [
  {
    label: "Guardian",
    value: Source.guardian,
  },
  {
    label: "NY Time",
    value: Source.nytime,
  },
];
