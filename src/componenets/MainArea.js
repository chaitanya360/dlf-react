import React from "react";
import Buttons from "./Buttons";
import {
  ContentStyle,
  HeaderStyle,
  MainAreaStyle,
  SelectPlanButtonStyle,
} from "./components.style";

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

const SelectPlanButton = ({ setsidebarOpen, sidebarOpen }) => (
  <SelectPlanButtonStyle
    onClick={() => setsidebarOpen(true)}
    style={{ opacity: sidebarOpen ? 0 : 1 }}
  >
    <MenuIcon color="white" />
  </SelectPlanButtonStyle>
);

const Content = ({ selectedPlan, selectedBtnId }) => (
  <ContentStyle>
    <iframe
      className="model"
      height="100%"
      width="100%"
      id="6b0ec302-ba89-4dbf-99d5-6fcfe3d661b2"
      src={selectedPlan.url[selectedBtnId]}
      allowFullScreen
      allow="xr-spatial-tracking; gyroscope; accelerometer"
      scrolling="no"
      frameBorder="none"
      title={selectedPlan.text}
    ></iframe>
  </ContentStyle>
);

const Header = ({ setsidebarOpen, sidebarOpen, selectedPlan }) => (
  <HeaderStyle>
    <SelectPlanButton
      setsidebarOpen={setsidebarOpen}
      sidebarOpen={sidebarOpen}
    />
    <div className="title">{selectedPlan.text}</div>
  </HeaderStyle>
);

function MainArea({
  setsidebarOpen,
  sidebarOpen,
  selectedPlan,
  BUTTONS,
  selectedBtnId,
  setSelectedBtnId,
}) {
  return (
    <MainAreaStyle>
      <Header
        selectedPlan={selectedPlan}
        setsidebarOpen={setsidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      <Content selectedPlan={selectedPlan} selectedBtnId={selectedBtnId} />
      <Buttons
        BUTTONS={BUTTONS}
        selectedBtnId={selectedBtnId}
        setSelectedBtnId={setSelectedBtnId}
      />
    </MainAreaStyle>
  );
}

export default MainArea;
