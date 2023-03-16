import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

import LightContext from "../../store/light-context";
import classes from "./LightSwitch.module.css";

const LightSwitch = () => {
  const lightCtx = useContext(LightContext);

  return (
    <div className={classes["light-switch"]}>
      <FontAwesomeIcon
        icon={faLightbulb}
        onClick={lightCtx.onClick}
        className={`${classes.lightbulb} ${
          lightCtx.isDark ? classes.off : classes.on
        }`}
      />
    </div>
  );
};

export default LightSwitch;
