import React from 'react';
import { Slide } from 'react-slideshow-image';
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';

const slideImages = [
    pic1,
    pic2,
    pic3
];
 
const properties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  //indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
};
export default Slideshow;