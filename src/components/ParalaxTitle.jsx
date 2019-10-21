import React from 'react';
import Plx from 'react-plx';

const parallaxData = [
  {
    start: "self",
    duration: 600,
    easing: "easeIn",
    properties: [
      {
        startValue: 0.6,
        endValue: 1,
        property: 'scale',
      },
    ],
  },
];

const ParalaxTitle = (props) => {
  return (
    <Plx
      className="parallaxTitle"
      parallaxData={parallaxData}
    >
      <h2 className="sectionTitle">{props.title}</h2>
    </Plx>
  );
};

export default ParalaxTitle;
