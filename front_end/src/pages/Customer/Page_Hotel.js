// export default Home;
import React, { Component } from "react";
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
import CardRoom from "../../components/Card_Room";
import Filters from "../../components/Filter";
import CardHotel from "../../components/Card_Hotel";
import SearchBox from "../../components/SearchBox";
function ListHotels() {

  return (
    <>
      <Navbars />
      <main className="content ">
        <div className='container mx-auto'>
          <BookForm />
          <div className="grid grid-cols-4">
            <div className="grid gap-4 relative  col-span-1">
              <Filters />
            </div>
            <div className="grid gap-4 relative col-span-3  m-4">
              <CardHotel />
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </>
  );
} export default ListHotels;

