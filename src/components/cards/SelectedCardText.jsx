import React, { Fragment } from 'react';

const selectedCardText = (props) => {
  const cardText = () => {
    switch (props.topic) {
      case "personalised":
        return (
          <p className="cardText">
            <strong className="blueTitle">> Thérapie Personnalisée:</strong>  chaque patient est unique, avec un corps unique. Personnaliser la thérapie a le potentiel d'assurer de meilleurs soins plus adaptés aux patients avec une approche holistique et si nécessaire multidisciplinaire. Personnaliser la thérapie est un défi pour les cliniques et thérapeutes, mais elle permet d'améliorer les soins de santé tout en réduisant les coûts.
          </p>
        );
      case "engagement":
        return (
          <p className="cardText"><strong className="blueTitle">> Engagement Patient: </strong>L’engagement accru du patient dans ses soins de santé contribue à en améliorer les résultats. Les patients qui sont impliqués dans leurs traitements ont tendance à avoir une progression plus rapide. L’engagement patient couplé avec la thérapie personnalisée permet de rendre le processus de soins de santé plus adapté, axé sur un patient proactif.
          </p>);
      case "mesure":
        return (
          <p className="cardText"><strong className="blueTitle">> “Outcome Mesure”: </strong> ou la mesure de résultat, consiste à déterminer l’efficacité et l’efficience d’un traitment. Une meilleure mesure des résultats permet de prendre des décisions plus éclairées sur les soins à attribuer aux patients, cela nous aide à identifier toute amélioration après une intervention. L'utilisation efficace des mesures de résultats est un aspect important des soins cliniques.</p>
        );
      default:
        return null;
    }
  };

  return (
    <Fragment>
      {cardText()}
    </Fragment>
  );
};

export default selectedCardText;
