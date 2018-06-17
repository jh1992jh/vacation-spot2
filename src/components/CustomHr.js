import React from 'react';

const CustomHr = ({
  className1,
  className2,
  className3,
  className4,
  displayText,
  text
}) => {
  return (
    <div className="container">
      <div className="center">
        <div className={className1} />
        <div className={className4}>
          {displayText === true ? <h2>{text}</h2> : null}
          <i className={className3} />
        </div>
        <div className={className2} />
      </div>
    </div>
  );
};

export default CustomHr;
