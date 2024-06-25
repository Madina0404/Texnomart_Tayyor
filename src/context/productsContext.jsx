import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const Product = ({children}) => {
  const [statee, setState] = useState([]);
  let web = async ()=>{
    try {
      const response = await axios.get(
        "https://e4143e15dd045d9e.mokky.dev/YangiMahsulotlar0"
      );
      setState(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    web()
  }, []);
  return (
    <ProductContext.Provider value={{ statee }}>
      {children}
    </ProductContext.Provider>
  );
};

export default Product;
