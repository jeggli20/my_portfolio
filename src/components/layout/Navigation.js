import { useContext } from "react";

import NavContext from "../../store/nav-context";
import "./Navigation.css";

const Navigation = () => {
  const navCtx = useContext(NavContext);

  return (
    <nav className={"navbar"}>
      <ul className={`nav ${navCtx.isClicked ? "show" : ""}`}>
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
      </ul>
    </nav>
  );
};

export default Navigation;
