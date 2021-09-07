import React from "react";
import { MainAreaStyle } from "./components.style";

function MainArea({ setsidebarOpen, sidebarOpen, selectedItem }) {
  return (
    <MainAreaStyle>
      <div
        className="select-plan-btn"
        onClick={() => setsidebarOpen(true)}
        style={{ opacity: sidebarOpen ? 0 : 1 }}
      >
        Select Plan
      </div>
      <h3>{selectedItem}</h3>
    </MainAreaStyle>
  );
}

export default MainArea;
