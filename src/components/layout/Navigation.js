import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.nav}>
        <li className={classes["nav-item"]}>
          <a className={classes["nav-link"]} href="#">
            About
          </a>
        </li>
        <li className={classes["nav-item"]}>
          <a className={classes["nav-link"]} href="#">
            Work Experience
          </a>
        </li>
        <li className={classes["nav-item"]}>
          <a className={classes["nav-link"]} href="#">
            Portfolio
          </a>
        </li>
        <li className={classes["nav-item"]}>
          <a className={classes["nav-link"]} href="#">
            Contact
          </a>
        </li>
        <li className={classes["nav-item"]}>
          <a className={classes.resume} href="#">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
