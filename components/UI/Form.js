import { Fragment, useContext } from "react";
import useInput from "../../hooks/useInput";
import FormContext from "../../context/form-context";

import Button from "../UI/Button";
import classes from "./Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faFacebookSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

/* ====== Validation ====== */
const isNotEmpty = (value) => String(value).trim() !== "";

const isString = (value) => {
  if (!isNotEmpty(value)) {
    return false;
  }

  const letters = /^[a-zA-Z]+$/;
  return letters.test(value);
};

const messageLength = (string) => {
  return string.split(" ").join("").length;
};

let msgError;
const validMessage = (value) => {
  if (messageLength(value) < 10) {
    msgError = "Your message should be at least 10 characters";
    return false;
  } else if (messageLength(value) > 250) {
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
  } = useInput(validMessage);

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredMessageIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    formCtx.submittingHandler();
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        fName: capitalize(enteredFirstName),
        lName: capitalize(enteredLastName),
        email: enteredEmail,
        message: enteredMessage,
      }),
    })
      .then(async (res) => {
        const json = await res.json();
        return { response: res, json };
      })
      .then((data) => {
        if (data.response.ok) {
          return;
        }

        throw new Error(`${data.json.message}`);
      })
      .then(() => {
        formCtx.completionHandler();

        resetFirstName();
        resetLastName();
        resetEmail();
        resetMessage();
      })
      .catch((error) => {
        formCtx.errorHandler(error.message);
      });
  };

  const newFormHandler = () => {
    formCtx.newForm();
  };

  const formContent = (
    <form className={classes["contact-form"]} method="POST">
      <div className={classes["form-row"]}>
        <div
          className={`dm-form-input ${classes["form-input"]} ${classes["multi-input"]}`}
        >
          <label htmlFor="fName">First Name</label>
          <input
            id="fName"
            name="fName"
            type="text"
            placeholder="John"
            value={capitalize(enteredFirstName)}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            className={firstNameHasError ? classes.invalid : ""}
          />
        </div>
        <div
          className={`dm-form-input ${classes["form-input"]} ${classes["multi-input"]}`}
        >
          <label htmlFor="lName">Last Name</label>
          <input
            id="lName"
            name="lName"
            type="text"
            placeholder="Smith"
            value={capitalize(enteredLastName)}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            className={lastNameHasError ? classes.invalid : ""}
          />
        </div>
      </div>
      {(firstNameHasError || lastNameHasError) && (
        <p className={classes["invalid-text"]}>Please enter in a valid name</p>
      )}
      <div className={classes["form-row"]}>
        <div
          className={`dm-form-input ${classes["form-input"]} ${classes["single-input"]}`}
        >
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jsmith@example.com"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            className={emailHasError ? classes.invalid : ""}
          />
        </div>
      </div>
      {emailHasError && (
        <p className={classes["invalid-text"]}>
          Please enter in a valid email address
        </p>
      )}
      <div className={classes["form-row"]}>
        <div
          className={`dm-form-input ${classes["form-input"]} ${classes["single-input"]}`}
        >
          <label htmlFor="message">Short Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Must be at least 10 characters..."
            value={enteredMessage}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
            className={`dm-message ${classes.message} ${
              messageHasError ? classes.invalid : ""
            }`}
          />
        </div>
      </div>
      <div className={`dm-message-length ${classes["message-length"]}`}>
        {messageLength(enteredMessage)}/250
      </div>
      {messageHasError && <p className={classes["invalid-text"]}>{msgError}</p>}
      <Button className={classes.submit} type="submit" onClick={submitHandler}>
        Submit
      </Button>
      <div className={classes["social-links"]}>
        <a
          href="https://github.com/jeggli20"
          target="_blank"
          rel="noreferrer"
          className={classes["rotate-left"]}
        >
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
        <a
          href="https://facebook.com/jacob.eggli.3/"
          target="_blank"
          rel="noreferrer"
          className={classes["rotate-right"]}
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a
          href="https://linkedin.com/in/jeggli20"
          target="_blank"
          rel="noreferrer"
          className={classes["rotate-left"]}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </form>
  );

  const sendingContent = (
    <div className={classes.loader}>
      <div
        className={`dm-square ${classes.square} ${classes["square-1"]}`}
      ></div>
      <div
        className={`dm-square ${classes.square} ${classes["square-2"]}`}
      ></div>
      <div
        className={`dm-square ${classes.square} ${classes["square-3"]}`}
      ></div>
    </div>
  );

  const sentContent = (
    <Button type="button" onClick={formCtx.resetForm}>
      Submit Another Form?
    </Button>
  );

  const errorContent = (
    <Fragment>
      <h3 className={classes.errorHeader}>{`${formCtx.errMsg}`}</h3>
      <Button type="button" onClick={newFormHandler}>
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
