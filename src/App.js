import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import styled from "styled-components";

const Div = styled.div`
  width: 300px;
  height: 200px;
`;

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Div>
            <img
              src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/gwjm44q804mbmvji.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
              alt="인천 송도 맛집 베스트 50곳"
            />
          </Div>
          <Div>
            <img
              src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/dkiovygfrwyedw_r.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
              alt="망원동 맛집 베스트 40곳"
            />
          </Div>
        </SwiperSlide>
        <SwiperSlide>
          <Div>
            <img
              src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/xp8tqpzvpnkze1up.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
              alt="육회 맛집 베스트 15곳"
            />
          </Div>
          <Div>
            <img
              src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/j32ez3ban9-rxaur.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
              alt="여의도 불꽃축제 맛집 베스트"
            />
          </Div>
        </SwiperSlide>
        <SwiperSlide>
          <Div>
            <img
              src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/pgzkxfxjdtfhpxrh.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
              alt="서울 디저트 맛집 베스트 30곳"
            />
          </Div>
          <Div>
            <img
              src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/zwh3kvnq1aiwzjjy.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
              alt="회기역 주변 맛집 베스트 25곳"
            />
          </Div>
        </SwiperSlide>
        <SwiperSlide>
          <Div>
            <img
              src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/zn-9npqsx9hugpzb.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
              alt="시청 맛집 베스트 25곳"
            />
          </Div>
          <Div>
            <img
              src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/bk2rrl18v7kdrjds.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
              alt="책 읽기 좋은 카페 베스트 40곳"
            />
          </Div>
        </SwiperSlide>
        <SwiperSlide>
          <Div>
            <img
              src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/yollmteq-ktxy6ec.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
              alt="로스터리 카페 베스트 20곳 사진"
            />
          </Div>
          <Div>
            <img
              src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/sjfnxiidoh22pp-4.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
              alt="이천/광주/여주 맛집 베스트 20곳"
            />
          </Div>
        </SwiperSlide>
        <SwiperSlide>
          <Div>
            <img
              src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/of-6ku6surah9hjs.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
              alt="왕십리역 맛집 베스트 30곳"
            />
          </Div>
          <Div>
            <img
              src="https://mp-seoul-image-production-s3.mangoplate.com/keyword_search/meta/pictures/xzxz-ozjnlzqugrv.jpg?fit=around|600:400&crop=600:400;*,*&output-format=jpg&output-quality=80"
              alt="안주가 맛있는 홍대 맛집 베스트 15곳"
            />
          </Div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
