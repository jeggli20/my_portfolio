import { useContext } from "react";

import NavContext from "../../store/nav-context";
import LightContext from "../../store/light-context";

import classes from "./Hamburger.module.css";

const Hamburger = () => {
  const navCtx = useContext(NavContext);
  const lightCtx = useContext(LightContext);

  return (
    <div
      id={classes.hamburger}
      className={`${navCtx.isClicked ? classes.open : ""} ${
        lightCtx.isDark ? classes.dark : ""
      }`}
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
