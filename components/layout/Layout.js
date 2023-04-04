import { useContext } from "react";
import LightContext from "../../context/light-context";

import { NavContextProvider } from "../../context/nav-context";

import Header from "./Header";
import Footer from "./Footer";
import Hamburger from "../UI/Hamburger";

const Layout = (props) => {
  const lightCtx = useContext(LightContext);

  return (
    <div className={`${lightCtx.isDark ? "dark-mode" : "light-mode"}`}>
      <NavContextProvider>
        <Header />
        <main>{props.children}</main>
        <Hamburger />
        <Footer />
      </NavContextProvider>
    </div>
  );
};

export default Layout;
