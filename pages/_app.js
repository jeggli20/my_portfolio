import { LightContextProvider } from "../context/light-context";

import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <LightContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LightContextProvider>
  );
}

export default MyApp;
