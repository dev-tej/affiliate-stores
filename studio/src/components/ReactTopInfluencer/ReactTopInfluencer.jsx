import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ReactTopInfluencer.scss";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function ReactTopInfluencer() {
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

  const RoundedTopInfluencers =
    (homeData &&
      homeData.length &&
      homeData?.filter((item) => item.name === "ROUNDED_IMAGE_CAROUSEL")[0]) ||
    {};

  return (
    <div className="top-influence-sect">
      <div className="container-width">
        <div className="heading-sect">
          <h2 className="title-h2-head">
            {RoundedTopInfluencers?.details?.title || "Top Influencers"}
          </h2>
        </div>
        <div className="influice--wrap-items">
          <ReactOwlCarousel
            className="owl-theme top-slide-product"
            loop={true}
            autoplayTimeout={10000}
            autoplay={true}
            margin={10}
            nav={false}
            dots={false}
            items="4">
            {RoundedTopInfluencers?.details?.meta?.map((item, index) => {
              return (
                <div class="item" key={index}>
                  <div className="item--topcategry text-center">
                    <div className="imgproduct--gm">
                      <img src={item?.thumbnail} alt="" />
                    </div>
                    <h4 className="heading-gm-wigt">{item?.name || ""}</h4>
                  </div>
                </div>
              );
            })}
          </ReactOwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default ReactTopInfluencer;
