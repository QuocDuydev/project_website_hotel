import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

function BookingTable({ booking, handleDelete }) {
    return (

        <div className=" container mb-6 text-red-500 mt-4">
            <Typography variant="h4" color="blue-gray">
                List Your Bookings
            </Typography>
            <div className=" max-w-full px-3 rounded-lg mt-2">
                <div class="container px-6 mx-auto grid relative ">
                    <div class="w-full overflow-hidden rounded-lg shadow-xs">
                        <div class="w-full overflow-x-auto">
                            <table class="w-full whitespace-no-wrap">
                                <thead>
                                    <tr
                                        class="text-xs font-semibold tracking-wide text-center text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
                                    >
                                        <th class="px-4 py-3">Your Name</th>
                                        <th class="px-4 py-3">Check in</th>
                                        <th class="px-4 py-3">Check out</th>
                                        <th class="px-4 py-3">Total amount</th>
                                        <th class="px-4 py-3">Status</th>
                                        <th class="px-4 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody
                                    class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-center"
                                >
                                    {booking.length > 0 ? (
                                        booking.map((item) => (
                                            <tr class="text-gray-700 dark:text-gray-400" >

                                                <td class="px-4 py-3" >
                                                    <div class="flex items-center text-sm">
                                                        <div>
                                                            <p class="font-semibold">{item.name}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-4 py-3 text-sm" >
                                                    {item.checkin}
                                                </td>
                                                <td class="px-4 py-3 text-sm">
                                                    {item.checkout}
                                                </td>
                                                <td class="px-4 py-3 text-xs" >
                                                    <span
                                                        class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600"
                                                    >
                                                        {item.total} $
                                                    </span>
                                                </td>
                                                <td class="px-4 py-3 text-sm" >
                                                    {item.status}
                                                </td>
                                                <td class="px-4 py-3 ">
                                                    <div class=" flex space-x-4 text-sm ml-10">
                                                        <Link to={`/edit-booking/${item.booking_id}`}>
                                                            <button

                                                                class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-green-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                                aria-label="Edit"
                                                            >
                                                                <svg
                                                                    class="w-5 h-5"
                                                                    aria-hidden="true"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path
                                                                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                                                                    ></path>
                                                                </svg>
                                                            </button>
                                                        </Link>

                                                        <button
                                                            onClick={() => handleDelete(item)}
                                                            class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                            aria-label="Delete"
                                                        >
                                                            <svg
                                                                class="w-5 h-5"
                                                                aria-hidden="true"
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path
                                                                    fill-rule="evenodd"
                                                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                                    clip-rule="evenodd"
                                                                ></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                        )) : (
                                        <tr>
                                            <td colSpan="6" className="px-4 py-3 text-center">
                                                No bookings found.
                                            </td>
                                        </tr>)}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default BookingTable;