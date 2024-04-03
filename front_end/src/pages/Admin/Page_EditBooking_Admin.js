
import React, { useEffect, useState } from "react";
import { Alert } from "@material-tailwind/react";
import { useParams, useNavigate } from "react-router-dom";

import Header_Admin from "../../components/Admin/Layout/Header";
import Sidebar_Admin from "../../components/Admin/Layout/SideBar";

import { useAccessToken } from "../../components/ultiti";
import { getHotel } from "../../api/hotel_API";
import { getRoom } from "../../api/room_in_hotel_API";
import { getBookingId } from "../../api/booking_API";
import EditBookingForm from "../../components/Admin/EditBooking_Form";
import { putBooking } from "../../api/booking_API";

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
        datebooking: "",
        status: "",

    });
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        // Fetch hotel details
        const fetchData = async () => {
            try {

                const [hotelData, roomData, bookingData] = await
                    Promise.all([getHotel(),
                    getRoom(),
                    getBookingId(booking_id, token)
                    ]);

                setHotel(hotelData);
                setRoom(roomData);
                setBooking(bookingData)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [booking_id, token]);

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
    const handleUpdate = async () => {
        try {
            const bookingData = {
                user: booking.user,
                hotel: booking.hotel,
                room: booking.room,
                name: booking.name,
                email: booking.email,
                phonenumber: booking.phonenumber,
                address: booking.address,
                checkin: formatDate(new Date(booking.checkin)),
                checkout: formatDate(new Date(booking.checkout)),
                total: booking.total,
                datebooking: booking.datebooking,
                status: booking.status,
            };

            const response = await putBooking(booking_id, token, bookingData);
            console.log(booking.status);
            console.log("Update successful:", response.data);
            setUpdateSuccess(true);
            setTimeout(() => {
                setUpdateSuccess(false);
                navigate("/admin/list-booking");
            }, 1000);
        } catch (error) {
            console.error('Update failed:', error);
            // Hiển thị thông báo lỗi hoặc xử lý lỗi khác
        }
    };
    const handleChange = (value, name) => {
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
                    <EditBookingForm booking={booking} handleChange={handleChange} handleUpdate={handleUpdate} selectedHotel={selectedHotel} selectedRoom={selectedRoom} />
                </div>
            </div>
        </>
    );
} export default EditBookings;