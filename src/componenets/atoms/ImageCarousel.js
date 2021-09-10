import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { NextButton, PrevButton } from "./CarouselNav";
import { ImageCarouselStyle } from "./atoms.style";
import Slider from "react-slick";

function ImageCarousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [loading, setLoading] = useState(true);

  return (
    <ImageCarouselStyle>
      <img
        onLoad={() => setLoading(false)}
        style={{ opacity: !loading ? "1" : "0" }}
        src={images[0]}
        className="carousel-img"
      />
      <span
        className="loader carousel-img"
        style={{ display: loading ? "block" : "none" }}
      />
    </ImageCarouselStyle>
  );
}

export default ImageCarousel;
