import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.scss";

// import required modules
import { Pagination } from "swiper";

export default function LazyLoadImage() {
    const imageDummy = "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2022/12/15/2f98dc81-f574-40d9-989f-d4f549cc48291671116151641-47.jpg"
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={imageDummy} alt="postImage" /></SwiperSlide>
                <SwiperSlide><img src={imageDummy} alt="postImage" /></SwiperSlide>
                <SwiperSlide><img src={imageDummy} alt="postImage" /></SwiperSlide>
                <SwiperSlide><img src={imageDummy} alt="postImage" /></SwiperSlide>
                <SwiperSlide><img src={imageDummy} alt="postImage" /></SwiperSlide>
                <SwiperSlide><img src={imageDummy} alt="postImage" /></SwiperSlide>
                <SwiperSlide><img src={imageDummy} alt="postImage" /></SwiperSlide>
                <SwiperSlide><img src={imageDummy} alt="postImage" /></SwiperSlide>
                <SwiperSlide><img src={imageDummy} alt="postImage" /></SwiperSlide>
            </Swiper>
        </>
    );
}
