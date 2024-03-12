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
        <Navbars/>
        <main className="content ">      
          <div className='container mx-auto'>
            
          
           <HotelComponent />    
           <div>
            <h3 className=" mt-[40px] text-2xl font-bold mb-5"> Availability Room</h3>
            
          </div>
          <CardRoom/>            
          <div>
            <h3 className=" mt-[40px] text-2xl font-bold"> Similar Hotel List</h3>
            
          </div>
        
         <CardDefault/>
        
       
       <Footer/>
     </div>
      </main>
      </>
       
      
    );
  } export default HotelDetails;

