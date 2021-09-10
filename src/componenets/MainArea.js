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
    <div className="title">
      Independent Floors at DLF Gardencity,
      <span className="sub-title"> Sector 91/92, Gurugram</span>
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

      <Buttons setsidebarOpen={setsidebarOpen} sidebarOpen={sidebarOpen} />
      <Content plan={plan} isIso={selectedBtnId == "iso"} />
    </MainAreaStyle>
  );
}

export default MainArea;
