import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import NavContext from "../../store/nav-context";
import "./Navigation.css";

const Navigation = () => {
  const navCtx = useContext(NavContext);

  const homeNav = (
    <Fragment>
      <li className={"nav-item"}>
        <a className={"nav-link"} href="#about">
          About
        </a>
      </li>
      <li className={"nav-item"}>
        <a className={"nav-link"} href="#work">
          Work&nbsp;Experience
        </a>
      </li>
      <li className={"nav-item"}>
        <a className={"nav-link"} href="#projects">
          Projects
        </a>
      </li>
      <li className={"nav-item"}>
        <a className={"nav-link"} href="#contact">
          Contact
        </a>
      </li>
    </Fragment>
  );

  const projectsNav = (
    <li className={"nav-item"}>
      <Link to="/" className={"nav-link"} onClick={navCtx.onPageChange}>
        Home
      </Link>
    </li>
  );

  return (
    <nav className={"navbar"}>
      <ul className={`nav ${navCtx.isClicked ? "show" : ""}`}>
        {navCtx.isHomePage && homeNav}
        {!navCtx.isHomePage && projectsNav}
      </ul>
    </nav>
  );
};

export default Navigation;
