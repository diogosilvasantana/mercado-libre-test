import { InputContainer, Input, SearchButton } from "./styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import searchIcon from "@/assets/ic_Search.png";

const SearchBarComponent = () => {
  /* Define o estado 'searchTerm' que armazena
   * o termo de busca inserido pelo usuário.
   */
  const [searchTerm, setSearchTerm] = useState("");

  /* Hook do Next.js para manipular as rotas de acordo.
   * como que foi preenchido no input, para atender o que
   * foi solicitado no enunciado do desafio.
   */
  const router = useRouter();

  /* Verifica se o usuário está na rota principal caso esteja,
   * vai forçar a limpeza do input, para evitar de ter dados preenchidos
   * sem ter uma pesquisa realizada.
   */
  useEffect(() => {
    if (router.pathname === "/") {
      setSearchTerm("");
    }
  }, [router.pathname]);

  /* Método de callback para manusear as mudanças no campo de input de busca.
   * Atualiza o estado 'searchTerm' com o valor atual do campo input.
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  /* Verifica se existe um termo de busca não vazio e, se positivo,
   * redireciona o usuário para a página de resultados
   * de busca correspondente.
   */
  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      router.push(`/items?search=${searchTerm}`);
    }
  };

  /* Método para capturar eventos de teclas no input.
   * Verifica se a tecla pressionada foi a tecla Enter e chama 'handleSearch'.
   * Isso permite que a pesquisa possa ser executada com o enter, útil inclusive
   * para acessibilidade.
   */
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
