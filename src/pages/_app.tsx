import type { AppProps } from "next/app";
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
 * detalhes do item apareça a categorias retornadas para a pesquisa em questão.
 */
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CategoryProvider>
      <HeaderPage />
      <Component {...pageProps} />
    </CategoryProvider>
  );
};
export default App;
