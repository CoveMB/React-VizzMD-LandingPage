import React from 'react';
import Plx from 'react-plx';

const parallaxData = [
  {
    start: "self",
    duration: 400,
    easing: "easeIn",
    properties: [
      {
        startValue: 0.4,
        endValue: 0.8,
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
      <h2 className="sectionTitle" id={props.idElement}>{props.title}</h2>
    </Plx>
  );
};

export default ParalaxTitle;
