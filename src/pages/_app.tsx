import type { AppProps } from "next/app";
import ContainerPage from "./_container";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ContainerPage />
      <Component {...pageProps} />
    </>
  );
};
export default App;
