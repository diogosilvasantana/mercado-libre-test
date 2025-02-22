import React, { createContext, useContext, useState, ReactNode } from "react";

type CategoryContextType = {
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
};

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<string[]>([]);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory deve ser usado dentro de um CategoryProvider");
  }
  return context;
};
