import SideBar from "components/SideBar";
import React from "react";
import Categories from "./Categories";
import HighlightSection from "./HighlightSection";
import "./index.css";

const DemoPurpose = () => {
  return (
    <div id="demoContainer">
      <HighlightSection />
      <Categories />
      <SideBar />
    </div>
  );
};

export default DemoPurpose;
