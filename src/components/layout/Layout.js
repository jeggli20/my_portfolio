import { useContext } from "react";

import { NavContextProvider } from "../../store/nav-context";
import LightContext from "../../store/light-context";

import Header from "./Header";
import Footer from "./Footer";
import Hamburger from "../UI/Hamburger";
import classes from "./Layout.module.css";

const Layout = (props) => {
  const lightCtx = useContext(LightContext);

  return (
    <NavContextProvider>
      <Header />
      <main className={lightCtx.isDark ? classes.darkMode : ""}>
        {props.children}
        <Hamburger />
      </main>
      <Footer />
    </NavContextProvider>
  );
};

export default Layout;
