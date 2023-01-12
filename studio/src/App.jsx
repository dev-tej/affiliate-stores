import React from 'react';
import './App.scss';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import VideoDetails from './components/VideoDetails';
import Profile from './container/Profile';
import Dashboard from './container/dashboard';
import DashboardMain from './container/dashboard';
import Routes from './routes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardMain />
  },
  {
    path: "/profileDetail",
    element: <Profile />,
  },
  {
    path: "/profileDetail/:theme",
    element: <Profile />,
  },
  {
    path: "/videoDetails",
    element: <VideoDetails />,
  },
  {
    path: "/home",
    element: <Dashboard />,
  },
  {
    path: "/home/:theme",
    element: <Dashboard />,
  },
  // {
  //   path: "/profileDetail?theme=dark",
  //   element: <ProfileSecond />,
  // },
]);

function App() {

  return (
    <Routes />
  );
}

export default App;