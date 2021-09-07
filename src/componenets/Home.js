import React, { useState } from "react";
import { HomeStyle } from "./components.style";
import Sidebar from "./Sidebar";
import "./component.css";
import MainArea from "./MainArea";

function Home(props) {
  const list = [
    { id: "a", text: "Plan A" },
    { id: "b", text: "Plan B" },
    { id: "c", text: "Plan C" },
    { id: "d", text: "Plan D" },
  ];
  const [selectedId, setSelectedId] = useState(list[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <HomeStyle>
      <Sidebar
        list={list}
        selectedItemId={selectedId}
        setSelectedItemId={setSelectedId}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />
      <MainArea
        sidebarOpen={sidebarOpen}
        setsidebarOpen={setSidebarOpen}
        selectedItem={list.find((item) => item.id === selectedId).text}
      />
    </HomeStyle>
  );
}

export default Home;
