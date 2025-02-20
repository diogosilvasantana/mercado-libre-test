import Image from "next/image";
import { InputContainer, Input, SearchButton } from "./styles";
import searchIcon from "@/assets/ic_Search.png";

const SearchBarComponent = () => {
  return (
    <InputContainer>
      <Input placeholder="Nunca dejes de buscar" />
      <SearchButton>
        <Image src={searchIcon} alt="icone do botão" />
      </SearchButton>
    </InputContainer>
  );
};

export default SearchBarComponent;
