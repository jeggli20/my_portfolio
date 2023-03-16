import { Fragment, useContext } from "react";

import LightContext from "../../store/light-context";

import LightSwitch from "../UI/LightSwitch";
import Navigation from "./Navigation";
import logo from "../../img/logo3.png";
import classes from "./Header.module.css";

const Header = (props) => {
  const lightCtx = useContext(LightContext);

  return (
    <Fragment>
      <header className={lightCtx.isDark ? classes.darkMode : ""}>
        <img alt="Logo" className={classes.logo} src={logo} />
        <LightSwitch />
        <Navigation />
      </header>
    </Fragment>
  );
};

export default Header;
