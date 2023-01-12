import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";
import HeaderDark from "../../../components/HeaderDark";
import ReactTopInfluencer from "../../../components/ReactTopInfluencer/ReactTopInfluencer";
import LiveStreamComponent from "../../../components/LiveStreamComponent/LiveStreamComponent";
import PostFeedComponent from "../../../components/PostFeedComponent/PostFeedComponent";
import ReactTopBanner from "../../../components/ReactTopBanner/ReactTopBanner";

function Homepage2() {
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

  const heroBanners =
    (homeData &&
      homeData.length &&
      homeData?.filter((item) => item.name === "HERO_BANNER_CAROUSEL")[0]) ||
    {};
  const RoundedTopInfluencers =
    (homeData &&
      homeData.length &&
      homeData?.filter((item) => item.name === "ROUNDED_IMAGE_CAROUSEL")[0]) ||
    {};
  const liveStream =
    (homeData &&
      homeData.length &&
      homeData?.filter((item) => item.name === "MINI_IMAGE_CAROUSEL")[0]) ||
    {};

  const profile =
    (homeData &&
      homeData.length &&
      homeData?.filter((item) => item.name === "FEED_TIMELINE")[0]) ||
    {};

  const profileDetails = profile?.details?.meta[0]?.details;

  const RenderBanner = () => {
    return <ReactTopBanner heroBanners={heroBanners} />;
  };

  const RenderTopInfluencer = () => {
    return <ReactTopInfluencer RoundedTopInfluencers={RoundedTopInfluencers} />;
  };

  const RenderLiveStream = () => {
    return <LiveStreamComponent liveStream={liveStream} />;
  };

  const RenderPost = () => {
    return <PostFeedComponent profileDetails={profileDetails} />;
  };

  const renderSortedArray = () => {
    let arr = [];
    componentSort.length &&
      componentSort.forEach((val) => {
        if (val === "HERO_BANNER_CAROUSEL") {
          arr.push(<RenderBanner />);
        } else if (val === "ROUNDED_IMAGE_CAROUSEL") {
          arr.push(<RenderTopInfluencer />);
        } else if (val === "MINI_IMAGE_CAROUSEL") {
          arr.push(<RenderLiveStream />);
        } else if (val === "FEED_TIMELINE") {
          arr.push(<RenderPost />);
        }
      });
    return arr;
  };

  return (
    <div className="dark-theme">
      <HeaderDark renderRightButton={true} />
      {renderSortedArray()}
    </div>
  );
}
export default Homepage2;
