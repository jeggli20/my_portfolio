import { useContext } from "react";
import FormContext from "../../store/form-context";

import Form from "../UI/Form";
import "./Contact.css";

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
    <section id="contact" className={"contact-section"}>
      <h3 className={"section-title"}>Contact Me (Under Construction)</h3>
      <div className={"section-content"}>
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
