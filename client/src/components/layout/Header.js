import { Fragment } from "react";

import LightSwitch from "../UI/LightSwitch";
import Navigation from "./Navigation";
import logo from "../../img/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <header>
        <img alt="Logo" className={"header-logo"} src={logo} />
        <Navigation />
        <LightSwitch />
      </header>
    </Fragment>
  );
};

export default Header;
