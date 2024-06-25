import React, { useContext, useState } from "react";
import searchIcon from "../assets/icons/search.svg";
import { ProductContext } from "../context/productsContext";
import { Link } from "react-router-dom";

const Search = () => {
  const { statee } = useContext(ProductContext);
  const [searchResults, setSearchResults] = useState([]);
  const [input, setInput] = useState("");

  function handleSearch(value) {
    setInput(value);
    setSearchResults(
      statee.filter((el) => {
        return el.title
          .toLowerCase()
          .trim()
          .includes(value.toLowerCase().trim());
      })
    );
  }

  return (
    <div>
      <div className="flex border relative px-2 border-yellow-500 w-[300px] sm:w-[500px] lg:w-[700px] xl:w-[1000px] gap-[20px] rounded-xl">
        <img width={20} src={searchIcon} alt="" />
        <input
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Qidirish"
          value={input}
          type="text"
          className="outline-0 h-[50px]"
        />
        {input && (
          <div className="fixed top-[90px] bg-white">
            {searchResults.map((on) => (
              <Link to={`/XitSavdo/${on.id}`} key={on.id}>
                <p className="border-b p-[5px] ">{on.title}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
