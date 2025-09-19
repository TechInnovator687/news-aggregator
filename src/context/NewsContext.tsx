import React, { createContext, useContext } from "react";
import useNewsController from "@container/News/useNewsController";

export const NewsContext = createContext<ReturnType<
  typeof useNewsController
> | null>(null);

export const NewsProvider = ({ children }: { children: React.ReactNode }) => {
  const newsController = useNewsController(); // single shared instance
  return (
    <NewsContext.Provider value={newsController}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) throw new Error("useNews must be used within NewsProvider");
  return context;
};
