import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import bannerPostSlide from "../../assets/banner-post-1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.scss";

// import required modules
import { Pagination } from "swiper";

export default function LazyLoadImage() {
    
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={bannerPostSlide} alt="postImage" /></SwiperSlide>
                <SwiperSlide><img src={bannerPostSlide} alt="postImage" /></SwiperSlide>
                <SwiperSlide><img src={bannerPostSlide} alt="postImage" /></SwiperSlide>
                <SwiperSlide><img src={bannerPostSlide} alt="postImage" /></SwiperSlide>
                <SwiperSlide><img src={bannerPostSlide} alt="postImage" /></SwiperSlide>
                <SwiperSlide><img src={bannerPostSlide} alt="postImage" /></SwiperSlide>
                <SwiperSlide><img src={bannerPostSlide} alt="postImage" /></SwiperSlide>
                <SwiperSlide><img src={bannerPostSlide} alt="postImage" /></SwiperSlide>
                <SwiperSlide><img src={bannerPostSlide} alt="postImage" /></SwiperSlide>
            </Swiper>
        </>
    );
}
