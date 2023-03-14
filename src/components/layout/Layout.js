import Header from "./Header";
import Footer from "./Footer";
import Hamburger from "../UI/Hamburger";
import { NavContextProvider } from "../../store/nav-context";

const Layout = (props) => {
  return (
    <NavContextProvider>
      <Header />
      {props.children}
      <Hamburger />
      <Footer />
    </NavContextProvider>
  );
};

export default Layout;
