import React, { useState } from "react";

const Katalog = () => {
  const [hoveredSmartfonlar, setHoveredSmartfonlar] = useState(true);
  const [hoveredKampyuterlar, setHoveredKampyuterlar] = useState(false);

  return (
    <div>
      <div className="flex gap-[30px] fixed bg-white rounded-2xl p-2">
        <div className="flex flex-col gap-2 w-[300px]">
          <div
            className="flex items-center justify-between p-2 rounded-lg"
            onMouseEnter={() => {
              setHoveredSmartfonlar(true);
              setHoveredKampyuterlar(false);
            }}
            style={{
              backgroundColor: hoveredSmartfonlar ? "#ffedb7" : "transparent",
            }}
          >
            <div className="flex items-center">
              <img
                src="https://mini-io-api.texnomart.uz/catalog/category/small-front-icon/19/a05699c9-17b3-41fb-b5c7-5e0b52db28cd.svg"
                alt=""
              />
              <p>Smartfonlar va gadjetlar</p>
            </div>
            <img
              width={20}
              src="https://cdn3.iconfinder.com/data/icons/feather-5/24/chevron-right-1024.png"
              alt=""
            />
          </div>
          <div
            className="flex items-center justify-between p-2 rounded-lg"
            onMouseEnter={() => {
              setHoveredSmartfonlar(false);
              setHoveredKampyuterlar(true);
            }}
            onMouseLeave={() => setHoveredKampyuterlar(true)}
            style={{
              backgroundColor: hoveredKampyuterlar ? "#ffedb7" : "transparent",
            }}
          >
            <div className="flex items-center">
              <img
                src="https://mini-io-api.texnomart.uz/catalog/category/small-front-icon/10/1d442a2c-9b2a-46f6-95bb-3e8b93ec8022.svg"
                alt=""
              />
              <p>Kompyuter texnikasi</p>
            </div>
            <img
              width={20}
              src="https://cdn3.iconfinder.com/data/icons/feather-5/24/chevron-right-1024.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg hover:bg-[#ffedb7]">
            <div className="flex items-center">
              <img
                src="https://mini-io-api.texnomart.uz/catalog/category/small-front-icon/23/3f6aef7c-53f3-426a-aac5-b2fbc19e1b57.svg"
                alt=""
              />
              <p> Телевизорлар ва телекарталар</p>
            </div>
            <img
              width={20}
              src="https://cdn3.iconfinder.com/data/icons/feather-5/24/chevron-right-1024.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg hover:bg-[#ffedb7]">
            <div className="flex items-center">
              <img
                src="https://mini-io-api.texnomart.uz/catalog/category/small-front-icon/115/d1f614ce-a042-4671-97f5-15493b966c49.svg"
                alt=""
              />
              <p> Иқлим техникаси</p>
            </div>
            <img
              width={20}
              src="https://cdn3.iconfinder.com/data/icons/feather-5/24/chevron-right-1024.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg hover:bg-[#ffedb7]">
            <div className="flex items-center">
              <img
                src="https://mini-io-api.texnomart.uz/catalog/category/small-front-icon/2/f21971b7-7267-451b-b498-be6f5ba2905f.svg"
                alt=""
              />
              <p> Маиший техника</p>
            </div>
            <img
              width={20}
              src="https://cdn3.iconfinder.com/data/icons/feather-5/24/chevron-right-1024.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg hover:bg-[#ffedb7]">
            <div className="flex items-center">
              <img
                src="https://mini-io-api.texnomart.uz/catalog/category/small-front-icon/32/8568525c-31e1-4784-ad5c-0b30a55adbc5.svg"
                alt=""
              />
              <p> Офис жиҳозлари</p>
            </div>
            <img
              width={20}
              src="https://cdn3.iconfinder.com/data/icons/feather-5/24/chevron-right-1024.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-[900px]">
          {hoveredSmartfonlar && (
            <>
              <h1 className="font-bold text-2xl">Смартфонлар ва Гаджетлар</h1>
              <br />
              <div className="flex justify-between">
                <div>
                  <b>Smartfonlar</b>
                  <p>samsung</p>
                  <p>xiamo</p>
                  <p>vivo</p>
                  <p>iphone</p>
                  <p>honor</p>
                  <p>huavei</p>
                  <p>infinix</p>
                  <p>oppo</p>
                </div>
                <div>
                  <b>Planshetlar</b>
                  <p>Samsung</p>
                  <p>Xiaomi</p>
                  <p>Huawei</p>
                  <p>Huawei</p>
                  <p>HONOR</p>
                </div>
                <div>
                  <b>ТЕЛЕФОН АКСЕССУАРЛАРИ</b>
                  <p>Ташқи батареялар</p>
                  <p>Смартфонлар учун ушлагичлар</p>
                  <p>Қувватлаш қурилмалари</p>
                  <p>Қувватлаш қурилмалари</p>
                  <p>Ўйин аксессуарлари</p>
                  <p>USB кабеллар</p>
                  <p>Хотира карталари</p>
                  <p>Селфи моноподлари</p>
                  <p>Қулоқчинлар</p>
                </div>
              </div>
            </>
          )}
          {hoveredKampyuterlar && (
            <>
              <h1 className="font-bold text-2xl">Компютер техникаси</h1>
              <br />
              <div className="flex justify-between">
                <div>
                  <b>Kampyuterlar</b>
                  <p>Desktop</p>
                  <p>Laptop</p>
                  <p>Tablet</p>
                  <p>Monitors</p>
                  <p>Printers</p>
                </div>
                <div>
                  <b>МОНОБЛОКЛАР</b>
                  <p>Lenovo</p>
                  <p>Apple</p>
                  <p>Atech</p>
                </div>
                <div></div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Katalog;
