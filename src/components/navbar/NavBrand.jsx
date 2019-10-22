import React from 'react';
import logo from '../../../public/static/images/logo.png';

const Brand = (props) => {
  return (
    <button className="normalizeBtn" onClick={() => props.scrollTo("top")}><img className="navBrand" src={logo} alt="VizzMD logo" height="35" width="90" /></button>
  );
};

export default Brand;
