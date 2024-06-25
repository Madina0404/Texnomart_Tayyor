import React from "react";

const PhoneBanner = () => {
  return (
    <div>
      <div className="hidden xl:flex items-center gap-16 justify-between bg-gray-100 rounded-3xl px-[200px]">
        <img
          src="https://texnomart.uz/_nuxt/img/phone-min.d3c6b0c.png"
          alt=""
        />
        <div>
          <h1 className="text-[35px]">Ilovani yuklang</h1>
          <p>
            Haridlarni uydan chiqmagan holda mobil ilova orqali amalga oshiring!
          </p>
          <div className="flex items-center gap-[30px] my-3">
            <img
              width={100}
              src="https://texnomart.uz/_nuxt/img/app-qr-code-2x.6c90f4e.png"
              alt=""
            />
            <p className="text-[20px] ">
              Kamerani yo`naltiring va <br /> Texnomart ilovasini bepul yuklang
            </p>
          </div>
          <div className="flex gap-5">
            <img
              src="https://texnomart.uz/_nuxt/img/googleplay-uz.fa5705f.svg"
              alt=""
            />
            <img
              src="https://texnomart.uz/_nuxt/img/appstore-uz.ef31779.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" text-center xl:hidden flex flex-col items-center ">
        <b className=" text-[25px]">
          Телефонлар ва маиший техника муддатли тўловга
        </b>
        <p>
          <img
            width={80}
            src="https://texnomart.uz/_nuxt/img/installment-2.c1acd6f.svg"
            alt=""
            className="bg-gray-100 p-2 w-[80px] h-80px rounded-[50%]"
          />
        </p>
        <b>Бепул етказиб бериш</b>
        <p>Техномартга товарларни eтказиб <br /> бериш шартлари</p>
      </div>
    </div>
  );
};

export default PhoneBanner;
