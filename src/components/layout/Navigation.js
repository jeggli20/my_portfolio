import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import NavContext from "../../store/nav-context";
import "./Navigation.css";

const Navigation = () => {
  const navCtx = useContext(NavContext);
  const pathname = window.location.pathname;

  const homeNav = (
    <Fragment>
      <li className={"nav-item"}>
        <a className={"nav-link"} href="#about">
          About
        </a>
      </li>
      <li className={"nav-item"}>
        <a className={"nav-link"} href="#work">
          Work Experience
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
      <Link to="/home" className={"nav-link"}>
        Home
      </Link>
    </li>
  );

  return (
    <nav className={"navbar"}>
      <ul className={`nav ${navCtx.isClicked ? "show" : ""}`}>
        {pathname === "/home" && homeNav}
        {pathname === "/projects" && projectsNav}
      </ul>
    </nav>
  );
};

export default Navigation;
