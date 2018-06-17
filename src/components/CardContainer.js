import React from 'react';
import { cardInfo } from '../items/cardInfo';
import Card from './Card';

const CardContainer = () => {
  const outputCards = cardInfo.map(card => (
    <div className="col-md-3">
      <Card img={card.img} cardText={card.cardText} />
    </div>
  ));
  return (
    <div className="container">
      <div className="cardContainer">
        <div className="row">{outputCards}</div>
      </div>
    </div>
  );
};

export default CardContainer;
