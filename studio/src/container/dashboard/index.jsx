import React from 'react';
import { useLocation } from "react-router";
import Dashboard from './dashboardLight/dashboard';
import Homepage2 from './dashboardDark';

function DashboardMain() {

    const location = useLocation();

    if (!location.search.includes('dark')) {
        return <Dashboard />
    }else{
        return <Homepage2 /> 
    }

}

export default DashboardMain;