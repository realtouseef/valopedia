import Head from "next/head";
import { siteMetaData } from "@utils/siteMetaData";
import Agents from "@components/Agents";

const Home = ({ characters }) => {
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
      <Agents characters={characters} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_AGENTS);
  const data = await res.json();

  return {
    props: {
      characters: data,
    },
  };
};
