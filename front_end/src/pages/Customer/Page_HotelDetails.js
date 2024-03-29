
import React from "react";
import { Navbars } from "../../components/Customer/Layout/Navbar";
import Footer from "../../components/Customer/Layout/Footer";
import CardHotelHome from "../../components/Customer/Card_Hotel_Home";
import HotelDetails from "../../components/Customer/HotelDetails";
import RoominHotel from "../../components/Customer/Room_in_Hotel";

function ShowHotelDetails() {

  return (
    <>
      <Navbars />
      <main className="content ">
        <div className='container mx-auto'>
          <HotelDetails />
          <RoominHotel />
          <CardHotelHome />
          <Footer />
        </div>
      </main>
    </>
  );
} export default ShowHotelDetails;

