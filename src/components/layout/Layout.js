import { NavContextProvider } from "../../store/nav-context";

import Header from "./Header";
import Footer from "./Footer";
import Hamburger from "../UI/Hamburger";
import "./Layout.css";

const Layout = (props) => {
  return (
    <NavContextProvider>
      <Header />
      <main>
        {props.children}
        <Hamburger />
      </main>
      <Footer />
    </NavContextProvider>
  );
};

export default Layout;
