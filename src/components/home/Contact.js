import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Button from "../UI/Button";
import "./Contact.css";

const Contact = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className={"contact-section"}>
      <h3 className={"section-title"}>Contact Me (Under Construction)</h3>
      <div className={"section-content"}>
        <p>Send me a message or get in contact with me through social media!</p>
        <form className={"contact-form"}>
          <div className={"form-row"}>
            <div className={"form-input multi-input"}>
              <label htmlFor="fname">First Name</label>
              <input id="fname" name="fname" type="text" placeholder="John" />
            </div>
            <div className={"form-input multi-input"}>
              <label htmlFor="lname">Last Name</label>
              <input id="lname" name="lname" type="text" placeholder="Smith" />
            </div>
          </div>
          <div className={"form-row"}>
            <div className={"form-input multi-input"}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jsmith@example.com"
              />
            </div>
            <div className={"form-input multi-input"}>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="text"
                placeholder="xxx-xxx-xxxx"
              />
            </div>
          </div>
          <div className={"form-row"}>
            <div className={"form-input single-input"}>
              <label htmlFor="message">Short Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Must be at least 10 characters..."
              />
            </div>
          </div>
          <Button className={"submit"} type="submit" onClick={submitHandler}>
            Submit
          </Button>
        </form>
        <div className={"social-links"}>
          <a
            href="https://github.com/jeggli20"
            target="_blank"
            rel="noreferrer"
            className={"rotate-left"}
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a
            href="https://facebook.com/jacob.eggli.3/"
            target="_blank"
            rel="noreferrer"
            className={"rotate-right"}
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a
            href="https://linkedin.com/in/jeggli20"
            target="_blank"
            rel="noreferrer"
            className={"rotate-left"}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
