import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "../index.css";
import user from "../assets/icons/user.svg";
import cres from "../assets/icons/cres.svg";

const LoginButton = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogin = (e) => {
    setShowModal(true);
    e.preventDefault();
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="z-40 flex items-center justify-center">
      {showModal && (
        <div className="flex items-center justify-center">
          <div
            ref={modalRef}
            className="absolute top-0 left-0 flex items-center justify-center w-[100vw] h-[100vh] transition-all"
          >
            <div className="card p-3 flex flex-col items-center absolute w-[300px] bg-white z-20 transition-all  border-2 border-yellow-400">
              <div className=" ml-48">
                <button className="text-red-500" onClick={handleClose}>
                  <img src={cres} alt="" />
                </button>
              </div>
              <h1 className=" text-[25px]">Login orqali kirish</h1>
              <input
                className="border-2 mx-2 p-2 outline-yellow-500 rounded-lg w-[250px]"
                type="text"
                placeholder="Login"
              />
              <br />
              <input
                type="text"
                className="border-2 mx-2 p-2 outline-yellow-500 rounded-lg w-[250px]"
                placeholder="Parol"
              />
              <br />
              <button className=" font-bold bg-yellow-500 px-12 rounded-lg py-3">Login orqali kirish</button>
            </div>
          </div>
        </div>
      )}
      <div
        onClick={handleLogin}
        className="flex flex-col items-center justify-center transition-all"
      >
        <img className="w-[20px] " src={user} alt="" />
        <b className="cursor-pointer hidden sm:block">Kirish</b>
      </div>
    </div>
  );
};

export default LoginButton;
