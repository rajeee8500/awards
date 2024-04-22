import React, { useState, useEffect, useRef } from "react";
import "./ImageSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../images/image-1.jpg";
import image2 from "../../images/image-2.jpg";
import image3 from "../../images/image-3.jpg";
import image4 from "../../images/image-4.jpeg";
import image5 from "../../images/image-5.jpeg";

const ImageSlider = ({ autoPlayInterval }) => {
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const sliderRef = useRef(null);

  const slides = [
    { url: image1, title: "padma awards" },
    { url: image2, title: "padma awards" },
    { url: image3, title: "Nari shakti puraskar awards" },
    { url: image4, title: "padma awards" },
    { url: image5, title: "padma awards" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAutoPlayPaused) {
        sliderRef.current.slickNext();
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval, isAutoPlayPaused]);

  const goToPrevious = () => {
    sliderRef.current.slickPrev();
    setIsAutoPlayPaused(true);
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
    setIsAutoPlayPaused(true);
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
    setIsAutoPlayPaused(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 100000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    afterChange: () => setIsAutoPlayPaused(false),
  };

  return (
    <div>
      <Slider ref={sliderRef} {...settings} className="slider">
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.url} alt={slide.title} />
            <p>{slide.title}</p>
          </div>
        ))}
      </Slider>
      <h1 className="text">
        GOVERNMENT OF INDIA RECOGNIZES PEOPLE WHO HAVE SHOWN EXCELLENCE IN THEIR
        FIELD AND DEDICATION FOR SERVICE TO SOCIETY
      </h1>
    </div>
  );
};

export default ImageSlider;
