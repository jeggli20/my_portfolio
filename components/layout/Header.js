import { Fragment } from "react";
import Image from "next/image";

import LightSwitch from "../UI/LightSwitch";
import Navigation from "./Navigation";
import logo from "../../img/logo.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.container}>
        <Image alt="Logo" className={classes["header-logo"]} src={logo} fill />
        <Navigation />
        <LightSwitch />
      </header>
    </Fragment>
  );
};

export default Header;
