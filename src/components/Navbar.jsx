import Link from "next/link";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavContainer>
      <Link href="/">
        <LinkWrapper>Valopedia</LinkWrapper>
      </Link>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  height: 3.5rem;
  width: 100%;
  border-bottom: 0.5px #202020 solid;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkWrapper = styled.a`
  font-weight: bold;
  font-size: 1.875rem;
  line-height: 2.25rem;
  background-image: linear-gradient(to right, #c026d3, #db2777, #9333ea);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
