import React, { useContext, useEffect, useState } from "react";
import { SelectionContext } from "../context/SelectionContext";
import { PLAN_LIST } from "../utilities/data";
import Disclaimer from "./atoms/Disclaimer";
import Iframe from "./atoms/Iframe";
import VirtualTour from "./atoms/VirtualTour";
import Buttons from "./Buttons";
import {
  ContentStyle,
  HeaderStyle,
  MainAreaStyle,
  MenuButtonStyle,
} from "./components.style";
import PlanCard from "./molecules/PlanCard";

const Content = ({ plan, selectedBtnId }) => {
  switch (plan.id) {
    case "master":
      return (
        <img
          src={`${process.env.PUBLIC_URL}/images/${plan.imageSrc}.jpg`}
          className="master-img"
        />
      );
    case "virtual-tour":
      return <VirtualTour src={plan.src} />;

    default:
      switch (selectedBtnId) {
        case "iso":
          return <Iframe src={plan.isoSrc} />;
        case "elevation":
          return <PlanCard plan={plan} />;
      }
  }
};

const Header = ({ setsidebarOpen, sidebarOpen }) => (
  <HeaderStyle>
    <div className="title">
      Independent Floors at DLF Gardencity,
      <span className="sub-title"> Sector 91/92, Gurugram</span>
    </div>
  </HeaderStyle>
);

function MainArea({ setsidebarOpen, sidebarOpen }) {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const { selectedPlanId, selectedBtnId, setSelectedBtnId } =
    useContext(SelectionContext);
  const plan = PLAN_LIST.find((plan) => plan.id == selectedPlanId);

  return (
    <MainAreaStyle>
      <Header setsidebarOpen={setsidebarOpen} sidebarOpen={sidebarOpen} />
      <Buttons
        setShowDisclaimer={setShowDisclaimer}
        setsidebarOpen={setsidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      <ContentStyle>
        <Content plan={plan} selectedBtnId={selectedBtnId} />
      </ContentStyle>
      {showDisclaimer && <Disclaimer setShow={setShowDisclaimer} />}
    </MainAreaStyle>
  );
}

export default MainArea;
