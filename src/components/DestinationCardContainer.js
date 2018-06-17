import React from 'react';
import { Link } from 'react-router-dom';
import DestinationCard from './DestinationCard';
import { vacationItems } from '../items/vacationItems';

const DestinationCardContainer = () => {
  const outputItems = vacationItems.slice(0, 3).map(vacationItem => (
    <div className="col-md-4">
      <Link to="destinations">
        <DestinationCard
          key={vacationItem.id}
          img={vacationItem.img}
          location={vacationItem.location}
          type={vacationItem.type}
          country={vacationItem.country}
        />
      </Link>
    </div>
  ));
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1 className="destinationsHeadline">Destinations</h1>
        </div>
      </div>
      <div className="row">{outputItems}</div>
      <div className="center">
        <Link to="/destinations">
          <button className="btn destinationButton">
            Click Here To See All Of Out Destinations{' '}
            <i className="far fa-arrow-alt-circle-right" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCardContainer;
