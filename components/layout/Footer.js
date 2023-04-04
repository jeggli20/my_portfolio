import classes from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.container}>
      <span className={classes.copyright}>
        &copy;
        {` 
      ${year} Jacob Eggli`}
      </span>
    </footer>
  );
};

export default Footer;
