import React, { useRef } from "react";
import { DisclaimerStyle } from "./atoms.style";

function Disclaimer({ setShow }) {
  return (
    <DisclaimerStyle>
      <div className="body">
        <div className="close-btn-container">
          <span className="close-btn" onClick={() => setShow(false)}>
            X
          </span>
        </div>
        <img src={`${process.env.PUBLIC_URL}/images/disclaimer.png`} />
      </div>
    </DisclaimerStyle>
  );
}

export default Disclaimer;
