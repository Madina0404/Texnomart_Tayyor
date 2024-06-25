import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const YangiliklarVaBloglar = () => {
  const [brands, setBrands] = useState([]);

  const fetchBrands = async () => {
    try {
      const response = await axios.get(
        "https://852112d242ac06ba.mokky.dev/Yangiliklar"
      );
      setBrands(response.data);
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <div>
      <h1 className="text-3xl"> Yangiliklar va Bloglar </h1>
      <div className="flex gap-3 mx-auto">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            705: {
              slidesPerView: 1,
            },
            730: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
            1710: {
              slidesPerView: 4,
            },
            1800: {
              slidesPerView: 5,
            },
          }}
        >
          {brands.map((item, index) => (
            <SwiperSlide>
              <div key={index}>
                <div className="w-[100%] h-[160px]">
                  <img
                    className="rounded-2xl"
                    src={item.img}
                    alt={item.title}
                  />
                </div>
                <p className="text-gray-400">{item.data}</p>
                <b>{item.title}</b>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default YangiliklarVaBloglar;
