import React from "react";
import { NewsContext } from "./NewsContext";
import { useNewsController } from "@hooks/useNewsController";

export const NewsProvider = ({ children }: { children: React.ReactNode }) => {
  const newsController = useNewsController();
  return (
    <NewsContext.Provider value={newsController}>
      {children}
    </NewsContext.Provider>
  );
};
