import axios from "axios";
import React, { useEffect, useState } from "react";
import "swiper/css";
import { Link } from "react-router-dom";
import DynamicPage3 from "./DynamicPage3";

const Sale = () => {
  const [state, setState] = useState([]);
  const GetData = async () => {
    try {
      let response = await axios.get(
        "https://71cf781401022ba5.mokky.dev/Aksiya"
      );
      setState(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
      <h1 className=" text-[30px]">Aksiyalar va сhegirmalar Toshkentda</h1>
      <hr />
      <div className=" flex gap-[10px]">
        <button className=" border-gray-300 border px-2 my-5 rounded-lg">
          Foizlarsiz muddatli to'lov!
        </button>

        <button className=" border-gray-300 border px-2 my-5 rounded-lg">
          Tavsiya etamiz
        </button>

        <button className=" border-gray-300 border px-2 my-5 rounded-lg">
          Xit savdo
        </button>
        <button className=" border-gray-300 border px-2 my-5 rounded-lg">
          Super narxlarda tovarlar
        </button>
      </div>
      <div className=" grid gap-5 items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {state.map((item) => (
          <div
            key={item.id}
            className=" border-gray-100 mb-5 cursor-pointer rounded-lg items-center justify-center border-2 p-2"
          >
            <Link >
              <img
                width={"100%"}
                className=" rounded-md"
                src={item.img}
                alt=""
              />
              <b>{item.title}</b>
              <p className=" text-gray-400">{item.data}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sale;
