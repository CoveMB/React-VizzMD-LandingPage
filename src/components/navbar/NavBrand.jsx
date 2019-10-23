import React from 'react';

const navBrand = (props) => {
  return (
    <button className="normalizeBtn" onClick={() => props.scrollTo("top")}><img className="navBrand" src="/static/images/logo.png" alt="VizzMD logo" height="38" width="90" /></button>
  );
};

export default navBrand;
