import React, { useContext, useEffect, useState } from "react";
import { XitSavdoContext } from "../context/XitSavdoContext";
import { BasketContext } from "../context/BasketContext";
import { Link } from "react-router-dom";
import { LikeContext } from "../context/LikeContext";

const Karzinka = () => {
  const { basket, removeData } = useContext(BasketContext);
  const { addLike } = useContext(LikeContext);
  const [itemCounts, setItemCounts] = useState({});
  const [allPrice, setAllPrice] = useState(0);

  useEffect(() => {
    setItemCounts(
      basket.reduce((counts, item) => ({ ...counts, [item.id]: 1 }), {})
    );
  }, [basket]);

  const plus = (itemId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: prevCounts[itemId] + 1,
    }));
  };

  const minus = (itemId) => {
    if (itemCounts[itemId] > 1) {
      setItemCounts((prevCounts) => ({
        ...prevCounts,
        [itemId]: prevCounts[itemId] - 1,
      }));
    }
  };

  useEffect(() => {
    let son = 0;
    basket.map((el) => {
      if (itemCounts) {
        son += itemCounts[el.id] * el.price;
      }
    });
    setAllPrice(son);
  }, [itemCounts]);

  return (
    <div className="flex my-5  flex-col justify-between px-3">
      {basket.length === 0 ? (
        <div className="text-center flex-col items-center justify-center mx-auto">          
          <img
          className=" mx-auto"
            src="https://texnomart.uz/_nuxt/img/shopping-card.24c7f25.svg"
            alt=""
          />
          <h1 className=" text-[25px] w-[300px] my-5">
            Саватчада хозирда ҳеч нима йўқ
          </h1>
          <a href="/">
            <button className="border-2 border-yellow-500 text-xl px-4 rounded-[5px] mb-5">
              Xarid qilish
            </button>
          </a>
        </div>
      ) : (
        <div className=" xl:flex items-center gap-10 justify-between">
          <div className="flex-col w-[100%] lg:w-[50%]">
            {basket?.map((item) => (
              <div
                key={item.id}
                className="flex lg:flex-row w-[100%] items-center gap-5 mb-7"
              >
                <div className=" w-[100%] flex items-center">
                  <div className="flex items-center gap-4">
                    <input
                      className=" text-center h-[] accent-yellow-500 bg-yellow-500 p-2 text-yellow-500"
                      type="checkbox"
                    />
                    <Link to={`/XitSavdo/${item.id}`}>
                      <Link to={`/Products/${item.id}`}>
                        <img className=" w-[200px]" src={item.img} alt="" />
                      </Link>
                    </Link>
                  </div>
                  <div className="w-[100%] flex gap-3 items-center">
                    <b className="text-[20px] lg:hidden">{item.price}</b>
                    <p>{item.title}</p>
                    <div className="flex items-center justify-between w-[100%]">
                      <div className="flex items-center h-6 gap-[20px]  bg-gray-100 px-2 rounded-lg">
                        <button onClick={() => minus(item.id)}>-</button>
                        <p>{itemCounts[item.id]}</p>
                        <button onClick={() => plus(item.id)}>+</button>
                      </div>
                      <b className="text-[20px] lg:block hidden">
                        {item.price}
                      </b>
                    </div>
                    <div className="flex lg:flex-col gap-[30px]">
                      <img
                      width={30}
                        onClick={() => addLike(item)}
                        className=" cursor-pointer"
                        src="https://texnomart.uz/_nuxt/img/like-default.676d647.svg"
                        alt="error"
                      />
                      <img
                        className=" cursor-pointer"
                        onClick={() => removeData(item.id)}
                        src="https://texnomart.uz/_nuxt/img/basket.73732b8.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-col w-[100%] xl:w-[400px]">
            <h1 className=" font-bold">Jami</h1>
            <div className="border-2 p-2 w-[100%] rounded-md">
              <div className="flex justify-between my-2">
                {basket.length} ta mahsulot narxi
                <b>{allPrice} so'm</b>
              </div>
              <button className="bg-yellow-500 font-bold px-[100px] w-[100%] py-3  rounded-lg">
                Rasmiylashtirish
              </button>
            </div>
            <div className="border-2 p-2 rounded-md mt-[50px]">
              <p className="bg-gray-300 px-3 py-1 rounded-md mb-4">
                Muddatli to'lov <b> {allPrice} сум </b> / 24 oy
              </p>
              <button className=" bg-black text-white font-bold px-[90px] w-[100%] py-3  rounded-lg">
                Muddatli to'lov uchun
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Karzinka;
