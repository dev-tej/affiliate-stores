import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LiveStreamComponent.scss";
import playVideoIcon from "/Users/bhavyajain21/Desktop/affiliate-stores/studio/src/assets/play-icon.svg";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function LiveStreamComponent({ liveStream }) {
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
