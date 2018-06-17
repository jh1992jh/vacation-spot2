import React from 'react';

const Testimonial = ({
  leftImg,
  rightText,
  rightImg,
  leftText,
  leftImgDisplay,
  rightTextDisplay,
  rightImgDisplay,
  leftTextDisplay
}) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          {leftImgDisplay === true ? (
            <img src={leftImg} style={{ maxWidth: '300px' }} alt="Image" />
          ) : null}
        </div>
        <div className="col-md-6">
          {rightTextDisplay === true ? <p>"{rightText}"</p> : null}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          {leftTextDisplay === true ? <p>"{leftText}"</p> : null}
        </div>
        <div className="col-md-6">
          {rightImgDisplay === true ? (
            <img src={rightImg} style={{ maxWidth: '300px' }} alt="Image" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
