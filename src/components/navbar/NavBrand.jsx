import React, { useContext } from 'react';
import logo from '../../../public/static/images/logo.png';
import { RefContext } from '../context/RefContext';

const Brand = () => {
  const refContext = useContext(RefContext);

  const backOnTop = () => {
    refContext.scrollTo("top");
  };


  return (
    <button className="normalizeBtn" onClick={backOnTop}><img className="navBrand" src={logo} alt="VizzMD logo" height="35" width="90" /></button>
  );
};

export default Brand;
