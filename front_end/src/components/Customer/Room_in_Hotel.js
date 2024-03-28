import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useAccessToken } from "../ultiti";
import Utilities from "./Layout/Utilities";
import { getRoominHotel } from "../../api/room_in_hotel_API";
import { getBooking } from "../../api/booking_API";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    Rating
} from "@material-tailwind/react";

function RoominHotel() {
    const { hotel_id } = useParams();
    let token = useAccessToken()
    const [rooms, setRooms] = useState([]);
    const [bookedRoomIds, setBookedRoomIds] = useState([]);
    const [hotels, setHotel] = useState([]);
    const [booking, setBooking] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(!!token);
        const fetchData = async () => {
            try {
                // Fetch hotel and booking data
                const [hotelData, bookingData] = await Promise.all([getRoominHotel(hotel_id, token), getBooking(token)]);

                // Extract booked room ids from booking data
                const bookedRoomIds = bookingData.map(booking => booking.room);
                setBookedRoomIds(bookedRoomIds);

                // Filter available rooms
                const availableRooms = hotelData.filter(room => !bookedRoomIds.includes(room.room_id));
                setRooms(availableRooms);
                console.log(availableRooms);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [hotel_id, token]);


    return (
        <>
            <div className='container mx-auto relative'>
                <Typography variant="h4"
                    className=" mt-[40px] font-bold mb-5">
                    Availability Room
                </Typography>
                {isLoggedIn ? (
                    <>
                        {rooms.length > 0 ? (
                            rooms.map(rooms => (
                                <div key={rooms.room_id}>
                                    <Card className="w-full mx-auto mb-2 border-2">
                                        <CardBody className="m-3 flex">
                                            <img
                                                src={rooms.roomimage}
                                                className="h-30 w-1/3 rounded-lg object-cover object-center hidden lg:block md:block"
                                            />
                                            <div className="m-3">
                                                <Typography variant="h5" color="blue-gray" className="mb-2 text-blue-800">
                                                    {rooms.roomname} - {rooms.hotel}
                                                </Typography>
                                                <Typography className="text-justify">
                                                    {rooms.descriptions.slice(0, 100)}
                                                </Typography>
                                                <Typography className="text-right mb-3 text-xl font-bold">
                                                    $ {rooms.roomprice}
                                                </Typography>

                                                <Utilities />

                                                <div className="flex justify-between items-center mt-3">
                                                    <span className="mx-auto px-2 py-2 text-center text-lg leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">{rooms.roomoccupancy} - person</span>
                                                    <Link to={`/booking/${hotel_id}/${rooms.room_id}`}>
                                                        <Button className=" bg-black"
                                                        // onClick={() => handleSetRoomId(rooms.room_id)}
                                                        >Booking Nows</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))
                        ) : (
                            <div>
                                <h3 colSpan="6" className="px-4 py-3 text-center text-red-600 font-semibold">
                                    The hotel currently has no available rooms!
                                </h3>
                            </div>)}
                    </>
                ) : (
                    <div>
                        <h3 className="px-4 py-3 text-center text-red-600 font-semibold">
                            Please log in or sign up to view the list of rooms and make a booking!
                        </h3>
                    </div>
                )}
            </div>
        </>

    );
}
export default RoominHotel;