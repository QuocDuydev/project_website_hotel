import { useState, useEffect } from "react";
import Header_Admin from "../../components/Admin/Layout/Header";
import Sidebar_Admin from "../../components/Admin/Layout/SideBar";
import { useAccessToken } from "../../components/ultiti";
import { getHotel } from "../../api/hotel_API";
import { deleteHotel } from "../../api/hotel_API";
import HotelTable from "../../components/Admin/Hotel_Table";

function ListHotelAdmin() {
    const token = useAccessToken()
    const [hotels, setHotels] = useState([]);
    const isConfirmed = false;
    useEffect(() => {
        const fetchData = async () => {
            try {

                const hotelData = await getHotel();

                setHotels(hotelData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleDelete = async (item) => {
        const isConfirmed = window.confirm("Are you sure you want to delete?");
        if (isConfirmed) {
            try {
                await deleteHotel(item.hotel_id, token);
                const updateHotels = await getHotel();
                setHotels(updateHotels);
                window.location.reload();
            } catch (error) {
                console.error("Error deleting user:", error);
            }
        };
    }

    return (
        <>
            <div className=" flex h-screen overflow-hidden">
                <Sidebar_Admin />
                <div className="flex flex-col flex-1 w-full">
                    <Header_Admin />
                    <HotelTable hotels={hotels} handleDelete={handleDelete} />
                </div>
            </div>
        </>
    )
} export default ListHotelAdmin;