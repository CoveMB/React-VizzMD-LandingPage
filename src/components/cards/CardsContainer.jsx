import React, { Fragment, useState } from 'react';
import { Animated } from "react-animated-css";
import SelectedCard from './SelectedCard';
import Card from './Card';

const cardsContainer = (props) => {
  const [selectedCard, setSelectedCard] = useState({ isSelected: false, selected: false });

  const cardTitle = (topic) => {
    switch (topic) {
      case "personalised":
        return <h2 className="cardTitle">Thérapie Personalisée</h2>;
      case "engagement":
        return <h2 className="cardTitle">Engagement Patient</h2>;
      case "mesure":
        return <h2 className="cardTitle">"Outcome Mesure"</h2>;
      default:
        return null;
    }
  };

  const getClassSelected = () => {
    if (!selectedCard.isSelected) {
      return "displayNone";
    }
    return "cardBox makeItFlex";
  };

  const getClassCards = () => {
    if (selectedCard.isSelected) {
      return "displayNone";
    }
    return "cardBox makeItFlex";
  };

  const selectCard = (topic) => {
    setSelectedCard({ isSelected: true, selected: topic });
    props.scrollTo("cards");
  };

  const closeSelectedCard = () => {
    setSelectedCard({ isSelected: false, selected: false });
  };

  return (
    <Fragment>
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={selectedCard.isSelected}>
        <div className={getClassSelected()}>
          <SelectedCard
            topic={selectedCard.selected}
            closeSelectedCard={closeSelectedCard}
            cardTitle={cardTitle}
          />
        </div>
      </Animated>
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={!selectedCard.isSelected}>
        <div className={getClassCards()}>
          <Card topic="personalised" selectCard={selectCard} cardTitle={cardTitle} />
          <Card topic="engagement" selectCard={selectCard} cardTitle={cardTitle} />
          <Card topic="mesure" selectCard={selectCard} cardTitle={cardTitle} />
        </div>
      </Animated>
    </Fragment>
  );
};

export default cardsContainer;
