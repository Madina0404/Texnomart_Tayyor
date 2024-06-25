import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../../routes/AuthContext";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postData = async (data) => {
    try {
      const response = await axios.post(
        "https://f91a786be809d86c.mokky.dev/auth",
        data
      );
      console.log(response.data);
      if (response.status === 201) {
        setIsAuth(true);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user-info", JSON.stringify(response.data.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleData = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    await postData(data);
  };

  return (
    <div>
      <form
        onSubmit={handleData}
        className="flex flex-col p-5 rounded-md gap-2"
      >
        <div className="max-w-[600px] mx-auto my-[200px] p-8 border py-[50px] rounded-lg border-yellow-500">
          <h1 className="font-bold text-[30px] text-center">
            Login orqali kirish
          </h1>
          <div className="flex flex-col items-center justify-center gap-4">
            <input
              className="border outline-none w-[300px] p-2 rounded-lg"
              type="text"
              placeholder="Foydalanuvchi nomi"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border outline-none w-[300px] p-2 rounded-lg"
              type="password"
              placeholder="Parol"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-yellow-500 font-bold w-[200px] py-2 rounded-md text-center">
              Kirish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
