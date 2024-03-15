// export default Home;
import React, { useContext, useEffect,useState } from "react";
import axios from 'axios';
import { Navbars } from "../../components/Navbar";
import BookForm from "../../components/BookForm";
import Rooms from "../../components/Rooms";
import CarouselDefault from "../../components/HeroSlider";
import Footer from "../../components/Footer"
import GridGallery from "../../components/Grid-Galery"
import CardDefault from "../../components/Card"
import AccordionCustomIcon from "../../components/Accordion";
import GridLocation from "../../components/Grid-Location";
import AuthContext from "../../context/AuthContext";
function Home() {
  return (
    <>
      <Navbars />
      <CarouselDefault />
      <main className="content ">
        <div className='container mx-auto relative'>
          {/* <div className=' bg-neutral-600 mt-4 p-4 
                lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0  lg:-top-12'>
            <BookForm/> 
          </div> */}
          <CardDefault />
          {/* <Rooms/> */}
          <GridGallery />
          <GridLocation />
          <div>
            <h3 className=" mt-[40px] text-2xl font-bold mb-2"> How does it work?</h3>
            <AccordionCustomIcon />
          </div>

          <Footer />
        </div>
      </main>
    </>
  );
} export default Home;

