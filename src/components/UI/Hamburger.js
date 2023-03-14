import { useContext } from "react";

import NavContext from "../../store/nav-context";
import classes from "./Hamburger.module.css";

const Hamburger = () => {
  const navCtx = useContext(NavContext);

  return (
    <div
      id={classes.hamburger}
      className={`${navCtx.isClicked ? classes.open : ""}`}
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
