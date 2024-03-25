import { useState, useEffect } from "react";
import Header_Admin from "../../components/Admin/Layout/Header";
import Sidebar_Admin from "../../components/Admin/Layout/SideBar";
import { useAccessToken } from "../../components/ultiti";
import { deleteBooking, getlistBooking } from "../../api/booking_API";
import BookingTable from "../../components/Admin/Booking_Table";

function ListBookings() {
    const [bookings, setBookings] = useState([]);
    const isConfirmed = false;
    let token = useAccessToken()

    useEffect(() => {
        const fetchData = async () => {
            try {

                const bookingData = await getlistBooking(token);

                setBookings(bookingData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleDelete = async (item) => {
        const isConfirmed = window.confirm("Are you sure you want to delete?");
        if (isConfirmed) {
            if (item.status === "active") {
                alert("Cannot delete an active booking!");
            } else {
                try {
                    await deleteBooking(item.booking_id, token);
                    const updateBookings = await getlistBooking(token);
                    setBookings(updateBookings);
                    window.location.reload();
                } catch (error) {
                    console.error("Error deleting booking:", error);
                }
            }
        }
    };


    return (
        <>
            <div className=" flex h-screen overflow-hidden">
                <Sidebar_Admin />
                <div className="flex flex-col flex-1 w-full">
                    <Header_Admin />
                    <BookingTable bookings={bookings} handleDelete={handleDelete}/>
                </div>
            </div>
        </>
    )
} export default ListBookings;