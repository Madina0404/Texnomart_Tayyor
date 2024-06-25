import React from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center my-[100px] mx-auto border-[10px]  p-10 max-w-[500px] border-yellow-500">
      <h1 className="font-bold text-[50px] text-yellow-500 ">Texnomart</h1>
      <div className=" flex gap-8">
        <Link
          to={"/register"}
          className="border border-yellow-500 px-9 rounded-lg"
        >
          Register
        </Link>
        <Link
          to={"/login"}
          className="border border-yellow-500 px-9 rounded-lg"
        >
          Log in
        </Link>
      </div>
    </div>
  );
};

export default AuthPage;
