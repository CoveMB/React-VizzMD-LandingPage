import React from 'react';
import logo from '../../../public/static/images/logo.png';

const Brand = () => {
  const backOnTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <button className="normalizeBtn" onClick={backOnTop}><img className="navBrand" src={logo} alt="VizzMD logo" height="35" width="90" /></button>
  );
};

export default Brand;
