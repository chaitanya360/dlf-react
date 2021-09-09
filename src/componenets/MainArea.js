import React from "react";
import Buttons from "./Buttons";
import {
  ContentStyle,
  HeaderStyle,
  MainAreaStyle,
  MenuButtonStyle,
} from "./components.style";
import ImageCarousel from "./ImageCarousel";

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

const Content = ({ selectedPlan, selectedBtnId }) => (
  <ContentStyle>
    <ImageCarousel />
  </ContentStyle>
);

const Header = ({ setsidebarOpen, sidebarOpen, selectedPlan }) => (
  <HeaderStyle>
    <MenuButton setsidebarOpen={setsidebarOpen} sidebarOpen={sidebarOpen} />
    <div className="title">Garden City Phase 2 C</div>
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
