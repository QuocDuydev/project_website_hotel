
import React, { useState, useEffect } from "react";
import { Navbars } from "../../components/Customer/Layout/Navbar";
import Footer from "../../components/Customer/Layout/Footer";

import { useAccessToken } from "../../components/ultiti";
import { getBooking } from "../../api/booking_API";
import { deleteBooking } from "../../api/booking_API";
import ListBookings from "../../components/Customer/List_Booking";

function ShowListBooking() {
  const token = useAccessToken();
  const [booking, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const bookingData = await getBooking(token);
    
        setBookings(bookingData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [token]);

  const handleDelete = async (item) => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (isConfirmed) {
      if (item.status === "active") {
        alert("Cannot delete an active booking!");
      } else {
        try {
          await deleteBooking(item.booking_id, token);
          const updatedBookings = await getBooking(token);
          setBookings(updatedBookings);
          window.location.reload();
        } catch (error) {
          console.error("Error deleting booking:", error);
        }
      }
    }
  };

  return (
    <>
      <Navbars />
      <main className="content">
        <div className=" container mx-auto">
          <ListBookings booking={booking} handleDelete={handleDelete} />
          <Footer />
        </div>
      </main>
    </>
  );
} export default ShowListBooking;

