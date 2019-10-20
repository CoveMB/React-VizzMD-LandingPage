import React, { Fragment, useState } from 'react';
import { Animated } from "react-animated-css";
import SelectedCard from './SelectedCard';
import Card from './Card';

const CardsContainer = () => {
  const [selectedCard, setSelectedCard] = useState(false);

  const cardTitle = (topic) => {
    switch (topic) {
      case "personalised":
        return <h1 className="cardTitle">Thérapie Personalisée</h1>;
      case "engagement":
        return <h1 className="cardTitle">Engagement Patient</h1>;
      case "mesure":
        return <h1 className="cardTitle">"Outcome Mesure"</h1>;
      default:
        return null;
    }
  };

  const getClassSelected = () => {
    if (!selectedCard) {
      return "displayNone";
    }
    return "cardBox makeItFlex";
  };

  const getClassCards = () => {
    if (selectedCard) {
      return "displayNone";
    }
    return "cardBox makeItFlex";
  };

  const selectCard = (topic) => {
    setSelectedCard(topic);
  };

  const closeSelectedCard = () => {
    setSelectedCard(false);
  };

  return (
    <Fragment>
      <h1 className="cardsTitle">Les enjeux des soins de santé aujourd'hui</h1>
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={selectedCard}>
        <div className={getClassSelected()}>
          <SelectedCard
            topic={selectedCard}
            closeSelectedCard={closeSelectedCard}
            cardTitle={cardTitle}
          />
        </div>
      </Animated>
      <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={!selectedCard}>
        <div className={getClassCards()}>
          <Card topic="personalised" selectCard={selectCard} cardTitle={cardTitle} />
          <Card topic="engagement" selectCard={selectCard} cardTitle={cardTitle} />
          <Card topic="mesure" selectCard={selectCard} cardTitle={cardTitle} />
        </div>
      </Animated>
    </Fragment>
  );
};

export default CardsContainer;
