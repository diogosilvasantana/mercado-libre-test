import meliLogo from "@/assets/Logo_ML.png";
import Image from "next/image";
import { Header } from "./styles";
import SearchBarComponent from "./_component/search-bar";

const HeaderPage = () => {
  return (
    <Header>
      <Image src={meliLogo} alt="Mercado Libre logomarca" />

      <SearchBarComponent />
    </Header>
  );
};

export default HeaderPage;
