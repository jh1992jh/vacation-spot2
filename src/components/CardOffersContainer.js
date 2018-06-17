import React from 'react';
import { Link } from 'react-router-dom';
import CardOffer from './CardOffer';

const CardOffersContainer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-sm d-flex justify-content-around">
          <Link to="hotels-and-flights">
            <CardOffer
              icon="fas fa-plane"
              cardOfferHeadline="Flights"
              classNames1="cardOffer"
            />
          </Link>

          <Link to="hotels-and-flights">
            <CardOffer
              icon="far fa-building"
              cardOfferHeadline="Hotels"
              classNames1="cardOffer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardOffersContainer;
