import { useContext } from "react";

import NavContext from "../../store/nav-context";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const navCtx = useContext(NavContext);

  return (
    <nav className={classes.navbar}>
      <ul className={`${classes.nav} ${navCtx.isClicked ? classes.show : ""}`}>
        <li className={classes["nav-item"]}>
          <a className={classes["nav-link"]} href="#">
            About
          </a>
        </li>
        <li className={classes["nav-item"]}>
          <a className={classes["nav-link"]} href="#">
            Work Experience
          </a>
        </li>
        <li className={classes["nav-item"]}>
          <a className={classes["nav-link"]} href="#">
            Projects
          </a>
        </li>
        <li className={classes["nav-item"]}>
          <a className={classes["nav-link"]} href="#">
            Contact
          </a>
        </li>
        {/* <li className={classes["nav-item"]}>
          <a className={classes.resume} href="#">
            Resume
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
