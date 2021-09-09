import React from "react";
import { CarouselBodyStyle } from "./atoms.style";

function CarouselBody({ src }) {
  return (
    <CarouselBodyStyle>
      <div className="carousel-img-wrapper">
        <img
          height="100%"
          src={`${process.env.PUBLIC_URL}/images/plan-a/${src}.jpg`}
          className="carousel-img"
        />
      </div>
      <div className="details">
        <div className="title">Plan A</div>
        <div className="info">
          {" "}
          Size
          <span className="value">1234 Sq ft.</span>
        </div>
        <div className="info">
          Street
          <span className="value">G17</span>
        </div>

        <div className="info">
          Plot No.
          <span className="value">19</span>
        </div>
      </div>
    </CarouselBodyStyle>
  );
}

export default CarouselBody;
