import { createContext, useState } from "react";

const LightContext = createContext({
  isDark: true,
  onClick: () => {},
});

export const LightContextProvider = (props) => {
  const [isDark, setIsDark] = useState(true);

  const switchHandler = () => {
    setIsDark(!isDark);
  };

  return (
    <LightContext.Provider
      value={{
        isDark: isDark,
        onClick: switchHandler,
      }}
    >
      {props.children}
    </LightContext.Provider>
  );
};

export default LightContext;
