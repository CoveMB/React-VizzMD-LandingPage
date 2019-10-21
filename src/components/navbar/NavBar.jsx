import React, { useState, useEffect } from 'react';
import NavBrand from './NavBrand';

const NavBar = () => {
  const [isVisible, setifVisible] = useState(false);

  const shouldNavBarShow = () => {
    const currentOffset = window.pageYOffset;
    const visible = currentOffset > 900;
    setifVisible(visible);
  };

  useEffect(() => {
    window.addEventListener('scroll', shouldNavBarShow);
    return () => {
      window.removeEventListener('scroll', shouldNavBarShow);
    };
  }, []);

  return (
    <div className={isVisible ? "navbar" : "navbarHidden"}>
      {isVisible ? <NavBrand /> : null}
    </div>
  );
};

export default NavBar;
