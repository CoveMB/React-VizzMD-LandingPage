import React, { Fragment, useEffect, useContext, useRef } from 'react';
import { RefContext } from './context/RefContext';

const NavBtn = (props) => {
  const refContext = useContext(RefContext);

  const cardsNavRef = useRef();
  const featuresRef = useRef();
  const ongoingref = useRef();

  const checkPosition = (event) => {
    console.log(window.scrollY);
  };

  useEffect(() => {
    const offsets = props.getOffsets();
    window.addEventListener('scroll', checkPosition);
  }, []);

  return (
    <Fragment>
      <button className="NavBtn NavBtnCards" ref={cardsNavRef} onClick={() => refContext.scrollTo("cards")} />
      <button className="NavBtn NavBtnFeatures" ref={featuresRef} onClick={() => refContext.scrollTo("features")} />
      <button className="NavBtn NavBtnOngoing" ref={ongoingref} onClick={() => refContext.scrollTo("ongoing")} />
    </Fragment>
  );
};

export default NavBtn;
