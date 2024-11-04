// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import img1 from './Images/Carousel/1.jpg';
import img2 from './Images/Carousel/2.jpeg';
import img3 from './Images/Carousel/3.jpeg';
import img4 from './Images/Carousel/4.jpg';

const Carousel = () => {
 const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  }; 

  return (
    <Slider {...settings}>
      <div>
        <img src={img1} alt="Slide 1" className="carousel-image" />
      </div>
      <div>
        <img src={img2} alt="Slide 2" className="carousel-image" />
      </div>
      <div>
        <img src={img3} alt="Slide 3" className="carousel-image" />
      </div>
      <div>
        <img src={img4} alt="Slide 4" className="carousel-image" />
      </div>
    </Slider>
  );
};


export default Carousel;
