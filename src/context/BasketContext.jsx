import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const BasketContext = createContext();

const KarzinkaProvider = ({ children }) => {
  const [basket, setBasket] = useState(() => {
    const storedBasket = localStorage.getItem("KarzinkaProduct");
    try {
      return storedBasket ? JSON.parse(storedBasket) : [];
    } catch (error) {
      console.error("Error parsing basket data from localStorage:", error);
      return [];
    }
  });

  const addData = (product) => {
    if (!basket.some((item) => item.id === product.id)) {
      setBasket([...basket, product]);
    }
  };

  const removeData = (id) => {
    const newData = basket.filter((item) => item.id !== id);
    setBasket(newData);
  };

  useEffect(() => {
    localStorage.setItem("KarzinkaProduct", JSON.stringify(basket));
  }, [basket]); 

  return (
    <BasketContext.Provider value={{ addData, removeData, basket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default KarzinkaProvider;
