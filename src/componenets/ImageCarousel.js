import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselBody from "./atoms/CarouselBody";
import { NextButton, PrevButton } from "./atoms/CarouselNav";

function ImageCarousel(props) {
  const images = ["1", "2"];
  return (
    <Carousel
      className="carousel"
      autoPlay={false}
      showIndicators={false}
      showThumbs={false}
      centerMode={false}
      showStatus={false}
      swipeable={false}
      renderArrowNext={(clickHandler, hasNext) => (
        <NextButton clickHandler={clickHandler} hasNext={hasNext} />
      )}
      renderArrowPrev={(clickHandler, hasPrev) => (
        <PrevButton clickHandler={clickHandler} hasPrev={hasPrev} />
      )}
    >
      {images.map((src) => (
        <CarouselBody src={src} />
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
