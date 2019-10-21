import React from 'react';
import Plx from 'react-plx';

const OpacityParallax = (props) => {
  const parallaxData = [
    {
      start: props.nextId,
      duration: 500,
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

  return (
    <Plx
      className={props.classNameElement}
      parallaxData={parallaxData}
    >
      {props.children}
    </Plx>
  );
};

export default OpacityParallax;
