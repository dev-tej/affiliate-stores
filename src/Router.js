import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NewLayout from "./pages/NewLayout";
import Theme1 from "./pages/Theme1";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/new" element={<NewLayout />} />
      <Route exact path="/theme1" element={<Theme1 />} />
    </Routes>
  );
};

export default Router;
