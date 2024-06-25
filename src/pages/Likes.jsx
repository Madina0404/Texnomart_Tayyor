import React, { useContext } from "react";
import { LikeContext } from "../context/LikeContext";
import { BasketContext } from "../context/BasketContext";
import { Link } from "react-router-dom";
const Likes = () => {
  const { like, removeLike } = useContext(LikeContext);
  const { addData } = useContext(BasketContext);

  return (
    <div>
      {like.length === 0 ? (
        <div>
          <h1 className="text-[30px]">Sevimlilar</h1>
          <hr />
          <div className="text-center my-9 flex flex-col items-center justify-center mx-auto">
            <img
              src="https://texnomart.uz/_nuxt/img/favourite.eca26ee.svg"
              alt=""
            />
            <b>Sevimlilar roʻyxati boʻsh</b>
            <p className="w-[400px] my-3">
              Ma'qul kelgan maxsulotlarni keyinroq ko'rish yoki harid qilish
              uchun sevimlilar ro'yxatiga kiriting.
            </p>
            <a href="/">
              <button className="border-2 border-yellow-500 px-4 py-2 rounded-xl">
                Asosiy sahifaga o'tish
              </button>
            </a>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-[30px]">Sevimlilar</h1>
          <hr />
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 my-3">
            {like?.map((item) => (
              <div key={item.id}>
                <div className="border p-2 border-gray-400 rounded-xl">
                  <div className="flex justify-between">
                    <p className="bg-green-500 px-2 rounded-md text-white">
                      0*0*12
                    </p>
                    <div className=" cursor-pointer" onClick={() => removeLike(item.id)}>
                      <img
                        style={{ width: "20px" }}
                        src="https://cdn3.iconfinder.com/data/icons/feather-5/24/x-512.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <Link to={`/XitSavdo/${item.id}`}>
                    <div className=" h-[300px] overflow-hidden">
                      <img className="object-cover h-[100%] w-[100%]" src={item.img} alt="" />
                    </div>
                    <p>{item.title}</p>
                    <button className="bg-gray-100 px-2 rounded-xl">
                      {item.oy1} somdan/24 oy
                    </button>
                    <br />
                    <button className="bg-yellow-100 px-2 rounded-xl">
                      {item.oy2} som 0*0*12
                    </button>
                  </Link>
                  <div className=" flex justify-between items-center">
                    <b>{item.price}</b>
                    <div onClick={() => addData(item)} className="w-[30px]">
                      <img
                        className=" border-2 cursor-pointer rounded-lg  border-yellow-400"
                        src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-12-1024.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Likes;
