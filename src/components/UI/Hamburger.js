import { useState } from "react";

import classes from "./Hamburger.module.css";

const Hamburger = () => {
  const [isClicked, setIsClicked] = useState("false");
  const hamburgerEventHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      id={classes.hamburger}
      className={`${isClicked ? classes.open : ""}`}
      onClick={hamburgerEventHandler}
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
