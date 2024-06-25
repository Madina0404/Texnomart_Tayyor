import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../index.css";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

const Carousel = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "black",
          "--swiper-pagination-color": "black",
        }}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        autoplay
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://mini-io-api.texnomart.uz/newcontent/slider/111/L7EqCgvsvFVyseLj2WRg5Eibkrqp0GXUdQ38t4en.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mini-io-api.texnomart.uz/newcontent/slider/108/l6nrFtw9pUlwK6C0kBW593PVtTnk13b10Ow9Ndln.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mini-io-api.texnomart.uz/newcontent/slider/96/4kW7L6LzTGdJG0Q36KQpmltTBwpoYnWh5ZkPA180.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mini-io-api.texnomart.uz/newcontent/slider/109/cmVgSupjAJIzZPnt9jvjOLDUKw7BqWCYHQoqqzL3.webp" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Carousel;
