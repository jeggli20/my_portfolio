import { useContext } from "react";
import FormContext from "../../context/form-context";

import Form from "../UI/Form";
import classes from "./Contact.module.css";

const Contact = () => {
  const formCtx = useContext(FormContext);

  const formContent = (
    <h4>Send me a message or connect with me on social media!</h4>
  );

  const submittingContent = <h4>Hold on while I retrieve your message...</h4>;

  const completeContent = (
    <h4>I got your message! I will be in contact with you soon.</h4>
  );

  const errorContent = <h4>An unexpected error has occurred!</h4>;

  return (
    <section id="contact" className={classes["contact-section"]}>
      <h3 className={`dm-section-title ${classes["section-title"]}`}>
        Contact Me
      </h3>
      <div className={classes["section-content"]}>
        {!formCtx.isSubmitting &&
          !formCtx.isComplete &&
          !formCtx.isError &&
          formContent}
        {formCtx.isSubmitting &&
          !formCtx.isComplete &&
          !formCtx.isError &&
          submittingContent}
        {!formCtx.isSubmitting &&
          formCtx.isComplete &&
          !formCtx.isError &&
          completeContent}
        {formCtx.isError && errorContent}
        <Form />
      </div>
    </section>
  );
};

export default Contact;
