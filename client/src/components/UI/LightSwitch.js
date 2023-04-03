import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

import LightContext from "../../store/light-context";
import "./LightSwitch.css";

const LightSwitch = () => {
  const lightCtx = useContext(LightContext);

  return (
    <div
      className={"light-switch"}
      title={lightCtx.isDark ? "Dark Mode" : "Light Mode"}
    >
      <FontAwesomeIcon
        icon={faLightbulb}
        onClick={lightCtx.onClick}
        className={`lightbulb ${lightCtx.isDark ? "off" : "on"}`}
      />
    </div>
  );
};

export default LightSwitch;
