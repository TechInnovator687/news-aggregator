import { NewsCategory, Source } from "../types";

export const newsSources: { label: string; value: Source }[] = [
  { label: "NewsAPI", value: Source.newsApi },
  { label: "The Guardian", value: Source.guardian },
  { label: "New York Times", value: Source.nytime },
];

export const categories: { label: string; value: NewsCategory }[] = [
  { label: "Technology", value: NewsCategory.technology },
  { label: "Sports", value: NewsCategory.sports },
  { label: "Politics", value: NewsCategory.politics },
  { label: "Business", value: NewsCategory.business },
  { label: "Entertainment", value: NewsCategory.entertainment },
  { label: "World", value: NewsCategory.global },
];
