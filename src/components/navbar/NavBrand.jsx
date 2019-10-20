import React from 'react';
import logo from '../../../public/static/images/logo.png';

const Brand = () => {
  const backOnTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <button className="normalizeBtn" onClick={backOnTop}><img className="brand" src={logo} alt="VizzMD logo" height="65" width="150" /></button>
  );
};

export default Brand;
