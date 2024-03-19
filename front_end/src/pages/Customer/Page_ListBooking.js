// export default Home;
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Navbars } from "../../components/Navbar";
import BookForm from "../../components/BookForm";
import Rooms from "../../components/Rooms";
import CarouselDefault from "../../components/HeroSlider";
import Footer from "../../components/Footer"
import GridGallery from "../../components/Grid-Galery"
import CardDefault from "../../components/Card"
import AccordionCustomIcon from "../../components/Accordion";
import GridLocation from "../../components/Grid-Location";
import CardRoom from "../../components/Card_Room";
import Filters from "../../components/Filter";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
function ListBooking() {
  const [data, setData] = useState([]);
  const [hotel, setHotel] = useState([]);
  const isConfirmed = false;
  const refreshList = () => {
    axios
      .get("http://localhost:8000/api/bookings/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
 
  useEffect(() => {
    axios
    .get(`http://localhost:8000/api/hotels/`)
    .then((response) => {
      setHotel(response.data);
      
      // console.log(room.roomimage)
    })
    .catch((error) => {
      console.error("Error fetching room data:", error);
    });

    refreshList();
  }, []);

  const handleDelete = (item) => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (isConfirmed) {
      axios
        .delete(`http://localhost:8000/api/bookings/${item.id}/`)
        .then((res) => refreshList())
        .catch((error) => console.log(error));
    };
  }
  const selectedHotel = hotel.find((hotelid) => hotelid.id === data.hotel);
  return (
    <>
      <Navbars />
      <main className="content ">
        <div className='container mx-auto'>
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
                        {data.map((item) => (
                          <tr class="text-gray-700 dark:text-gray-400">

                            <td class="px-4 py-3" >
                              <div class="flex items-center text-sm">
                                <div>
                                  <p class="font-semibold">{item.name}</p>
                                </div>
                              </div>
                            </td>
                            <td class="px-4 py-3 text-sm" key={item.id}>
                              {item.checkin}
                            </td>
                            <td class="px-4 py-3 text-sm" key={item.id}>
                              {item.checkout}
                            </td>
                            <td class="px-4 py-3 text-xs" key={item.id}>
                              <span
                                class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600"
                              >
                                {item.total} $
                              </span>
                            </td>
                            <td class="px-4 py-3 text-sm" key={item.id}>
                              {item.status}
                            </td>
                            <td class="px-4 py-3 ">
                              <div class=" flex space-x-4 text-sm ml-10">
                                <Link to={`/edit-booking/${item.id}`}>
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
                        ))}

                      </tbody>
                    </table>
                  </div>
                  {/* <div
                            class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
                        >
                            <span class="flex items-center col-span-3">
                                Showing 21-30 of 100
                            </span>
                            <span class="col-span-2"></span>
                        
                            <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                                <nav aria-label="Table navigation">
                                    <ul class="inline-flex items-center">
                                        <li>
                                            <button
                                                class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                                                aria-label="Previous"
                                            >
                                                <svg
                                                    class="w-4 h-4 fill-current"
                                                    aria-hidden="true"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                        clip-rule="evenodd"
                                                        fill-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                            >
                                                1
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                            >
                                                2
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                                            >
                                                3
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                            >
                                                4
                                            </button>
                                        </li>
                                        <li>
                                            <span class="px-3 py-1">...</span>
                                        </li>
                                        <li>
                                            <button
                                                class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                            >
                                                8
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                                            >
                                                9
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                                                aria-label="Next"
                                            >
                                                <svg
                                                    class="w-4 h-4 fill-current"
                                                    aria-hidden="true"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                        clip-rule="evenodd"
                                                        fill-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </span>
                        </div> */}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
} export default ListBooking;
