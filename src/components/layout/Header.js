import { Fragment } from "react";

import Navigation from "./Navigation";
import logo from "../../img/logo3.png";
import classes from "./Header.module.css";

const Header = ({ navClass }) => {
  return (
    <Fragment>
      <header>
        <img alt="Logo" className={classes.logo} src={logo} />
        <Navigation />
      </header>
    </Fragment>
  );
};

export default Header;
