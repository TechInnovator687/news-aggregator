import { Source } from "../types";

type Source_Value = {
  endpoint: string;
  apiKey: string;
  page: number;
};

type API_CONFIG = Record<Source, Source_Value>;
export const API_CONFIG: API_CONFIG = {
  [Source.guardian]: {
    endpoint: import.meta.env.VITE_GUARDIAN_API_URL as string,
    apiKey: import.meta.env.VITE_GUARDIAN_API_KEY as string,
    page: 1 as number,
  },
  [Source.nytime]: {
    endpoint: import.meta.env.VITE_NYT_API_URL as string,
    apiKey: import.meta.env.VITE_NYT_API_KEY as string,
    page: 1 as number,
  },
  [Source.newsApi]: {
    endpoint: import.meta.env.VITE_NEWS_API_URL as string,
    apiKey: import.meta.env.VITE_NEWS_API_KEY as string,
    page: 1 as number,
  },
};
