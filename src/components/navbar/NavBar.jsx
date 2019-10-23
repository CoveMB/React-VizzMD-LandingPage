import React, { useState, useEffect } from 'react';
import { useStore } from '../../store/useStore';
import NavBrand from './NavBrand';

const navBar = (props) => {
  const [state] = useStore();
  const [isVisible, setifVisible] = useState(false);

  const shouldNavBarShow = () => {
    const currentOffset = window.pageYOffset;
    const visible = currentOffset > state.refsOffsets.cards;
    setifVisible(visible);
  };

  useEffect(() => {
    window.addEventListener('scroll', shouldNavBarShow);
    return () => {
      window.removeEventListener('scroll', shouldNavBarShow);
    };
  }, [state]);

  return (
    <div className={isVisible ? "navbar" : "navbarHidden"}>
      {isVisible ? <NavBrand scrollTo={props.scrollTo} /> : null}
    </div>
  );
};

export default navBar;
