import React, { useState } from 'react';
import './Carousel.css';
import image1 from '../../../assets/carsoul/8.png'
import image2 from '../../../assets/carsoul/9.png'
import image3 from '../../../assets/carsoul/10.png'
import image4 from '../../../assets/carsoul/11.png'
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3, image4];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button className="prev" style={{padding:'0px', background :'transparent', border: 'none', outline : 'none', color: 'black' , fontSize : '30px'}} onClick={goToPrevious}>
          ❮
        </button>
        <button className="next"  style={{padding:'0px', background :'transparent', border: 'none', outline : 'none', color: 'black' , fontSize : '30px'}} onClick={goToNext}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
