import React from 'react';

const CardOffer = ({ icon, cardOfferHeadline, classNames1 }) => {
  return (
    <div>
      <div className={classNames1}>
        <div className="circle">
          <i className={icon} />
        </div>
        <div className="center">
          <div className="leftLine" />
          <p className="offerHeadline">{cardOfferHeadline}</p>
          <div className="rightLine" />
        </div>
      </div>
    </div>
  );
};

export default CardOffer;
