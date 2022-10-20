import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Grid, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/gwjm44q804mbmvji.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
            alt="first"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/dkiovygfrwyedw_r.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
            alt="first"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/dkiovygfrwyedw_r.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
            alt="first"
          ></img>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
        <SwiperSlide>Slide 11</SwiperSlide>
        <SwiperSlide>Slide 12</SwiperSlide>
      </Swiper>
    </>
  );
}
