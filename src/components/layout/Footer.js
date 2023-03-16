import { useContext } from "react";

import LightContext from "../../store/light-context";

import classes from "./Footer.module.css";

const Footer = () => {
  const lightCtx = useContext(LightContext);
  const year = new Date().getFullYear();

  return (
    <footer className={lightCtx.isDark ? classes.darkMode : ""}>
      <span>
        &copy;
        {` 
      ${year} Jacob Eggli`}
      </span>
    </footer>
  );
};

export default Footer;
