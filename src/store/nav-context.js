import { createContext, useState } from "react";

const NavContext = createContext({
  isClicked: false,
  onClick: () => {},
});

export const NavContextProvider = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const hamburgerHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <NavContext.Provider
      value={{
        isClicked: isClicked,
        onClick: hamburgerHandler,
      }}
    >
      {props.children}
    </NavContext.Provider>
  );
};

export default NavContext;
