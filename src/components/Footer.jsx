import { siteMetaData } from "@utils/siteMetaData";
const Footer = () => {
  const { twitterHandle, twitterLink } = siteMetaData;
  return (
    <footer>
      <div className="footer_ribbon">
        w/ ❤️ from{" "}
        <a
          href={twitterLink}
          target="_blank"
          rel="noopener noreferrer"
          className="footer_link"
        >
          {twitterHandle}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
