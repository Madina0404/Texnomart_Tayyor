import { createContext, useEffect, useState } from "react";

export const LikeContext = createContext();

const LikeProvider = ({ children }) => {
  const [like, setLike] = useState(() => {
    const storeLike = localStorage.getItem("LikeBasket");
    try {
      return storeLike ? JSON.parse(storeLike) : [];
    } catch (error) {
      console.error("Error parsing basket data from localStorage:", error);
      return [];
    }
  });

  const addLike = (card) => {
    if (!like.some((item) => item.id === card.id)) {
      setLike([...like, card]);
    }
  };
  const removeLike = (id)=>{
    const newData = like.filter((item) => item.id !== id);
    setLike(newData);
  }

  useEffect(() => {
    localStorage.setItem("LikeBasket", JSON.stringify(like));
  }, [like]);

  return (
    <LikeContext.Provider value={{ addLike, like, removeLike }}>{children}</LikeContext.Provider>
  );
};

export default LikeProvider;
