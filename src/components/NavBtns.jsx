import React, { Fragment, useEffect, useState } from 'react';


const navBtns = (props) => {
  const [position, setPosition] = useState("");
  const { offsets, scrollTo } = props;

  const checkPosition = () => {
    const currentPosition = window.scrollY;

    if (currentPosition > offsets.ongoing) {
      if (position !== "ongoing") { setPosition("ongoing"); }
    } else if (currentPosition > offsets.features && currentPosition < offsets.ongoing) {
      if (position !== "features") { setPosition("features"); }
    } else if (currentPosition < offsets.features && currentPosition > offsets.cards) {
      if (position !== "cards") { setPosition("cards"); }
    } else if (currentPosition < offsets.cards) {
      if (position !== "top") { setPosition("top"); }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkPosition);
    return () => {
      window.removeEventListener('scroll', checkPosition);
    };
  }, [offsets]);

  const getNavBtnClasses = (navBtn) => {
    if (navBtn === position) {
      return `NavBtn activateBtn NavBtn${navBtn}`;
    }
    return `NavBtn NavBtn${navBtn}`;
  };

  return (
    <Fragment>
      <button className={getNavBtnClasses("top")} onClick={() => scrollTo("top")} />
      <button className={getNavBtnClasses("cards")} onClick={() => scrollTo("cards")} />
      <button className={getNavBtnClasses("features")} onClick={() => scrollTo("features")} />
      <button className={getNavBtnClasses("ongoing")} onClick={() => scrollTo("ongoing")} />
    </Fragment>
  );
};

export default navBtns;
