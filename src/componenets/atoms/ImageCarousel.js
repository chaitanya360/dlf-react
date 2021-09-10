import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { NextButton, PrevButton } from "./CarouselNav";
import { ImageCarouselStyle } from "./atoms.style";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageCarousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [loading, setLoading] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowCarousel(true), 100);
  }, [images]);

  return (
    <ImageCarouselStyle>
      {showCarousel && (
        <Carousel
          infiniteLoop
          autoPlay
          stopOnHover
          showThumbs={false}
          renderArrowNext={(clickHandler, hasNext) => (
            <NextButton clickHandler={clickHandler} hasNext={hasNext} />
          )}
          renderArrowPrev={(clickHandler, hasPrev) => (
            <PrevButton clickHandler={clickHandler} hasPrev={hasPrev} />
          )}
        >
          {images.map((src) => (
            <div className="carousel-img-wrapper">
              <img
                // onLoad={() => setLoading(false)}
                // style={{ opacity: !loading ? "1" : "0" }}
                height="auto"
                width="100%"
                src={src}
                className="carousel-img"
              />
            </div>
          ))}
        </Carousel>
      )}
      {/* <span
        className="loader carousel-img"
        style={{ display: loading ? "block" : "none" }}
      /> */}
    </ImageCarouselStyle>
  );
}

export default ImageCarousel;
