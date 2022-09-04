import Head from "next/head";
import type { AgentsTypes } from "@utils/types";

const SEO = ({
  displayName,
  description,
  fullPortrait,
  developerName,
}: AgentsTypes) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{`${displayName} | Valopedia 👾`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="og:title" content={`${displayName} from Valorant`} />
      {/* <meta name="og:url" content={} /> */}
      <meta name="og:description" content={description} />
      <meta name="og:image" content={fullPortrait} />
      <meta name="keywords" content={`${displayName}, Valorant`} />
      <meta name="author" content={`Developed  by ${developerName}`} />
      <meta name="robots" content="index, follow" />
    </Head>
  );
};

export default SEO;
