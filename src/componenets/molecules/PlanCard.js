import React from "react";
import ImageCarousel from "../atoms/ImageCarousel";
import { PlanCardStyle } from "./molecules.style";

function PlanCard({ plan }) {
  const images = plan.imageSrc.map(
    (img) => `${process.env.PUBLIC_URL}/images/plan-${plan.id}/${img}.jpg`
  );

  return (
    <PlanCardStyle>
      <ImageCarousel images={images} />
      <div className="details">
        <div className="title">{plan.title}</div>
        <div className="info">
          {" "}
          Size
          <span className="value">{plan.size}</span>
        </div>
        {plan.street_plot.map((info) => (
          <div className="info">
            Street {info[0]}
            <span className="value">Plot {info[1]}</span>
          </div>
        ))}
      </div>
    </PlanCardStyle>
  );
}

export default PlanCard;
