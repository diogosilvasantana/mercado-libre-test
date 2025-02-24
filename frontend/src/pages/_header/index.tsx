import meLiLogo from "@/assets/Logo_ML.png";
import Image from "next/image";
import { Container, Header } from "./styles";
import SearchBarComponent from "@/components/search-bar";
import Link from "next/link";

/* Esse componente é o header da aplicação. Ela aparece em
 * todas as páginas, pois está inclusa no arquivo "_app.tsx"
 */
const HeaderPage = () => {
  return (
    <Header>
      <Container>
        <Link href="/" passHref>
          <Image
            src={meLiLogo}
            alt="Mercado Libre logomarca"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <SearchBarComponent />
      </Container>
    </Header>
  );
};

export default HeaderPage;
