import { Fragment, useContext } from "react";
import Link from "next/link";

import NavContext from "../../context/nav-context";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const navCtx = useContext(NavContext);

  const homeNav = (
    <Fragment>
      <li className={classes["nav-item"]}>
        <a className={`dm-nav-link ${classes["nav-link"]}`} href="#about">
          About
        </a>
      </li>
      <li className={classes["nav-item"]}>
        <a className={`dm-nav-link ${classes["nav-link"]}`} href="#work">
          Work&nbsp;Experience
        </a>
      </li>
      <li className={classes["nav-item"]}>
        <a className={`dm-nav-link ${classes["nav-link"]}`} href="#projects">
          Projects
        </a>
      </li>
      <li className={classes["nav-item"]}>
        <a className={`dm-nav-link ${classes["nav-link"]}`} href="#contact">
          Contact
        </a>
      </li>
    </Fragment>
  );

  const projectsNav = (
    <li className={classes["nav-item"]}>
      <Link
        to="/"
        className={classes["nav-link"]}
        onClick={navCtx.onPageChange}
      >
        Home
      </Link>
    </li>
  );

  return (
    <nav className={classes.navbar}>
      <ul className={`${classes.nav} ${navCtx.isClicked ? classes.show : ""}`}>
        {navCtx.isHomePage && homeNav}
        {!navCtx.isHomePage && projectsNav}
      </ul>
    </nav>
  );
};

export default Navigation;
