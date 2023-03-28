import { createContext, useState } from "react";

const NavContext = createContext({
  isClicked: false,
  isHomePage: true,
  onClick: () => {},
  onPageChange: () => {},
});

export const NavContextProvider = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  const hamburgerHandler = () => {
    setIsClicked(!isClicked);
  };

  const navLinkHandler = () => {
    setIsHomePage(!isHomePage);
    window.scrollTo(0, 0);
  };

  return (
    <NavContext.Provider
      value={{
        isClicked: isClicked,
        isHomePage: isHomePage,
        onClick: hamburgerHandler,
        onPageChange: navLinkHandler,
      }}
    >
      {props.children}
    </NavContext.Provider>
  );
};

export default NavContext;
