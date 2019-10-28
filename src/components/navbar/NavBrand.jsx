import React from 'react';
import { useStore } from '../../store/useStore';

const navBrand = () => {
  const dispatch = useStore()[1];
  console.log("render navbarBrand");

  return (
    <button className="normalizeBtn" onClick={() => { dispatch("GO_TO_REF", "top"); }}><img className="navBrand" src="/static/images/logo.png" alt="VizzMD logo" height="38" width="90" /></button>
  );
};

export default navBrand;
