import React, { useState } from "react";
import { HomeStyle } from "./components.style";
import Sidebar from "./Sidebar";
import "./component.css";
import MainArea from "./MainArea";
import { BUTTONS, PLAN_LIST } from "../utilities/data";
import { SelectionContext } from "../context/SelectionContext";

function Home(props) {
  const [selectedBtnId, setSelectedBtnId] = useState("elevation");
  const [selectedPlanId, setSelectedPlanId] = useState(PLAN_LIST[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <SelectionContext.Provider
      value={{
        selectedBtnId,
        setSelectedBtnId,
        selectedPlanId,
        setSelectedPlanId,
      }}
    >
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
          setSelectedBtnId={setSelectedBtnId}
        />
      </HomeStyle>
    </SelectionContext.Provider>
  );
}

export default Home;
