import { createContext, useState, useEffect } from "react";

const LightContext = createContext({
  isDark: true,
  onClick: () => {},
});

export const LightContextProvider = (props) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const lightMode = localStorage.getItem("isDark");

    if (lightMode === "1") {
      setIsDark(true);
    }
  }, []);

  const switchHandler = () => {
    if (localStorage.getItem("isDark") === null) {
      localStorage.setItem("isDark", "1");
    } else {
      localStorage.removeItem("isDark");
    }
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
