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
import HotelComponent from "../../components/HotelDetails";
function HotelDetails() {

  return (
    <>
      <Navbars />
      <main className="content ">
        <div className='container mx-auto'>
          <HotelComponent />
          <CardDefault />
          <Footer />
        </div>
      </main>
    </>
  );
} export default HotelDetails;

