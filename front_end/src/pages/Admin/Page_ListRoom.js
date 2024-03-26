import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import Header_Admin from "../../components/Admin/Layout/Header";
import Sidebar_Admin from "../../components/Admin/Layout/SideBar";
import { deleteRoominHotel, getRoominHotel } from "../../api/room_in_hotel_API";
import RoomTable from "../../components/Admin/Room_Table";

function ListRoom() {
    const { hotel_id } = useParams();
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {

                const roomData = await getRoominHotel(hotel_id);

                setRooms(roomData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [hotel_id]);

    const handleDelete = async (roomId) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this room?");
        if (isConfirmed) {
            try {
                await deleteRoominHotel(roomId);
                // Lọc ra danh sách phòng mới sau khi xóa
                const updatedRooms = rooms.filter(room => room.room_id !== roomId);
                setRooms(updatedRooms);
            } catch (error) {
                console.error("Error deleting room:", error);
            }
        }
    };

    return (
        <>
            <div className=" flex h-screen overflow-hidden">

                <Sidebar_Admin />
                <div className="flex flex-col flex-1 w-full">
                    <Header_Admin />

                    <div className=" flex mx-auto justify-center mb-4 mt-4">
                        <Link to={`/admin/${hotel_id}/create-rooms/`}>
                            <Button className=" bg-red-500"> Create Rooms</Button>
                        </Link>
                    </div>

                    <RoomTable rooms={rooms} handleDelete={handleDelete} />
                </div>
            </div>
        </>
    )
} export default ListRoom;