import { InputContainer, Input, SearchButton } from "./styles";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import searchIcon from "@/assets/ic_Search.png";

const SearchBarComponent = () => {
  // Utiliza o hook useState para definir o termo de busca, armazenando-o em searchTerm.
  const [searchTerm, setSearchTerm] = useState("");

  // Hook useRouter de Next.js utilizado para navegação programática entre páginas
  const router = useRouter();

  /* Método para manipular mudanças no input de busca.
   * Atualiza o estado searchTerm com o valor atual do input.
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  /* Método acionado quando o botão de busca é clicado.
   * Verifica se há um termo de busca válido: se houver, redireciona para a página de resultados.
   */
  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      router.push(`/items?search=${searchTerm}`);
    }
  };

  // Captura evento de tecla e verifica se foi a tecla Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <InputContainer>
      <Input
        placeholder="Nunca dejes de buscar"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <SearchButton onClick={handleSearch}>
        <Image src={searchIcon} alt="icone do botão" />
      </SearchButton>
    </InputContainer>
  );
};

export default SearchBarComponent;
