import React, { useEffect, useState } from "react";
import { useAccessToken } from "../../components/ultiti";
import { useParams, useNavigate } from "react-router-dom";
import Header_Admin from "../../components/Admin/Layout/Header";
import Sidebar_Admin from "../../components/Admin/Layout/SideBar";
import axios from "axios";
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
    Alert,
    Select,
    Option
} from "@material-tailwind/react";

function EditBookings() {
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
            })
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
            })
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
            })
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
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
        })
            .then((response) => {
                console.log("Update successful:", response.data);
                setUpdateSuccess(true);
                setTimeout(() => {
                    setUpdateSuccess(false);
                }, 1000);

                // Redirect to home page after 1 seconds
                setTimeout(() => {
                    navigate("/admin/list-booking");
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
            <div className=" flex h-screen overflow-hidden">

                <Sidebar_Admin />
                <div className="flex flex-col flex-1 w-full">
                    <Header_Admin />
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
                                                    Choise Process
                                                </Typography>

                                                <select
                                                    type="text"
                                                    size="lg"
                                                    name="status"
                                                    value={booking.status}  // Giá trị trạng thái hiện tại được chọn từ cơ sở dữ liệu
                                                    onChange={handleChange}
                                                    placeholder="Enter name rooms..."
                                                    className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full border-2 px-2 py-2 rounded-md">

                                                    <option value="processing">Processing </option>
                                                    <option value="active">Active </option>

                                                </select>
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
} export default EditBookings;