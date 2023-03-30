import { Fragment, useContext } from "react";
import useInput from "../../hooks/useInput";
import FormContext from "../../store/form-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Button from "../UI/Button";
import "./Form.css";

/* ====== Validation ====== */
const isNotEmpty = (value) => String(value).trim() !== "";

const isString = (value) => {
  if (!isNotEmpty(value)) {
    return false;
  }

  const letters = /^[a-zA-Z]+$/;
  return letters.test(value);
};

let msgError;
const msgLength = (value) => {
  if (value.trim().length < 10) {
    msgError = "Your message should be at least 10 characters";
    return false;
  } else if (value.trim().length > 250) {
    msgError = "Your message should be less than 250 characters";
    return false;
  } else {
    return true;
  }
};

const validEmail = (value) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(value);
};

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
/* ====== End Validation ====== */

const Form = () => {
  const formCtx = useContext(FormContext);

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isString);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isString);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(validEmail);

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    valueBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(msgLength);

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredMessageIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const formContent = (
    <form className={"contact-form"}>
      <div className={"form-row"}>
        <div className={"form-input multi-input"}>
          <label htmlFor="fname">First Name</label>
          <input
            id="fname"
            name="fname"
            type="text"
            placeholder="John"
            value={capitalize(enteredFirstName)}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            className={firstNameHasError ? "invalid" : ""}
          />
        </div>
        <div className={"form-input multi-input"}>
          <label htmlFor="lname">Last Name</label>
          <input
            id="lname"
            name="lname"
            type="text"
            placeholder="Smith"
            value={capitalize(enteredLastName)}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            className={lastNameHasError ? "invalid" : ""}
          />
        </div>
      </div>
      {(firstNameHasError || lastNameHasError) && (
        <p className={"invalid-text"}>Please enter in a valid name</p>
      )}
      <div className={"form-row"}>
        <div className={"form-input single-input"}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jsmith@example.com"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            className={emailHasError ? "invalid" : ""}
          />
        </div>
      </div>
      {emailHasError && (
        <p className={"invalid-text"}>Please enter in a valid email address</p>
      )}
      <div className={"form-row"}>
        <div className={"form-input single-input"}>
          <label htmlFor="message">Short Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Must be at least 10 characters..."
            value={enteredMessage}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
            className={messageHasError ? "invalid" : ""}
          />
        </div>
      </div>
      <div className={"message-length"}>{enteredMessage.trim().length}/250</div>
      {messageHasError && (
        <p className={"invalid-text"}>{`${
          msgError || "Please write a message between 10 and 250 characters"
        }`}</p>
      )}
      <Button className={"submit"} type="submit" onClick={submitHandler}>
        Submit
      </Button>
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
    </form>
  );

  const sendingContent = (
    <div className={"loader"}>
      <div className={`"circle" "ball-1"`}></div>
      <div className={`"circle" "ball-2"`}></div>
      <div className={`"circle" "ball-3"`}></div>
    </div>
  );

  const sentContent = (
    <Button type="button" onClick={formCtx.resetForm}>
      Submit Another Form?
    </Button>
  );

  const errorContent = (
    <Fragment>
      <h3 className={"errorHeader"}>{`${formCtx.errMsg}`}</h3>
      <Button type="button" onClick={formCtx.resetForm}>
        Try again?
      </Button>
    </Fragment>
  );

  return (
    <Fragment>
      {!formCtx.isSubmitting &&
        !formCtx.isComplete &&
        !formCtx.isError &&
        formContent}
      {formCtx.isSubmitting &&
        !formCtx.isComplete &&
        !formCtx.isError &&
        sendingContent}
      {!formCtx.isSubmitting &&
        formCtx.isComplete &&
        !formCtx.isError &&
        sentContent}
      {formCtx.isError && errorContent}
    </Fragment>
  );
};

export default Form;
