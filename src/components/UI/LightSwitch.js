import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faToggleOn,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./LightSwitch.module.css";

const LightSwitch = () => {
  const [isDark, setIsDark] = useState(true);

  const switchHandler = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={classes["light-switch"]}>
      <span className={classes.text}>
        {isDark ? "Dark Mode" : "Light Mode"}
      </span>
      <div className={classes.icons}>
        <FontAwesomeIcon icon={faMoon} className={classes.indicator} />
        <label className={classes.switch}>
          <input type="checkbox" />
          <span className={classes.slider} onClick={switchHandler}></span>
        </label>
        <FontAwesomeIcon icon={faSun} className={classes.indicator} />
      </div>
    </div>
  );
};

export default LightSwitch;
