
import React from "react";
import { Navbars } from "../../components/Customer/Layout/Navbar";
import Footer from "../../components/Customer/Layout/Footer";
import HotelDetails from "../../components/Customer/HotelDetails";
import RoominHotel from "../../components/Customer/Room_in_Hotel";
import Extensions from "../../components/Customer/Layout/Extensions";
import { DefaultTimeline } from "../../components/Customer/Layout/Timeline";
import CardComments from "../../components/Customer/Card_Comment";

function ShowHotelDetails() {

  return (
    <>
      <Navbars />
      <main className="content ">
        <div className='container mx-auto'>
          <HotelDetails />
          <Extensions/>
          <RoominHotel />
          <DefaultTimeline/>
          {/* <CardComments/> */}
          <Footer />
        </div>
      </main>
    </>
  );
} export default ShowHotelDetails;

