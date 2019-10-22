import React, { useState, createContext } from 'react';

export const RefContext = createContext(
  { grabRef: () => {},
    scrollTo: () => {} }
);

const RefContextProvider = (props) => {
  const [topRef, setTopRef] = useState("");
  const [cardsRef, setCardsRef] = useState("");
  const [featuresRef, setFeatureRef] = useState("");
  const [ongoingRef, setOngoingRef] = useState("");

  const registerRef = (emplacement, element) => {
    switch (emplacement) {
      case "top":
        setTopRef(element);
        break;
      case "cards":
        setCardsRef(element);
        break;
      case "features":
        setFeatureRef(element);
        break;
      case "ongoing":
        setOngoingRef(element);
        break;
      default:
        break;
    }
  };

  const scrollOrder = (element) => {
    switch (element) {
      case "top":
        window.scrollTo({ left: 0, top: topRef.current.offsetTop, behavior: 'smooth' });
        break;
      case "cards":
        window.scrollTo({ left: 0, top: cardsRef.current.offsetTop - 30, behavior: 'smooth' });
        break;
      case "features":
        window.scrollTo({ left: 0, top: featuresRef.current.offsetTop - 30, behavior: 'smooth' });
        break;
      case "ongoing":
        window.scrollTo({ left: 0, top: ongoingRef.current.offsetTop - 30, behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <RefContext.Provider
      value={{
        grabRef: registerRef,
        scrollTo: scrollOrder
      }}
    >
      {props.children}
    </RefContext.Provider>
  );
};

export default RefContextProvider;
