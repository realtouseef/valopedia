import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout_children">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
