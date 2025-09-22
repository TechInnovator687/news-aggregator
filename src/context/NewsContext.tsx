import { useNewsController } from "@hooks/useNewsController";
import { createContext, useContext } from "react";

export const NewsContext = createContext<ReturnType<
  typeof useNewsController
> | null>(null);

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) throw new Error("useNews must be used within NewsProvider");
  return context;
};
