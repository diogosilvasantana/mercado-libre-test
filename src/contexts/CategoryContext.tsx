import React, { createContext, useState, ReactNode } from "react";

type CategoryContextType = {
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
};

// Cria um contexto para categorias com valor inicial indefinido.
export const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

/* Provedor de contexto responsável por encapsular componentes que
 * necessitam acessar e atualizar as categorias.
 */
export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<string[]>([]);

  /* Retorna o componente Provider que vai prover o valor atual das categorias
   * e a função para atualizá-las para os componentes filhos.
   */
  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
