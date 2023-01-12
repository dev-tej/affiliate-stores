import React from 'react';
import Header from '../../../components/Header';
import CategoriessContainer from '../../../components/CategoriessContainer';
import ScrollableBannerImages from '../../../components/ScrollableBannerImages';
import './dashboard.scss';
import Post from '../../../components/Post';
import Recommended from '../../../components/Recommended';
import LoginBottomModal from '../../../components/LoginBottomModal';

function Dashboard() {
  return (
    <div className="dashboard">
        <Header />
        <CategoriessContainer />
        <h3>
            Brands in Highlight
        </h3>
        <ScrollableBannerImages />
        <div className="divider" />
        <Post video={true}/>
        <div className="divider" />
        <Post />
        <div className="divider" />
        <Post />
        <Recommended />
        <div className="divider" />
        <Post />
        <div className="divider" />
        <Post />
        <div className="divider" />
        <Post />
    </div>
  );
}

export default Dashboard;
