import React from "react";
import { BreadcrumbContainer } from "./styles"; // Certifique-se de ter definido os estilos para BreadcrumbContainer
import { useCategory } from "@/contexts/CategoryContext"; // Importe o useCategory do contexto

const Breadcrumb = () => {
  // Pega as categorias a partir do contexto
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
