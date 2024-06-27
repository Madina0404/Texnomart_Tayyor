import React, { Suspense } from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import Home from '../pages/Home';
import NotFound from '../components/NotFound';
import Sale from '../pages/Sale';
import MuddatliTolov from '../pages/MuddatliTolov';
import Sotuvchilar from '../pages/Sotuvchilar';
import Smartfonlar from '../pages/smartfonlar';
import Muzlatkichlar from '../pages/muzlatkichlar';
import Changyutgich from '../pages/Changyutgich';
import Noutbooklar from '../pages/Noutbooklar';
import Televizorlar from '../pages/Televizorlar';
import Karzinka from '../pages/Karzinka';
import Likes from '../pages/Likes';
import BarchaQategoriyalar from '../pages/BarchaQategoriyalar';
import DynamicPage1 from '../pages/DynamicPage1';
import Footer from '../components/Footer';
import { Route,Routes } from 'react-router-dom';
import DynamicPage2 from '../pages/DynamicPage2';
import DynamicPage3 from '../pages/DynamicPage3';
const PrivatePages = () => {
  return (
    <div className=" max-w-[1800px] mx-auto">
      <div className={"flex flex-col px-10"}>
        <Header />
        <Navbar />
        <div className="">
          <Suspense fallback={<Loading />} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/MuddatliTolov" element={<MuddatliTolov />} />
            <Route path="/Sotuvchilar" element={<Sotuvchilar />} />
            <Route path="/Smartfonlar" element={<Smartfonlar />} />
            <Route path="/Muzlatkichlar" element={<Muzlatkichlar />} />
            <Route path="/Changyutgich" element={<Changyutgich />} />
            <Route path="/Noutbooklar" element={<Noutbooklar />} />
            <Route path="/Televizorlar" element={<Televizorlar />} />
            <Route path="/Karzinka" element={<Karzinka />} />
            <Route path="/Likes" element={<Likes />} />
            <Route
              path="/BarchaQategoriyalar"
              element={<BarchaQategoriyalar />}
            />
            <Route path="/XitSavdo/:id" element={<DynamicPage1 />} />
            <Route path="/products/:id" element={<DynamicPage2 />} />
            <Route path='/MuddatliTolov/:id' element={<DynamicPage3/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default PrivatePages

