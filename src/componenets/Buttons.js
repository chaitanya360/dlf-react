import React, { useContext, useState } from "react";
import { SelectionContext } from "../context/SelectionContext";
import { BUTTONS } from "../utilities/data";
import { ButtonsStyle, MenuButtonStyle } from "./components.style";

const Button = ({ text, selected, setSelectedBtnId, id }) => (
  <button
    id={id}
    onClick={() => setSelectedBtnId(id)}
    className={selected ? "btn-selected" : "btn"}
  >
    {text}
  </button>
);

const MenuIcon = ({ color = "black" }) => (
  <svg width="16" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="menu-icon">
      <line
        id="Line 1"
        x1="1"
        y1="1"
        x2="15"
        y2="1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        id="Line 2"
        x1="1"
        y1="6"
        x2="15"
        y2="6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        id="Line 3"
        x1="1"
        y1="11"
        x2="15"
        y2="11"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

const MenuButton = ({ setsidebarOpen, sidebarOpen }) => (
  <MenuButtonStyle
    onClick={() => setsidebarOpen(true)}
    style={{ opacity: sidebarOpen ? 0 : 1 }}
  >
    <MenuIcon color="white" />
  </MenuButtonStyle>
);

function Buttons({ setsidebarOpen, sidebarOpen, setShowDisclaimer }) {
  const { setSelectedBtnId, selectedBtnId, selectedPlanId } =
    useContext(SelectionContext);

  return (
    <ButtonsStyle>
      <MenuButton setsidebarOpen={setsidebarOpen} sidebarOpen={sidebarOpen} />
      <div className="view-btn-container">
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
      </div>
      <div className="disclaimer-icon" onClick={() => setShowDisclaimer(true)}>
        !
      </div>
    </ButtonsStyle>
  );
}

export default Buttons;
