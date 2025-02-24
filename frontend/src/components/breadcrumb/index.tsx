import React from "react";
import { BreadcrumbContainer } from "./styles";
import { useCategory } from "@/hooks/useCategory";

/* Componente responsável por mostrar as
 * categorias retornadas pelo backend
 */
const Breadcrumb = () => {
  /* Contexto das categorias. Ele tem como finalidade
   * exibir as categorias. Os dados do Contexto são
   * setados pelo componente de lista de itens
   */
  const { categories } = useCategory();
  const lastIndex = categories.length - 1;

  return (
    <BreadcrumbContainer>
      {categories.map((category, index) => (
        <span key={index}>
          {index === lastIndex ? <strong>{category}</strong> : category}
          {index < lastIndex && " > "}
        </span>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
