import type { AppProps } from "next/app";
import HeaderPage from "./_header";
import { globalStyles } from "@/styles/global";

globalStyles();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <HeaderPage />
      <Component {...pageProps} />
    </>
  );
};
export default App;
