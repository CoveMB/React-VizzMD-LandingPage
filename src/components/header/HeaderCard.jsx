import React from 'react';
import Plx from 'react-plx';
import { RefContext } from '../context/RefContext';
import BrandWhite from './BrandWhite';
import HeaderCardContent from './HeaderCardContent';


const parallaxData = [
  {
    start: "self",
    duration: 600,
    easing: "easeIn",
    properties: [
      {
        startValue: 0,
        endValue: 8,
        property: 'translateX',
      },
    ],
  },
];

const HeaderCard = () => {
  return (
    <Plx
      className="parallaxTitle"
      parallaxData={parallaxData}
    >
      <div
        className="header-card scrollbarxcustom"
      >
        <div className="gradient-square">
          <BrandWhite />
        </div>
        <HeaderCardContent />
      </div>
    </Plx>
  );
};

export default HeaderCard;
