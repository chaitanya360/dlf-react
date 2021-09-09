import React, { useState } from "react";
import { HomeStyle } from "./components.style";
import Sidebar from "./Sidebar";
import "./component.css";
import MainArea from "./MainArea";

function Home(props) {
  const PLAN_LIST = [
    {
      id: "a",
      text: "Plan A",
      url: {
        elevation:
          "https://www.vectary.com/viewer/v1/?model=d87950bb-571c-4fba-ac24-4b33d43be0a3&env=studio3",
        iso: "https://www.vectary.com/viewer/v1/?model=38c02e98-5248-42f1-96af-bebd88cc0e8b&env=studio3",
        virtual: "https://makevr.pro/Dlf_tour/",
      },
    },
    {
      id: "b",
      text: "Plan B",
      url: {
        elevation:
          "https://www.vectary.com/viewer/v1/?model=d87950bb-571c-4fba-ac24-4b33d43be0a3&env=studio3",
        iso: "https://www.vectary.com/viewer/v1/?model=38c02e98-5248-42f1-96af-bebd88cc0e8b&env=studio3",
        virtual: "https://makevr.pro/Dlf_tour/",
      },
    },
    {
      id: "c",
      text: "Plan C",
      url: {
        elevation:
          "https://www.vectary.com/viewer/v1/?model=d87950bb-571c-4fba-ac24-4b33d43be0a3&env=studio3",
        iso: "https://www.vectary.com/viewer/v1/?model=38c02e98-5248-42f1-96af-bebd88cc0e8b&env=studio3",
        virtual: "https://makevr.pro/Dlf_tour/",
      },
    },
    {
      id: "d",
      text: "Plan D",
      url: {
        elevation:
          "https://www.vectary.com/viewer/v1/?model=d87950bb-571c-4fba-ac24-4b33d43be0a3&env=studio3",
        iso: "https://www.vectary.com/viewer/v1/?model=38c02e98-5248-42f1-96af-bebd88cc0e8b&env=studio3",
        virtual: "https://makevr.pro/Dlf_tour/",
      },
    },
  ];

  const BUTTONS = [
    { text: "ELEVATION", id: "elevation" },
    { text: "ISO", id: "iso" },
  ];

  const [selectedBtnId, setSelectedBtnId] = useState("elevation");
  const [selectedPlanId, setSelectedPlanId] = useState(PLAN_LIST[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <HomeStyle>
      <Sidebar
        list={PLAN_LIST}
        selectedItemId={selectedPlanId}
        setSelectedItemId={setSelectedPlanId}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />
      <MainArea
        sidebarOpen={sidebarOpen}
        setsidebarOpen={setSidebarOpen}
        selectedPlan={PLAN_LIST.find((plan) => plan.id === selectedPlanId)}
        BUTTONS={BUTTONS}
        selectedBtnId={selectedBtnId}
        setSelectedBtnId={setSelectedBtnId}
      />
    </HomeStyle>
  );
}

export default Home;
