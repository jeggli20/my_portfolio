import { Fragment } from "react";

import LightSwitch from "../UI/LightSwitch";
import Navigation from "./Navigation";
import logo from "../../img/logo1.png";
import "./Header.css";

const Header = (props) => {
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
