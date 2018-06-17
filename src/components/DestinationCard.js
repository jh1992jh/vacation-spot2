import React from 'react';

const DestinationCard = ({ img, location, type, country, key }) => {
  return (
    <div className="destinationCard" key={key}>
      <img src={img} alt="A redundant alt attribute" />
      <br />
      <h2>{location}</h2>
      <br />
      <h3>{type}</h3>
      <br />
      <h2>{country}</h2>
    </div>
  );
};

export default DestinationCard;
