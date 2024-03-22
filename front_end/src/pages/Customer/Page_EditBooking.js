import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header_Admin from "../../components/Admin/Layout/Header";
import Sidebar_Admin from "../../components/Admin/Layout/SideBar";
import { useAccessToken } from "../../components/ultiti";
import axios from "axios";
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
    Alert
} from "@material-tailwind/react";
import { Navbars } from "../../components/Customer/Layout/Navbar";

function EditBooking() {
    let token = useAccessToken()
    const { booking_id } = useParams();
    const [hotel, setHotel] = useState([]);
    const [room, setRoom] = useState([]);
    const [booking, setBooking] = useState({
        user: "",
        hotel: "",
        room: "",
        name: "",
        email: "",
        phonenumber: "",
        address: "",
        checkin: "",
        checkout: "",
        total: 0,
        status: "",
    });
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/hotels/`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            } )
            .then((response) => {
                setHotel(response.data);

            })
            .catch((error) => {
                console.error("Error fetching hotel data:", error);
            });

        axios
            .get(`http://localhost:8000/api/rooms/`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            } )
            .then((response) => {
                setRoom(response.data);


            })
            .catch((error) => {
                console.error("Error fetching room data:", error);
            });

        axios
            .get(`http://localhost:8000/api/bookings/${booking_id}/`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            } )
            .then((response) => {
                setBooking(response.data);

            })
            .catch((error) => {
                console.error("Error fetching booking data:", error);
            });


    }, [booking_id]);
    const formatDate = (date) => {
        if (!date) return '';

        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        // Thêm số 0 phía trước nếu tháng hoặc ngày là một chữ số
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;

        return `${year}-${month}-${day}`;
    };
    const handleUpdate = () => {
        const formData = new FormData();
        formData.append('user', booking.user);
        formData.append('hotel', booking.hotel);
        formData.append("room", booking.room);
        formData.append('name', booking.name);
        formData.append('email', booking.email);
        formData.append('phonenumber', booking.phonenumber);
        formData.append("address", booking.address);
        formData.append('checkin', formatDate(new Date(booking.checkin)));
        formData.append('checkout', formatDate(new Date(booking.checkout)));
        formData.append('total', booking.total);
        formData.append('status', booking.status);
        // for (var pair of formData.entries()) {
        //   console.log(pair[0] + ', ' + pair[1]);
        // }


        axios({
            method: 'put',
            url: `http://localhost:8000/api/bookings/${booking_id}/ `,
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' ,
            'Authorization': `Bearer ${token}`},
        })
            .then((response) => {
                console.log("Update successful:", response.data);
                setUpdateSuccess(true);
                setTimeout(() => {
                    setUpdateSuccess(false);
                }, 1000);

                // Redirect to home page after 1 seconds
                setTimeout(() => {
                    navigate("/list-booking");
                }, 1000);
            })
            .catch((error) => {
                console.error("Update failed:", error);

            });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBooking((prevBooking) => ({ ...prevBooking, [name]: value }));
    };
    const selectedHotel = hotel.find((item) => item.hotel_id === booking.hotel);
    const selectedRoom = room.find((items) => items.room_id === booking.room);
    return (
        <>
            <Navbars />
            <div className=" ">

                <div className="flex flex-col flex-1 w-full">

                    {updateSuccess && (
                        <Alert
                            className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
                        >
                            Update successfuly !!
                        </Alert>
                    )}
                    <div className=" container m-4 text-red-500">
                        <Typography variant="h4" color="blue-gray">
                            Edit the Bookings
                        </Typography>
                        <div className=" max-w-full px-3 rounded-lg mt-2">

                            <Card color="transparent" shadow={false}>
                                <form>
                                    <div className="flex mx-auto ">
                                        <div className="mb-1 w-1/2 p-4">

                                            <div>
                                                <Typography
                                                    variant="h6"
                                                    color="blue-gray"
                                                    className="mb-2"
                                                >
                                                    Full Name
                                                </Typography>

                                                <Input
                                                    type="text"
                                                    multiple
                                                    size="lg"
                                                    name="name"
                                                    value={booking.name}
                                                    onChange={handleChange}
                                                    placeholder="Enter Descriptions about Rooms..."
                                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                />
                                            </div>
                                            <div>
                                                <Typography
                                                    variant="h6"
                                                    color="blue-gray"
                                                    className="mb-2 mt-4"
                                                >
                                                    Email
                                                </Typography>
                                                <Input
                                                    type="text"
                                                    multiple
                                                    size="lg"
                                                    name="email"
                                                    value={booking.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter price rooms..."
                                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-700"
                                                />
                                            </div>
                                            <div>
                                                <Typography
                                                    variant="h6"
                                                    color="blue-gray"
                                                    className="mb-2 mt-3"
                                                >
                                                    Hotel Name
                                                </Typography>
                                                <Input
                                                    type="text"
                                                    size="lg"
                                                    name="hotel"
                                                    value={selectedHotel ? selectedHotel.hotelname : ''}
                                                    placeholder="Enter name rooms..."
                                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                    readOnly // Make the input readOnly
                                                />
                                            </div>
                                            <div>
                                                <Typography
                                                    variant="h6"
                                                    color="blue-gray"
                                                    className="mb-2 mt-3"
                                                >
                                                    Occupancy Room
                                                </Typography>
                                                <Input
                                                    type="text"
                                                    size="lg"
                                                    name="room"
                                                    value={selectedRoom ? selectedRoom.roomoccupancy : ''}
                                                    placeholder="Enter name rooms..."
                                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                    readOnly // Make the input readOnly
                                                />
                                            </div>
                                            <div>
                                                <Typography
                                                    variant="h6"
                                                    color="blue-gray"
                                                    className="mb-2 mt-3"
                                                >
                                                    Check in
                                                </Typography>

                                                <Input
                                                    type="date"
                                                    multiple
                                                    size="lg"
                                                    name="checkin"
                                                    value={booking.checkin}
                                                    onChange={handleChange}
                                                    placeholder="Enter Occupancy rooms..."
                                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-1 w-1/2 p-4">

                                            <div>
                                                <Typography
                                                    variant="h6"
                                                    color="blue-gray"
                                                    className="mb-2"
                                                >
                                                    Phone Number
                                                </Typography>

                                                <Input
                                                    type="number"
                                                    multiple
                                                    size="lg"
                                                    name="phonenumber"
                                                    value={booking.phonenumber}
                                                    onChange={handleChange}
                                                    placeholder="Enter Numbers rooms..."
                                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                    

                                                />

                                            </div>
                                            <div>
                                                <Typography
                                                    variant="h6"
                                                    color="blue-gray"
                                                    className="mb-2 mt-3"
                                                >
                                                    Address
                                                </Typography>

                                                <Input
                                                    type="text"
                                                    multiple
                                                    size="lg"
                                                    name="address"
                                                    value={booking.address}
                                                    onChange={handleChange}
                                                    placeholder="Enter Numbers rooms..."
                                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                                                />

                                            </div>
                                            <div>
                                                <Typography
                                                    variant="h6"
                                                    color="blue-gray"
                                                    className="mb-2 mt-3"
                                                >
                                                    Number Rooms
                                                </Typography>

                                                <Input
                                                    type="text"
                                                    size="lg"
                                                    name="room"
                                                    value={selectedRoom ? selectedRoom.roomnumber : ''}
                                                    onChange={handleChange}
                                                    placeholder="Enter name rooms..."
                                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                    readOnly

                                                />
                                            </div>
                                            <div>
                                                <Typography
                                                    variant="h6"
                                                    color="blue-gray"
                                                    className="mb-2 mt-3"
                                                >
                                                   Total Amount
                                                </Typography>
                                                <Input
                                                    type="text"
                                                    size="lg"
                                                    name="total"
                                                    value={booking.total} 
                                                    placeholder="Enter name rooms..."
                                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                    readOnly // Make the input readOnly
                                                />
                                            </div>
                                            <div>
                                                <Typography
                                                    variant="h6"
                                                    color="blue-gray"
                                                    className="mb-2 mt-4"
                                                >
                                                    Check out
                                                </Typography>

                                                <Input
                                                    type="date"
                                                    multiple
                                                    size="lg"
                                                    name="checkout"
                                                    value={booking.checkout}
                                                    onChange={handleChange}
                                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                    readOnly
                                                />

                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        onClick={handleUpdate}
                                        className="mx-auto w-2/4 bg-red-600 uppercase text-sm" fullWidth>
                                        Update nows
                                    </Button>

                                </form>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} export default EditBooking;