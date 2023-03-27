import { useContext } from "react";

import NavContext from "../../store/nav-context";
import LightContext from "../../store/light-context";

import "./Hamburger.css";

const Hamburger = () => {
  const navCtx = useContext(NavContext);
  const lightCtx = useContext(LightContext);

  return (
    <div
      id={"hamburger"}
      className={`${navCtx.isClicked ? "open" : ""} ${
        lightCtx.isDark ? "dark" : ""
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
