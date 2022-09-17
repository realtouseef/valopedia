import { siteMetaData } from "@utils/siteMetaData";
import styled from "styled-components";

const Footer = () => {
  const { twitterHandle, twitterLink } = siteMetaData;
  return (
    <FooterContainer>
      <FooterRibbon>
        w/ ❤️ from{" "}
        <FooterLink
          href={twitterLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {twitterHandle}
        </FooterLink>
      </FooterRibbon>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  height: 2rem;
  width: 100%;
  border-top: 0.5px #202020 solid;
  color: black;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.025em;
  text-align: center;
`;

const FooterRibbon = styled.div`
  padding: 6px 0;
`;

const FooterLink = styled.a`
  text-decoration-line: underline;
  text-decoration-style: wavy;
`;
