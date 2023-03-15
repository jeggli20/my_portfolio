import { Fragment } from "react";

import LightSwitch from "../UI/LightSwitch";
import Navigation from "./Navigation";
import logo from "../../img/logo3.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header>
        <img alt="Logo" className={classes.logo} src={logo} />
        <LightSwitch />
        <Navigation />
      </header>
    </Fragment>
  );
};

export default Header;
