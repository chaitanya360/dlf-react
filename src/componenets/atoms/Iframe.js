import React from "react";
import "@google/model-viewer/dist/model-viewer.min.js";
function Iframe({ src }) {
  return (
    // <iframe
    //   class="model"
    //   height="100%"
    //   width="100%"
    //   src={src}
    //   frameborder="0"
    //   allowFullScreen
    //   allow="xr-spatial-tracking; gyroscope; accelerometer"
    //   scrolling="no"
    // ></iframe>
    <model-viewer
      src={`${process.env.PUBLIC_URL}/models/iso.glb`}
      alt="A 3D model of an astronaut"
      auto-rotate
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      style={{ height: "100%", width: "100%" }}
    >
      <button slot="ar-button">open ar mode</button>
    </model-viewer>
  );
}

export default Iframe;
