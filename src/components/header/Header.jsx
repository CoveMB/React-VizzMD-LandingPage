import React from 'react';
import Plx from 'react-plx';
import HeaderCard from './HeaderCard';
import HeaderWave from './HeaderWave';

// An array of parallax effects to be applied - see below for detail
const parallaxData = [
  {
    start: 300,
    duration: 400,
    easing: "linear",
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'opacity',
      },
    ],
  },
];

const Header = () => {
  return (
    <Plx
      className="parallaxTitle"
      parallaxData={parallaxData}
    >
      <HeaderWave />
      <HeaderCard />
      <div
        className="header-background"
      />
    </Plx>

  );
};

export default Header;
