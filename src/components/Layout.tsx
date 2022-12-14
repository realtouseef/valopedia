import Footer from "./Footer";
import Navbar from "./Navbar";
import styled from "styled-components";

type ChildrenTypes = { children: React.ReactNode };

const Layout = ({ children }: ChildrenTypes) => {
  return (
    <Container>
      <Navbar />
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  min-height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;
const ChildrenWrapper = styled.main`
  flex-grow: 1;
`;
