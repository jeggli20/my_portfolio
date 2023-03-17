import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={classes["contact-section"]}>
      <h3>Contact Me</h3>
      <p>Send me an email or get in contact with me through social media!</p>
      <a type="button" href="mailto:jacob@egglis.com">
        Say Hello!
      </a>
      <a href="https://github.com/jeggli20" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
      <a
        href="https://facebook.com/jacob.eggli.3/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>
      <a href="mailto:jacob@egglis.com">jacob@egglis.com</a>
    </section>
  );
};

export default Contact;
