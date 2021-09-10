import React, { useState } from "react";
import SideBar from "react-sidebar";
import { MenuStyle, SelectPlanBtnStyle } from "./components.style";

const sidebarStyle = {
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
  },
  sidebar: {
    zIndex: 3,
    position: "absolute",
    top: 0,
    bottom: 0,
    transition: "transform .3s ease-out",
    WebkitTransition: "-webkit-transform .3s ease-out",
    willChange: "transform",
    backgroundColor: "var(--primary)",
    padding: "1rem 0",
    overflowY: "auto",
    minWidth: "150px",
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    transition: "left .3s ease-out, right .3s ease-out",
  },
  overlay: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: "hidden",
    transition: "opacity .3s ease-out, visibility .3s ease-out",
    backgroundColor: "rgba(0,0,0,.1)",
  },
  dragHandle: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    bottom: 0,
  },
};

function Sidebar({ list, selectedItemId, setSelectedItemId, open, setOpen }) {
  const ListItem = ({ selected, text, id }) => (
    <li
      onClick={() => {
        setSelectedItemId(id);
        setOpen(false);
      }}
      id={id}
      style={{
        backgroundColor: selected ? "var(--secondary)" : "inherit",
        color: selected ? "black" : "white",
      }}
    >
      {text}
    </li>
  );

  const Menu = (
    <MenuStyle>
      <>
        <span className="close-btn" onClick={() => setOpen(false)}>
          X
        </span>
        {list.map((item) => (
          <ListItem
            text={item.title}
            id={item.id}
            key={item.id}
            selected={item.id === selectedItemId}
          />
        ))}
      </>
    </MenuStyle>
  );

  return (
    <SideBar
      sidebar={Menu}
      open={open}
      onSetOpen={setOpen}
      styles={sidebarStyle}
    >
      sidebar
    </SideBar>
  );
}

export default Sidebar;
