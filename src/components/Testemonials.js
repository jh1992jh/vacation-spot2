import React from 'react';
import Testimonial from './Testimonial';

const Testimonials = () => {
  return (
    <div className="container testimonials">
      <Testimonial
        leftImgDisplay={true}
        leftImg="https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        rightTextDisplay={true}
        rightText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus nulla obcaecati"
        rightImgDisplay={true}
        rightImg="https://images.pexels.com/photos/936018/pexels-photo-936018.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        leftTextDisplay={true}
        leftText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, adipisci doloribus odio quis eius ex rerum nesciunt repudiandae!"
      />
    </div>
  );
};

export default Testimonials;
