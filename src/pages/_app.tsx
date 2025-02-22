import type { AppProps } from "next/app";
import HeaderPage from "./_header";
import { globalStyles } from "@/styles/global";
import { CategoryProvider } from "@/contexts/CategoryContext";

globalStyles();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CategoryProvider>
      <HeaderPage />
      <Component {...pageProps} />
    </CategoryProvider>
  );
};
export default App;
