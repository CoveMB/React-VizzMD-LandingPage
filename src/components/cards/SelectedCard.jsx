import React from 'react';
import SelectedCardText from './SelectedCardText';

const SelectedCard = (props) => {
  const handleClick = () => {
    props.closeSelectedCard();
  };

  return (
    <div className="selectedCard" >
      <div className="makeItFlex">
        <button
          className="normalizeBtn closeCardBtn"
          onClick={handleClick}
        >
          <img className="svgClose" src="/static/images/closesvg.svg" alt="close svg" />
        </button>
        <div className="selectedCardTitle">
          <img className="svgSelectedCard" src={`/static/images/svg${props.topic}.svg`} alt={`svg ${props.topic}`} />
          {props.cardTitle(props.topic)}
        </div>
        <div className="selectedCardText">
          <SelectedCardText topic={props.topic} />
        </div>
      </div>
    </div>

  );
};

export default SelectedCard;
