import { createContext, useState } from "react";

const FormContext = createContext({
  isSubmitting: false,
  isComplete: false,
  isError: false,
  errMsg: "",
  submittingHandler: () => {},
  completionHandler: () => {},
  errorHandler: (string) => {},
  resetForm: () => {},
});

export const FormContextProvider = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const submittingHandler = () => {
    setIsSubmitting(true);
    setIsComplete(false);
  };

  const completionHandler = () => {
    setIsSubmitting(false);
    setIsComplete(true);
  };

  const errorHandler = (error) => {
    setErrMsg(error);
    setIsSubmitting(false);
    setIsComplete(false);
    setIsError(true);
  };

  const resetForm = () => {
    setIsSubmitting(false);
    setIsComplete(false);
    setIsError(false);
  };

  return (
    <FormContext.Provider
      value={{
        isSubmitting,
        isComplete,
        isError,
        errMsg,
        submittingHandler,
        completionHandler,
        errorHandler,
        resetForm,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
