import React, { useContext, useState } from "react";
import { SelectionContext } from "../context/SelectionContext";
import { BUTTONS } from "../utilities/data";
import { ButtonsStyle } from "./components.style";

const Button = ({ text, selected, setSelectedBtnId, id }) => (
  <button
    id={id}
    onClick={() => setSelectedBtnId(id)}
    className={selected ? "btn-selected" : "btn"}
  >
    {text}
  </button>
);

function Buttons() {
  const { setSelectedBtnId, selectedBtnId, selectedPlanId } =
    useContext(SelectionContext);

  return (
    <ButtonsStyle>
      {selectedPlanId !== "master" &&
        BUTTONS.map((btn) => (
          <Button
            text={btn.text}
            key={btn.id}
            id={btn.id}
            selected={selectedBtnId === btn.id}
            setSelectedBtnId={setSelectedBtnId}
          />
        ))}
    </ButtonsStyle>
  );
}

export default Buttons;
