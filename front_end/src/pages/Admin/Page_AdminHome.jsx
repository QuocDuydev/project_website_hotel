import React, { useState, useEffect } from "react";
import Header_Admin from "../../components/Admin/Layout/Header";
import Sidebar_Admin from "../../components/Admin/Layout/SideBar";
import { useAccessToken } from "../../components/ultiti";
import { getUser } from "../../api/user_API";
import { getHotel } from "../../api/hotel_API";
import { getRoom } from "../../api/room_in_hotel_API";
import { getlistBooking } from "../../api/booking_API";
import { StarIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { BuildingOfficeIcon, BuildingStorefrontIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

function AdminHome() {

    const [users, setUser] = useState([]);
    const [hotels, setHotel] = useState([]);
    const [rooms, setRoom] = useState([]);
    const [bookings, setBooking] = useState([]);
    const token = useAccessToken()

    useEffect(() => {
        const fetchData = async () => {
            try {

                const [userData, hotelData, roomData, bookingData] = await
                    Promise.all([getUser(token),
                    getHotel(),
                    getRoom(),
                    getlistBooking(token)
                    ]);

                setUser(userData);
                setHotel(hotelData);
                setRoom(roomData);
                setBooking(bookingData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [token]);

    const totalUsers = users.length;
    const totalHotels = hotels.length;
    const totalRooms = rooms.length;
    const totalBookings = bookings.length;
    return (
        <>
            <div className=" flex h-screen">

                <Sidebar_Admin />

                <div className="flex flex-col flex-1 w-full">
                    <Header_Admin />
                    <div className="container px-6 mx-auto grid relative ">
                        <h2 className="my-6 text-2xl font-semibold text-gray-700">
                            Dashboard
                        </h2>
                        <div
                            className="flex items-center justify-between p-4 mb-8 font-semibold text-white bg-purple-600 rounded-lg shadow-md">
                            <div className="flex items-center">
                               <StarIcon className="h-5 w-5 mr-2 -mt-1"/>
                                <span>Star this project on GitHub</span>
                            </div>
                            <span>View more</span>
                        </div>

                        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">

                            <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
                                <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full">
                                    <UserGroupIcon className="h-6 w-6"/>
                                </div>
                                <div>
                                    <p className="mb-2 text-sm font-medium text-gray-600 ">
                                        Total clients
                                    </p>
                                    <p className="text-lg font-semibold text-gray-700 ">
                                        {totalUsers} - accounts
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center p-4 bg-white rounded-lg shadow-xs">
                                <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full" >
                                   <BuildingOfficeIcon className="h-6 w-6"/>
                                </div>
                                <div>
                                    <p className="mb-2 text-sm font-medium text-gray-600 ">
                                        Total hotels
                                    </p>
                                    <p className="text-lg font-semibold text-gray-700 " >
                                        {totalHotels} - hotels
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center p-4 bg-white rounded-lg shadow-xs" >
                                <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
                                    <BuildingStorefrontIcon className="h-6 w-6"/>

                                </div>
                                <div>
                                    <p className="mb-2 text-sm font-medium text-gray-600 " >
                                        Total rooms
                                    </p>
                                    <p className="text-lg font-semibold text-gray-700 " >
                                        {totalRooms} - rooms
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center p-4 bg-white rounded-lg shadow-xs " >
                                <div className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full " >
                                   <ChatBubbleLeftIcon className="h-6 w-6"/>
                                </div>
                                <div>
                                    <p className="mb-2 text-sm font-medium text-gray-600 ">
                                        Total bookings
                                    </p>
                                    <p className="text-lg font-semibold text-gray-700 ">
                                        {totalBookings} - bookings
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

} export default AdminHome;