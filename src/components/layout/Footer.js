import classes from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <span>
        &copy;
        {` 
      ${year} Jacob Eggli`}
      </span>
    </footer>
  );
};

export default Footer;
