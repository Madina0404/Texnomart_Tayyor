import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from "../components/Carousel";
import Brands from "../components/Brands";
import Products from "../components/products";
import PhoneBanner from "../components/PhoneBanner";

import XitSavdo from "../components/XitSavdo";
import YangiliklarVaBloglar from "../components/YangiliklarVaBloglar";
const Home = () => {
  return (
    <div>
      <Carousel />
      <Brands />
      <br />
      <XitSavdo />
      <br />
      <Products />
      <br />
      <YangiliklarVaBloglar />
      <br />
      <PhoneBanner />
    </div>
  );
}

export default Home