import Layout from "@components/Layout";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap");

  body {
    font-family: "Montserrat", sans-serif;
    padding: 0;
    margin: 0;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
