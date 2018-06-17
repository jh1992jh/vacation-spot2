import React from 'react';

const HAFcard = ({ className1, text, number, text2 }) => {
  return (
    <div className="hafCard p-5">
      <i className={className1} />

      <div className="hafText">
        <h2>{text}</h2>
        <p>{text2}</p>
        <h3>{number}</h3>
      </div>
    </div>
  );
};

export default HAFcard;
