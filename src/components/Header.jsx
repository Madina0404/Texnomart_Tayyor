import "../index.css";
import burgerMenu from "../assets/icons/burgerMenu.svg";
import cres from "../assets/icons/cres.svg";
import location from "../assets/icons/location.svg";
import { useState } from "react";
import Search from "../components/Search";
import Katalog from "../components/Katalog";
import Registr from "../components/Registr";

const Header = () => {
  const [state, setState] = useState(false);

  return (
    <div className=" sticky py-[20px] px-5 top-0 z-20 w-[100%] mx-auto bg-white">
      <div className=" flex items-center justify-between gap-2  bg-wh z-20">
        <a href="/">
          <img
            width={250}
            height={50}
            src="https://asset.brandfetch.io/id9Uj-mLYA/idE69RoaY1.png"
            alt=""
          />
        </a>
        <div className="flex gap-3 transition-all bg-white">
          <div
            onClick={() => setState(!state)}
            className="bg-yellow-500 transition-all w-[50px] lg:w-[120px] text-15px gap-2 flex items-center rounded-xl"
          >
            <button className="hidden lg:block p-2">Каталог</button>
            {state ? (
              <div className="flex flex-col">
                <img id="cres" className="w-[30px] qres" src={cres} alt="" />
              </div>
            ) : (
              <img
                id="burgerMenu"
                className="w-[30px]"
                src={burgerMenu}
                alt=""
              />
            )}
          </div>
          <Search />
        </div>
        <Registr />
      </div>
      <div>
        {state ? (
          <div className="relative ">
            <Katalog />
          </div>
        ) : (
          <h1> </h1>
        )}
      </div>
    </div>
  );
};

export default Header;
