import React, { Fragment, useEffect, useState } from 'react';
import { useStore } from '../store/useStore';


const navBtns = (props) => {
  const [state] = useStore();
  const [position, setPosition] = useState("");
  const { scrollTo } = props;

  const checkPosition = () => {
    const currentPosition = window.scrollY;

    if (currentPosition > state.refsOffsets.ongoing - 400) {
      if (position !== "ongoing") { setPosition("ongoing"); }
    } else if (currentPosition > state.refsOffsets.features - 400
      && currentPosition < state.refsOffsets.ongoing - 400
    ) {
      if (position !== "features") { setPosition("features"); }
    } else if (currentPosition < state.refsOffsets.features - 400
      && currentPosition > state.refsOffsets.cards - 400) {
      if (position !== "cards") { setPosition("cards"); }
    } else if (currentPosition < state.refsOffsets.cards - 400) {
      if (position !== "top") { setPosition("top"); }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkPosition);
    return () => {
      window.removeEventListener('scroll', checkPosition);
    };
  }, [state, position]);

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
