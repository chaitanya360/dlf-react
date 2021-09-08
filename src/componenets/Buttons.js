import React, { useState } from "react";
import { ButtonsStyle } from "./components.style";

function Buttons({ BUTTONS, selectedBtnId, setSelectedBtnId }) {
  const Button = ({ text, selected, id }) => (
    <button
      id={id}
      onClick={() => setSelectedBtnId(id)}
      className={selected ? "btn-selected" : "btn"}
    >
      {text}
    </button>
  );

  return (
    <ButtonsStyle>
      {BUTTONS.map((btn) => (
        <Button
          text={btn.text}
          key={btn.id}
          id={btn.id}
          selected={selectedBtnId === btn.id}
        />
      ))}
    </ButtonsStyle>
  );
}

export default Buttons;
