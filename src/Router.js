import React from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NewLayout from "./pages/NewLayout"

const Router = () => {
  return (
    <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/new' element={<NewLayout />} />
    </Routes>
  )
}

export default Router;
