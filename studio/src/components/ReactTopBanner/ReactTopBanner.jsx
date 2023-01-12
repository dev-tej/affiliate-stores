import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "swiper/css";
import "swiper/css/pagination";
import "./ReactTopBanner.scss";

function ReactTopBanner({ heroBanners }) {
  return (
    <div className="banner-slider-home">
      <ReactOwlCarousel
        className="owl-theme"
        loop={true}
        autoplayTimeout={100000}
        autoplay={true}
        margin={10}
        nav
        items="1">
        {heroBanners?.details?.meta?.map((item, index) => {
          return (
            <div className="carausal-image" key={index}>
              <img src={item?.thumbnail} alt="postImage" />
            </div>
          );
        })}
      </ReactOwlCarousel>
    </div>
  );
}

export default ReactTopBanner;
