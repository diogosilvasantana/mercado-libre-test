import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import HeaderPage from "./_header";
import { globalStyles } from "@/styles/global";
import { CategoryProvider } from "@/contexts/CategoryContext";

/* Estilos globais da aplicação. Ela importa para a aplicação
 * os estilos definidos na spec do desafio. Nele, possui os estilos
 * padrões, assim como a tematização definida no arquivo
 * do arquivo "/styles/index.ts".
 */
globalStyles();

/* Root do projeto, onde encapsulamos o Contexto "CategoryProvider",
 * onde garantimos que as páginas de lista de itens e
 * detalhes do item apareçam as categorias retornadas para a pesquisa em questão.
 */
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CategoryProvider>
      <DefaultSeo
        titleTemplate="%s - Mercado Libre"
        defaultTitle="Mercado Libre"
        description="Bem-vindo ao Mercado Libre, seu site de compras online."
      />
      <HeaderPage />
      <Component {...pageProps} />
    </CategoryProvider>
  );
};

export default App;
