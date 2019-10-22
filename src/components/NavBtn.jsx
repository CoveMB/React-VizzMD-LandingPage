import React, { Fragment, useEffect, useState, useRef } from 'react';


const NavBtn = (props) => {
  const [position, setPosition] = useState("");

  const topNavRef = useRef();
  const cardsNavRef = useRef();
  const featuresRef = useRef();
  const ongoingref = useRef();

  const checkPosition = (offsetsObj) => {
    const currentPosition = window.scrollY;

    if (currentPosition > offsetsObj.ongoing) {
      if (position !== "ongoing") { setPosition("ongoing"); }
    } else if (currentPosition > offsetsObj.features && currentPosition < offsetsObj.ongoing) {
      if (position !== "features") { setPosition("features"); }
    } else if (currentPosition < offsetsObj.features && currentPosition > offsetsObj.cards) {
      if (position !== "cards") { setPosition("cards"); }
    } else if (currentPosition < offsetsObj.cards) {
      if (position !== "top") { setPosition("top"); }
    }
  };

  useEffect(() => {
    const offsetsObj = props.getOffsets();
    window.addEventListener('scroll', (event) => {
      checkPosition(offsetsObj);
    });
  }, []);

  const getNavBtnClasses = (navBtn) => {
    if (navBtn === position) {
      return `NavBtn activateBtn NavBtn${navBtn}`;
    }
    return `NavBtn NavBtn${navBtn}`;
  };

  return (
    <Fragment>
      <button className={getNavBtnClasses("top")} ref={topNavRef} onClick={() => props.scrollTo("top")} />
      <button className={getNavBtnClasses("cards")} ref={cardsNavRef} onClick={() => props.scrollTo("cards")} />
      <button className={getNavBtnClasses("features")} ref={featuresRef} onClick={() => props.scrollTo("features")} />
      <button className={getNavBtnClasses("ongoing")} ref={ongoingref} onClick={() => props.scrollTo("ongoing")} />
    </Fragment>
  );
};

export default NavBtn;
