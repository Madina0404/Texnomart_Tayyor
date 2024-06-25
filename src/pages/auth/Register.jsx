import axios from "axios";
import { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../routes/AuthContext";

const Register = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const { setIsAuth } = useContext(AuthContext);

  const postData = async (data) => {
    try {
      const response = await axios.post(
        "https://f91a786be809d86c.mokky.dev/register",
        data
      );
      if (response.status === 201) {
        localStorage.setItem("user-info", JSON.stringify(response.data.data));
        localStorage.setItem("token", response.data.token);
        setIsAuth(true);
      }
      console.log(response.data.token);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const handleData = (e) => {
    e?.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
   
    setErrorMsg("");
    const data = {
      email: email,
      password: password,
    };
    postData(data);
  };

  return (
    <div className=" flex justify-center h-screen items-center  ">
      <div>
        <form onSubmit={handleData}>
          <div className=" max-w-[600px] mx-auto my-[200px] p-7 border py-[50px] rounded-lg border-yellow-500">
            <h1 className=" font-bold text-[30px] text-center">
              Registratsiya
            </h1>
            <div className=" flex flex-col items-center justify-center gap-4">
              <input
                className=" border outline-none  w-[300px] p-2 rounded-lg"
                type="text"
                placeholder="Emailingizni kiriting"
                name="email"
              />
              <input
                className=" border outline-none  w-[300px] p-2 rounded-lg"
                type="password"
                placeholder="Parol"
                name="password"
              />
              <button
                
                className=" bg-yellow-500 font-bold w-[200px] py-2 rounded-md  text-center"
              >
                Kirish
              </button>
            </div>
          </div>
          <p className=" text-red-500  ">{errorMsg}</p>
        </form>
      </div>
    </div>
  );
};

export default Register;

