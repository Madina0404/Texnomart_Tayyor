import React from "react";
import { Link } from "react-router-dom";

const BarchaQategoriyalar = () => {
  return (
    <div>
      <div className=" mb-5">
        <h1 className=" text-[30px]">Маҳсулотлар каталоги Тошкентда</h1>
        <hr />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-5 justify-between">
        <div className=" bg-gray-50 h-[500px]  p-2 rounded-lg">
          <img
            width={100}
            src="https://mini-io-api.texnomart.uz/catalog/category/image/19/d38f379e-7bbe-45e5-87b5-1d8a4b11495e-medium.webp"
            alt=""
          />
          <b>Smartfonlar va gadjetlar</b>
          <p>Smartfonlar</p>
          <p>Telefonlar</p>
          <p>Planshetlar</p>
          <p>Gadjetlar</p>
          <p>Telefon aksesuarlari</p>
        </div>
        <div className=" bg-gray-50 h-[500px]  p-2 rounded-lg">
          <img
            width={100}
            src="https://mini-io-api.texnomart.uz/catalog/category/image/10/ff39af9f-5bf0-443e-ab1d-32a5c2df2272-medium.webp"
            alt=""
          />
          <b>Kampyuter texnikasi</b>
          <p>noutbooklar</p>
          <p>Monitor</p>
          <p>Monobloklar</p>
          <p>Kampyuter aksesuarlari</p>
          <p>Tashqi qattiq diskalar</p>
          <p>Flesh xotira</p>
          <p>Kolonkalar</p>
        </div>
        <div className=" bg-gray-50 h-[500px]  p-2 rounded-lg">
          <img
            width={100}
            src="https://mini-io-api.texnomart.uz/catalog/category/image/23/eb047948-3ab8-4ada-a761-28064e33e8e4-medium.webp"
            alt=""
          />
          <b>Televizorlar va telekartalar</b>
          <p>Televizorlar</p>
          <p>Televizor aksessuarlari</p>
          <p>TV va kinoga obuna</p>
        </div>
        <div className=" bg-gray-50 h-[500px]  p-2 rounded-lg">
          <Link to={'/Sotuvchilar'}>
            <img
              width={100}
              src="https://mini-io-api.texnomart.uz/catalog/category/image/115/5da1966f-3564-4658-9df2-5a3186ccc4e1-medium.webp"
              alt=""
            />
            <b>Iqlim texnikasi</b>
            <p>Kanditsioner</p>
            <p>Ventilyator</p>
            <p>Isitgich</p>
            <p>Suv isitgichi</p>
            <p>Namlagichlar</p>
            <p>Xavo tozalagichlar</p>
          </Link>
        </div>
        <div className=" bg-gray-50 h-[500px]  p-2 rounded-lg">
          <img
            width={100}
            src="https://mini-io-api.texnomart.uz/catalog/category/image/2/d960401e-ca11-4be4-8bf2-1aad11cbc352-medium.webp"
            alt=""
          />
          <b>Maishiy texnika</b>
          <p>Changyutgich</p>
          <p>Robot changyutgich</p>
          <p>Simsiz changyutgich</p>
          <p>Elektr polyuvgich va elektr supurgi</p>
          <p>Bug' tozalagich</p>
          <p>Dazmol</p>
          <p>Vertiqal bug' mashinasi</p>
          <p>Chim o'rgich</p>
          <p>Dispenserlar</p>
        </div>
        <div className=" bg-gray-50 h-[500px]  p-2 rounded-lg">
          <img
            width={100}
            src="https://mini-io-api.texnomart.uz/catalog/category/image/32/22ef631d-89ed-43d3-b3e6-50c23111e5f8-medium.webp"
            alt=""
          />
          <b>Ofis jihoslari</b>
          <p>Printerlar va kop funksali qurilmalar</p>
          <p>Ofis noutbooklari</p>
          <p>Klaviratura va sichqoncha</p>
          <p>Ofis manitorlari</p>
          <p>Suv sovutgichlari</p>
          <p>Wifi routerlar</p>
          <p>Noutbook sumkalari</p>
          <p>Monoblocklar</p>
          <p>Kalamlar</p>
        </div>
        <div className=" bg-gray-50 h-[500px]  p-2 rounded-lg">
          <img
            width={100}
            src="https://mini-io-api.texnomart.uz/catalog/category/image/65/0db2e063-10e8-420d-bd0c-1a9d1966b62c-medium.webp"
            alt=""
          />
          <b>Oshxona jihozlari</b>
          <p>Kichik uskunalar</p>
          <p>Katta oshxona anjomlari</p>
          <p>O'rnatiladigan maishiy texnika</p>
        </div>
        <div className=" bg-gray-50 h-[500px]  p-2 rounded-lg">
          <img
            width={100}
            src="https://mini-io-api.texnomart.uz/catalog/category/image/240/0a71c5aa-345f-4506-bfab-66c55ac12f40-medium.webp"
            alt=""
          />
          <b>Uy uchun idishlar</b>
          <p>Ovqat pishirish uchun</p>
          <p>Stol idishlari</p>
          <p>Yordamchi idishlar</p>
        </div>
        <div className=" bg-gray-50 h-[500px] mb-4  p-2 rounded-lg">
          <img
            width={100}
            src="https://mini-io-api.texnomart.uz/catalog/category/image/108/3165bdd7-4853-489c-bc4f-7649da6400e2-medium.webp"
            alt=""
          />
          <b>Avtomabil uchun mahsulotlar</b>
          <p>Bosimli yuvgichlar</p>
          <p>Yuqori bosimli yuvish mashinalari</p>
          <p>Videoregistratorlar</p>
          <p>Avtomabil aksessuarlari</p>
          <p>Radar rededturlari</p>
          <p>Avtomabil yuvish vositalari</p>
        </div>
      </div>
    </div>
  );
};

export default BarchaQategoriyalar;
