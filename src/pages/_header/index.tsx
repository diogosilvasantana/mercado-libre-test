import meLiLogo from "@/assets/Logo_ML.png";
import Image from "next/image";
import { Container, Header } from "./styles";
import SearchBarComponent from "@/components/search-bar";

const HeaderPage = () => {
  return (
    <Header>
      <Container>
        <Image src={meLiLogo} alt="Mercado Libre logomarca" />
        <SearchBarComponent />
      </Container>
    </Header>
  );
};

export default HeaderPage;
