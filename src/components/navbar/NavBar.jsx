import React from 'react';
import { useStore } from '../../store/useStore';
import NavBrand from './NavBrand';

const navBar = (props) => {
  const [state] = useStore();

  return (
    <div className={state.position !== "top" ? "navbar" : "navbarHidden"}>
      {state.position !== "top" ? <NavBrand scrollTo={props.scrollTo} /> : null}
    </div>
  );
};

export default navBar;
