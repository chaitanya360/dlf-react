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
    zIndex: 2,
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
    <li id={id} style={{ backgroundColor: selected ? "purple" : "inherit" }}>
      {text}
    </li>
  );

  const Menu = (
    <MenuStyle
      onClick={(e) => {
        setSelectedItemId(e.target.id);
        setOpen(false);
      }}
    >
      {list.map((item) => (
        <ListItem
          text={item.text}
          id={item.id}
          selected={item.id === selectedItemId}
        />
      ))}
    </MenuStyle>
  );

  return (
    <SideBar
      sidebar={Menu}
      open={open}
      onSetOpen={setOpen}
      styles={sidebarStyle}
    />
  );
}

export default Sidebar;
