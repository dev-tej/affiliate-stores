import React from "react";
import { Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
import NewLayout from "./pages/NewLayout";
import Theme1 from "./pages/Theme1";
import DemoPurpose from "./pages/Demo";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<NewLayout />} />
      {/* <Route exact path="/new" element={<NewLayout />} /> */}
      <Route exact path="/:brand/store/:slug/:username" element={<Theme1 />} />
      <Route exact path="/demo-shopify-store" element={<DemoPurpose />} />
    </Routes>
  );
};

export default Router;
