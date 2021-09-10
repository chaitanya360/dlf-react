import React, { useContext, useEffect } from "react";
import { SelectionContext } from "../context/SelectionContext";
import { PLAN_LIST } from "../utilities/data";
import Buttons from "./Buttons";
import {
  ContentStyle,
  HeaderStyle,
  MainAreaStyle,
  MenuButtonStyle,
} from "./components.style";
import PlanCard from "./molecules/PlanCard";

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

const Content = ({ plan, isIso }) => (
  <ContentStyle>
    {!isIso ? (
      plan.id === "master" ? (
        <img
          src={`${process.env.PUBLIC_URL}/images/${plan.imageSrc}.jpg`}
          className="master-img"
        />
      ) : (
        <PlanCard plan={plan} />
      )
    ) : plan.id === "b" || plan.id === "c" ? (
      <img src={plan.isoSrc} className="iso-img" />
    ) : (
      <iframe
        class="model"
        height="100%"
        width="100%"
        id="6b0ec302-ba89-4dbf-99d5-6fcfe3d661b2"
        src={plan.isoSrc}
        frameborder="0"
        allowFullScreen
        allow="xr-spatial-tracking; gyroscope; accelerometer"
        scrolling="no"
      ></iframe>
    )}
  </ContentStyle>
);

const Header = ({ setsidebarOpen, sidebarOpen }) => (
  <HeaderStyle>
    <MenuButton setsidebarOpen={setsidebarOpen} sidebarOpen={sidebarOpen} />
    <div className="title">
      Independent Floors at DLF Gardencity, Sector 91/92, Gurugram
    </div>
  </HeaderStyle>
);

function MainArea({ setsidebarOpen, sidebarOpen }) {
  const { selectedPlanId, selectedBtnId, setSelectedBtnId } =
    useContext(SelectionContext);
  const plan = PLAN_LIST.find((plan) => plan.id == selectedPlanId);
  useEffect(() => {
    if (selectedPlanId === "master") setSelectedBtnId("elevation");
  }, [selectedPlanId]);
  return (
    <MainAreaStyle>
      <Header setsidebarOpen={setsidebarOpen} sidebarOpen={sidebarOpen} />
      <Content plan={plan} isIso={selectedBtnId == "iso"} />
      <Buttons />
    </MainAreaStyle>
  );
}

export default MainArea;
