import Head from "next/head";
import { siteMetaData } from "@utils/siteMetaData";
import Card from "@components/Card";

const Home: React.FunctionComponent = () => {
  const { siteName, siteDescription, siteKeywords, siteAuthor, siteUrl } =
    siteMetaData;
  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:url" content={siteUrl} />
        <meta name="og:description" content={siteDescription} />
        <meta name="keywords" content={siteKeywords} />
        <meta name="author" content={`Developed by ${siteAuthor}`} />
        <meta name="robots" content="index, follow" />
      </Head>
      <Card />
    </>
  );
};

export default Home;
