import React from "react";
// import FooterAccardion from "./FooterAccardion";
import FooterAccordion from "./FooterAccardion";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#333] text-white px-[200px] py-[50px] gap-9 xl:flex justify-between hidden">
        <div>
          <p>Savolingiz bormi? Qo'ng'iroq qiling</p>
          <h1 className="text-[25px]">+998 71 209 99 44</h1>
          <div className="flex gap-8 items-center">
            <img
              width={50}
              className=""
              src="https://1.bp.blogspot.com/-yzM2zpTjbm4/YPAelqtaCxI/AAAAAAABE7Q/dF7_yil6YjQaH3HNlqOAA-V4LOJxdB4_gCLcBGAsYHQ/s1200/icon-DoV%2B%252837%2529.png"
              alt=""
            />
            <img
              width={50}
              className=""
              src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_instagram-512.png"
              alt=""
            />
            <img
              width={50}
              className=""
              src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_youtube-512.png"
              alt=""
            />
            <img
              width={70}
              src="https://static.tildacdn.com/tild6465-3537-4530-b862-326365616231/301335760103211.png"
              alt=""
            />
          </div>
          <div className="flex gap-3">
            <img
              src="https://texnomart.uz/_nuxt/img/playmarket-logo-kr.8adf947.svg"
              alt=""
            />
            <img
              src="https://texnomart.uz/_nuxt/img/appstore-logo-kr.9f12b6a.svg"
              alt=""
            />
          </div>
          <br />
          <a href="#" className="underline">
            Do'konlar manzillari Toshkent
          </a>
        </div>
        <div>
          <b className="text-[20px]">Kompaniya</b>
          <p>Yuridik shaxslar uchun</p>
          <p>Biz xaqimizda</p>
          <p>Yangiliklar va bloglar</p>
          <p>IMEI ni tekshirish</p>
        </div>
        <div>
          <b className="text-[20px]">Malumot</b>
          <p>Bepul yetkazib berish</p>
          <p>Bonus tizimi</p>
          <p>Texnomartda ishlash</p>
          <p>Shaxsiy kabinet</p>
          <p>aloqa raqamlari</p>
        </div>
        <div>
          <b className="text-[20px]">Ҳаридорга ёрдам</b>
          <p>Maxsulotni qaytarish</p>
          <p>Maxsulotlar uchun Kafolat</p>
          <p>Ko'p so'raladigan savollar</p>
          <br />
          <button className="border-dashed border-2 border-gray-500 py-2 px-5 rounded-md">
            Bo'nusingizni bilib oling
          </button>
        </div>
      </div>
      <div className=" xl:hidden">
        <FooterAccordion />
      </div>
    </div>
  );
};

export default Footer;
