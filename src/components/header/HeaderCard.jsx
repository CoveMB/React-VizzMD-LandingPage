import React from 'react';
import { Animated } from "react-animated-css";
import BrandWhite from './BrandWhite';
import HeaderCardContent from './HeaderCardContent';


const HeaderCard = () => {
  return (
    <Animated animationIn="fadeInLeft" animationOut="fadeOut" isVisible>
      <div
        className="header-card"
      >
        <div className="gradient-square">
          <BrandWhite />
        </div>
        <HeaderCardContent />
      </div>
    </Animated>
  );
};

export default HeaderCard;
