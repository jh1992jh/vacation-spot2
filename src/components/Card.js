import React from 'react';

const Card = ({ img, cardText }) => {
  return (
    <div className="card">
      <img src={img} alt="A vacation photo" />
      <hr />
      <p>{cardText}</p>
    </div>
  );
};

export default Card;
