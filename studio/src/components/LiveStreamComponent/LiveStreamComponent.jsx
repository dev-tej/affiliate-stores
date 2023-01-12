import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LiveStreamComponent.scss";
import playVideoIcon from "/Users/bhavyajain21/Desktop/affiliate-stores/studio/src/assets/play-icon.svg";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function LiveStreamComponent() {
  const [homeData, setHomeData] = useState([]);
  const [componentSort, setComponentSort] = useState([]);

  const getHomeData = async () => {
    var config = {
      method: "get",
      url: "https://api.galleri5.co.in/servicer/galleri5/creator-zone/home",
      headers: {},
    };

    await axios(config)
      .then(function (response) {
        setHomeData(response.data);
        setComponentSort(response.data.map((val) => val.component));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getHomeData();
  }, []);

  const liveStream =
    (homeData &&
      homeData.length &&
      homeData?.filter((item) => item.name === "MINI_IMAGE_CAROUSEL")[0]) ||
    {};

  return (
    <div className="live-stream-wap">
      <div className="container-width">
        <div className="heading-sect stream-heading">
          <h2 className="title-h2-head">
            <img src={playVideoIcon} alt="Play icon" /> Live Streams
          </h2>
          <span className="view-allstream">
            <button type="button" className="btn-view-all">
              View All
            </button>
          </span>
        </div>
        <div className="stream-sec-wap">
          <div className="row-stream-grid-custom">
            {liveStream?.details?.meta.map((val, index) => {
              return (
                <div key={index} className="column-wig--stmweb">
                  <div className="stm-boxwidgets">
                    <div className="img-product--mt">
                      <img src={val?.thumbnail} alt="web" />
                    </div>
                    <div className="disc-shortweb-stm">
                      <h3 className="headstm--wm">{val.description || ""}</h3>
                      <span className="name-usr-titl">{val.name || ""}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveStreamComponent;
