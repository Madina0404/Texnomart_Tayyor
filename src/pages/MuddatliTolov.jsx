import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import Love from "../assets/icons/Love.svg";
import { BasketContext } from "../context/BasketContext";
import { LikeContext } from "../context/LikeContext";
import { Link } from "react-router-dom";
const MuddatliTolov = () => {
  const [data, setData] = useState([]);
  const { addData } = useContext(BasketContext);
  const { addLike } = useContext(LikeContext);
  const [Clicked, setClicked] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://6f78cf289d2961c0.mokky.dev/MUddatliTolov"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ContainerM">
      <div className="flex justify-between items-center">
        <h1 className=" text-[25px]">Фоизларсиз муддатли тўлов!</h1>
        <p>Товарлар 20 / 3802</p>
      </div>
      <hr />
      <div className=" flex  justify-between gap-2">
        {/* chap */}
        <div className="">
          <b>Категориялар</b>
          <div className=" flex flex-col gap-2 items-start">
            <button className=" hover:bg-yellow-100 p-2 rounded-md ">
              <Link to={'/BarchaQategoriyalar'}>Barcha Kategoriyalar</Link>
            </button>
            <button className=" hover:bg-yellow-100 p-2 rounded-md ">
              Televizorlar
            </button>
            <button className=" hover:bg-yellow-100 p-2 rounded-md ">
              Noutbooklar
            </button>
            <button className=" hover:bg-yellow-100 p-2 rounded-md ">
              CHangyutgichlar
            </button>
            <button className=" hover:bg-yellow-100 p-2 rounded-md ">
              Muzlatgichlar
            </button>
            <button className=" hover:bg-yellow-100 p-2 rounded-md mb-2">
              Xavo sovutgichlari
            </button>
          </div>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem className=" w-[250px] transition-all">
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <b>Mavjudligi</b>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <button className=" flex items-center gap-3 border-2 border-yellow-500 p-2 rounded-lg">
                  <input type="checkbox" className=" bg-yellow-500" />
                  <p>Bugun olib ketish</p>
                </button>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <b>Brand</b>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div>
                  <div className=" flex items-center gap-3">
                    <input type="checkbox" />
                    <p>Braun 73</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <input type="checkbox" />
                    <p>Philips 97</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <input type="checkbox" />
                    <p>Artel 79</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <input type="checkbox" />
                    <p>Tefal 119</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <input type="checkbox" />
                    <p>Hair 34</p>
                  </div>
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <div></div>
        </div>
        {/* o'ng */}

        <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 mt-3 mb-3 items-center justify-center">
          {data.map((post, index) => (
            <li key={index} className=" border-2 px-2 py-3 rounded-lg">
              <div className=" flex justify-between">
                <p className=" bg-green-500 px-4 w-[80px] text-white rounded-lg">
                  0*0*12
                </p>

                <div onClick={() => addLike(post?.id)}>
                  <img
                    onClick={(e) => {
                      if (!Clicked) {
                        e.target.style.backgroundColor = "red";
                        setClicked(true);
                      } else {
                        e.target.style.backgroundColor = "white";
                        setClicked(false);
                      }
                    }}
                    src={Love}
                    alt=""
                  />
                </div>
              </div>
              <Link to={`/MuddatliTolov/${post.id}`}>
                <img
                  src={post.img}
                  style={{ height: 230, width: 150 }}
                  className=" object-cover Ttext-center ml-11"
                  alt=""
                />
              </Link>
              <p>{post.title}</p>
              <button className=" bg-yellow-100 px-5 text-start rounded-lg">
                {post.oy1}
              </button>
              <br />
              <br />
              <button className=" bg-gray-100 px-5 text-start rounded-lg">
                {post.oy2}
              </button>
              <br />
              <div className=" flex justify-between items-center mt-3">
                <b>{post.price}</b>
                <div
                  onClick={() => addData(post)}
                  className="w-[30px] border-yellow-400"
                >
                  <img
                    className=" border-2 cursor-pointer rounded-lg  border-yellow-400"
                    src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-12-1024.png"
                    alt=""
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MuddatliTolov;
