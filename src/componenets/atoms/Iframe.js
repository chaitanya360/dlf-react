import React from "react";

function Iframe({ src }) {
  return (
    <iframe
      class="model"
      height="100%"
      width="100%"
      src={src}
      frameborder="0"
      allowFullScreen
      allow="xr-spatial-tracking; gyroscope; accelerometer"
      scrolling="no"
    ></iframe>
  );
}

export default Iframe;
