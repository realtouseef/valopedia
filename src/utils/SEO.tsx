import Head from "next/head";
import { siteMetaData } from "./siteMetaData";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  OGimageurl?: string;
  featuredImage: boolean;
}

const SEO = ({
  title,
  description,
  canonical,
  OGimageurl,
  featuredImage,
}: SEOProps) => {
  const { siteName, siteUrl, twitterHandle } = siteMetaData;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`${title} | ${siteName}`}</title>
        <meta
          property="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta property="title" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={`${siteUrl}${canonical}`} />
        <meta property="og:site_name" content={siteName} />
        <meta property="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`${siteUrl}${canonical}`} />
        {featuredImage && (
          <>
            <meta property="og:image" content={OGimageurl} />
            <meta property="og:image:width" content="512" />
            <meta property="og:image:height" content="512" />
            <meta property="og:image:type" content="image/png" />
          </>
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={twitterHandle} />
        <meta name="twitter:site" content={twitterHandle} />
      </Head>
    </>
  );
};

export default SEO;
