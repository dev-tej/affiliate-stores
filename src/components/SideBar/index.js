import React, { useState, useEffect, useRef } from "react";
import { HamburgerButtonContainer, Navbar } from "./Sidebar.components";

const SideBar = () => {
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }
      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <div>
      <HamburgerButtonContainer>
        <i
          className="fa-solid fa-cart-shopping"
          onClick={() => toggleDrawer(true)}
        ></i>
      </HamburgerButtonContainer>
      <Navbar.Items ref={drawerRef} openDrawer={openDrawer}></Navbar.Items>
    </div>
  );
};

export default SideBar;
