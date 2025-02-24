import { CategoryContext } from "@/contexts/CategoryContext";
import { useContext } from "react";
/**
 * Hook personalizado que fornece acesso ao contexto de categorias.
 *
 * @returns {CategoryContextType} O contexto de categorias que inclui o estado
 * das categorias atuais e uma função para atualizar este estado.
 *
 * @throws {Error} Lança um erro se o hook for chamado fora do escopo
 * de um CategoryProvider, garantindo que o contexto exista.
 */
export const useCategory = () => {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error("useCategory deve ser usado dentro de um CategoryProvider");
  }
  return context;
};
