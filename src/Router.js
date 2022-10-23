import React from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const Router = () => {
  return (
    <Routes>
        <Route exact path='/' element={<LandingPage />} />
    </Routes>
  )
}

export default Router;
