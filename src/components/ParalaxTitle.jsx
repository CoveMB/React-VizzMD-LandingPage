import React from 'react';
import Plx from 'react-plx';

// An array of parallax effects to be applied - see below for detail
const parallaxData = [
  {
    start: "self",
    duration: 700,
    properties: [
      {
        startValue: 1,
        endValue: 1.3,
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
