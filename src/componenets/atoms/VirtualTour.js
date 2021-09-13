import React from "react";
import { VirtualTourStyle } from "./atoms.style";
import Iframe from "./Iframe";

function VirtualTour({ src }) {
  return (
    <VirtualTourStyle>
      <Iframe src={src} />
    </VirtualTourStyle>
  );
}

export default VirtualTour;
