

import { useContext, useEffect, useState } from "react";
import PublicPages from "./routes/PublicPages";
import { useNavigate } from "react-router-dom";
import PrivatePages from "./routes/PrivatePages";
import { AuthContext } from "./routes/AuthContext";



function App() {
const [count, setCount] = useState()
const navigate = useNavigate()
const {isAuth} = useContext(AuthContext)

console.log(isAuth);
  return (
    <div>
      {isAuth ? <PrivatePages/> : <PublicPages/> }
    </div>
  );
}

export default App;
