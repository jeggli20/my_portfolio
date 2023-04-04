import { useContext } from "react";

import NavContext from "../../context/nav-context";
import LightContext from "../../context/light-context";

import classes from "./Hamburger.module.css";

const Hamburger = () => {
  const navCtx = useContext(NavContext);
  const lightCtx = useContext(LightContext);

  return (
    <div
      className={`${classes.hamburger} ${
        navCtx.isClicked ? classes.open : ""
      } ${lightCtx.isDark ? classes.dark : ""}`}
      onClick={navCtx.onClick}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
