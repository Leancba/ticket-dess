'use client';

import React, { useState } from 'react';
import './styles.css';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import useBreakpoint from '@/hooks/useBreakpoint'; 

const images = [
  'https://www.todopass.com.ar/img/cms/photo_4958480430189882937_y.jpg',
  'https://www.todopass.com.ar/img/cms/photo_5042175405620047174_y.jpg',
  'https://www.todopass.com.ar/img/cms/photo_5080409616805900051_y.jpg',
  'https://www.todopass.com.ar/img/cms/photo_5179404966551465201_y.jpg'
];

const mobileImages = [
  'https://www.todopass.com.ar/img/cms/mobile%20slider/photo_4960732230003568929_y.jpg',
  'https://www.todopass.com.ar/img/cms/mobile%20slider/photo_5080409616805900052_y.jpg',
  'https://www.todopass.com.ar/img/cms/mobile%20slider/photo_5042175405620047175_y.jpg',
  'https://www.todopass.com.ar/img/cms/mobile%20slider/photo_5179404966551465202_y.jpg',
];

const ImageCarousel = () => {
  const breakpoint = useBreakpoint();
  const imageSet = breakpoint === 'XS' || breakpoint === 'S' ? mobileImages : images;

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === imageSet.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? imageSet.length - 1 : prev - 1));
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {imageSet.map((img, index) => (
          <div className="carousel-item" key={index}>
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <ArrowBackIos className="arrow left" onClick={prevSlide} />
      <ArrowForwardIos className="arrow right" onClick={nextSlide} />
      <div className="dots">
        {imageSet.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
