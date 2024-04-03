import React, { useState, useEffect } from "react";
import Header_Admin from "../../components/Admin/Layout/Header";
import Sidebar_Admin from "../../components/Admin/Layout/SideBar";
import { useAccessToken } from "../../components/ultiti";
import { getUser } from "../../api/user_API";
import { getHotel } from "../../api/hotel_API";
import { getRoom } from "../../api/room_in_hotel_API";
import { getlistBooking } from "../../api/booking_API";

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
                        <h2
                            className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
                        >
                            Dashboard
                        </h2>

                        <div
                            className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-white bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"

                        >
                            <div className="flex items-center">
                                <svg
                                    className="w-5 h-5 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                    ></path>
                                </svg>
                                <span>Star this project on GitHub</span>
                            </div>
                            <span>View more</span>
                        </div>

                        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">

                            <div
                                className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
                            >
                                <div
                                    className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                        <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                    </svg>


                                </div>
                                <div>
                                    <p
                                        className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                                    >
                                        Total clients
                                    </p>
                                    <p
                                        className="text-lg font-semibold text-gray-700 dark:text-gray-200"
                                    >
                                        {totalUsers} - accounts
                                    </p>
                                </div>
                            </div>

                            <div
                                className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
                            >
                                <div
                                    className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p
                                        className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                                    >
                                        Total hotels
                                    </p>
                                    <p
                                        className="text-lg font-semibold text-gray-700 dark:text-gray-200"
                                    >
                                        {totalHotels} - hotels
                                    </p>
                                </div>
                            </div>

                            <div
                                className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
                            >
                                <div
                                    className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full"
                                >


                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                    </svg>

                                </div>
                                <div>
                                    <p
                                        className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                                    >
                                        Total rooms
                                    </p>
                                    <p
                                        className="text-lg font-semibold text-gray-700 dark:text-gray-200"
                                    >
                                        {totalRooms} - rooms
                                    </p>
                                </div>
                            </div>

                            <div
                                className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
                            >
                                <div
                                    className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <div>
                                    <p
                                        className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                                    >
                                        Total bookings
                                    </p>
                                    <p
                                        className="text-lg font-semibold text-gray-700 dark:text-gray-200"
                                    >
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