
import React, { useState, useEffect } from "react";
import { Navbars } from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useAccessToken } from "../../components/ultiti";
import { getBooking } from "../../api/booking_API";
import { deleteBooking } from "../../api/booking_API";
import BookingTable from "../../components/Customer/Booking_Table";


function ListBooking() {
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
          <BookingTable booking={booking} handleDelete={handleDelete} />
          <Footer />
        </div>
      </main>
    </>
  );
} export default ListBooking;

