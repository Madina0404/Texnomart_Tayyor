import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import axios from "axios";

export default function SwiperBanner() {
  const [brandData, setBrandData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://854d8ef6835febf9.mokky.dev/Brands")
      .then((res) => {
        setBrandData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Swiper
        spaceBetween={100}
        modules={[Pagination]}
        slidesPerView={6}
      >
        <div className="flex items-center justify-center ">
          {brandData.map((item) => (
            <SwiperSlide key={item.id} className="swiperItem">
              <div className="max-w-[100%] w-full h-[60px]">
                <img
                  className="shadow-xl p-3 rounded-xl"
                  src={item.img}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}
