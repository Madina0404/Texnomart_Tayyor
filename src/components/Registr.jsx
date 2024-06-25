import React, { useContext } from "react";
import LoginButton from "../routes/privateRoutes";
import { NavLink } from "react-router-dom";
import { BasketContext } from "../context/BasketContext";
import { LikeContext } from "../context/LikeContext";
import likes from "../assets/icons/likes.svg";
import Karzinka from "../assets/icons/basket.svg";

const Registr = () => {
  const { basket } = useContext(BasketContext);
  const { like } = useContext(LikeContext);
  return (
    <div className="">
      <div className="flex fixed bottom-0 w-[100%] 2xl:hidden gap-4 items-center left-0 px-[100px] py-2 bg-gray-500 justify-between">
        <a href="/">
          <div className="flex flex-col items-center">
            <img
              src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-18-512.png"
              width={20}
              alt=""
            />
            <b className=" hidden sm:block">Bosh sahifaga o'tish</b>
          </div>
        </a>
        <div className="logIn">
          <LoginButton />
        </div>
        <NavLink to={"/Likes"}>
          <div className="flex flex-col items-center">
            <div className=" flex">
              <img width={20} src={likes} alt="" />
              <p className=" bg-yellow-500 w-[20px] h-[20px] rounded-[150px] text-center relative bottom-3 ">
                {like.length}
              </p>
            </div>
            <b className=" hidden sm:block">Sevimlilar</b>
          </div>
        </NavLink>
        <div className="flex flex-col items-center">
          <NavLink to={"/Karzinka"}>
            <div className=" flex flex-col items-center">
              <div className=" flex">
                <img width={20} src={Karzinka} alt="" />
                <p className="bg-yellow-500 w-[20px] h-[20px]  rounded-[150px] text-center  relative bottom-3">
                  {basket.length}
                </p>
              </div>
              <b className=" hidden sm:block">Savatcha</b>
            </div>
          </NavLink>
        </div>
      </div>

      {/*  */}

      <div className="2xl:flex  w-[100%] hidden gap-4 items-center  py-2  justify-between">
        <div className="logIn">
          <LoginButton />
        </div>
        <NavLink to={"/Likes"}>
          <div className="flex flex-col items-center">
            <div className=" flex">
              <img width={20} src={likes} alt="" />
              <p className=" bg-yellow-500 w-[20px] h-[20px] rounded-[150px] text-center relative bottom-3 ">
                {like.length}
              </p>
            </div>
            <b className=" hidden sm:block">Sevimlilar</b>
          </div>
        </NavLink>
        <div className="flex flex-col items-center">
          <NavLink to={"/Karzinka"}>
            <div className=" flex flex-col items-center">
              <div className=" flex">
                <img width={20} src={Karzinka} alt="" />
                <p className="bg-yellow-500 w-[20px] h-[20px]  rounded-[150px] text-center  relative bottom-3">
                  {basket.length}
                </p>
              </div>
              <b className=" hidden sm:block">Savatcha</b>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Registr;
