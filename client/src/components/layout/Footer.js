import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <span className={"copyright"}>
        &copy;
        {` 
      ${year} Jacob Eggli`}
      </span>
    </footer>
  );
};

export default Footer;
