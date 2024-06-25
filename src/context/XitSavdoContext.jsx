import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const XitSavdoContext = createContext();

export const XitSavdoProvider = ({children}) => {
  const [wrap, setWrap] = useState([]);
  let web = async ()=>{
    try {
      const response = await axios.get("https://7683e1485efd0f5c.mokky.dev/Savdo");
      setWrap(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    web()
  }, []);
  return (
    <XitSavdoContext.Provider value={{ wrap }}>
      {children}
    </XitSavdoContext.Provider>
  );
};


