import React from 'react';

const card = (props) => {
  const handleClick = () => {
    props.selectCard(props.topic);
  };

  return (
    <div
      className="card"
    >
      <img className="svgCard" src={`/static/images/svg${props.topic}.svg`} alt={`svg ${props.topic}`} />
      {props.cardTitle(props.topic)}
      <buttom
        onClick={handleClick}
        className="normalizeBtn"
      >
        <img className="svgDots" src="/static/images/svgDots.svg" alt="svg dots" />
      </buttom>
    </div>
  );
};

export default card;
