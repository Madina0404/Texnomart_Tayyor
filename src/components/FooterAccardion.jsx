import React, { useState } from "react";
const FooterAccordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if already expanded
    } else {
      setExpandedIndex(index); // Expand clicked accordion
    }
  };

  return (
    <div className="footer-accordion bg-[#333] p-3 text-white">
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleAccordion(0)}>
          <b className="text-[20px] transition-all">Kompaniya</b>
          <span
            className={`arrow ${expandedIndex === 0 ? "expanded" : ""}`}
          ></span>
        </div>
        <div
          className={`accordion-content transition-all ${
            expandedIndex === 0 ? "expanded" : ""
          }`}
        >
          <p>Yuridik shaxslar uchun</p>
          <p>Biz xaqimizda</p>
          <p>Yangiliklar va bloglar</p>
          <p>IMEI ni tekshirish</p>
        </div>
      </div>

      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleAccordion(1)}>
          <b className="text-[20px]">Malumot</b>
          <span
            className={`arrow ${expandedIndex === 1 ? "expanded" : ""}`}
          ></span>
        </div>
        <div
          className={`accordion-content transition-all ${
            expandedIndex === 1 ? "expanded" : ""
          }`}
        >
          <p>Bepul yetkazib berish</p>
          <p>Bonus tizimi</p>
          <p>Texnomartda ishlash</p>
          <p>Shaxsiy kabinet</p>
          <p>aloqa raqamlari</p>
        </div>
      </div>

      <div className="accordion-item">
        <div className="accordion-title" onClick={() => toggleAccordion(2)}>
          <b className="text-[20px]">Ҳаридорга ёрдам</b>
          <span
            className={`arrow ${expandedIndex === 2 ? "expanded" : ""}`}
          ></span>
        </div>
        <div
          className={`accordion-content transition-all ${
            expandedIndex === 2 ? "expanded" : ""
          }`}
        >
          <p>Maxsulotni qaytarish</p>
          <p>Maxsulotlar uchun Kafolat</p>
          <p>Ko'p so'raladigan savollar</p>
        </div>
      </div>
      <hr />
      <p>Саволингиз борми? Қўнғироқ қилинг</p>
      <h1 className=" text-2xl">+998 71 209 99 44</h1>
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
      <a className=" border-b-2" href="">
        Дўконлар манзиллари Тошкент
      </a><br />
      <br />
      <button className="border-dashed border-2 border-gray-500 py-2 px-5 rounded-md">
        Bo'nusingizni bilib oling
      </button><br /><br />
      <hr />
    </div>
  );
};

export default FooterAccordion;
