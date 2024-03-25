import React from "react";
import DatePicker from 'react-datepicker';
import { Typography, Rating } from "@material-tailwind/react";
import TotalPrice from "./Total_Price";

function CardLeftBooking({ booking, setBooking, rooms, hotels, calculateNumberOfDays }) {
    return (
        <div className=" max-w-full px-3 rounded-lg mt-2 mb-3 ">
            <div className="mb-1 w-full h-full p-4">
              <div className=" border-2 px-3 py-3 rounded-md">
                {hotels.rating && (
                  <Rating
                    value={hotels.rating}
                    unratedColor="red"
                    ratedColor="red"
                    readonly
                  />
                )}
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-2 text-blue-700"
                >
                  {hotels.hotelname}
                </Typography>
                <div className=" flex mt-1">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>

                  <Typography variant="h6" color="blue-gray" className="ml-1">{hotels.roommap} - {hotels.location}</Typography>
                </div>
              </div>

              <div className=" border-2 px-3 py-3 rounded-md mt-3">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-3"
                >
                  Your booking details
                </Typography>
                <div className=" ">
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="mb-2 text-blue-700"
                  >
                    Check in:
                  </Typography>
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="mb-2  ml-2 "
                  >
                    <DatePicker
                      className="text-center"
                      name="checkin"
                      selected={booking?.checkin ? new Date(booking.checkin) : null}
                      minDate={new Date()} // Chỉ cho phép chọn từ ngày hiện tại trở đi
                      onChange={(date) => setBooking((prevBooking) => ({ ...prevBooking, checkin: date }))}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Select date checkin"
                    />
                  </Typography>
                </div>
                <div className=" ">
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="mb-2 text-blue-700"
                  >
                    Check out:
                  </Typography>
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="mb-2  ml-2"
                  >
                    <DatePicker
                      name="checkout"
                      className="text-center"
                      selected={booking?.checkout ? new Date(booking.checkout) : null}
                      onChange={(date) => setBooking((prevBooking) => ({ ...prevBooking, checkout: date }))}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Select date checkout"
                      excludeDates={[booking?.checkin]}
                      minDate={booking?.checkin ? new Date(booking.checkin) : null} // Set minDate là ngày check-in
                    />
                  </Typography>
                </div>
                <div class="border-b mb-2"></div>
                <div className=" flex">
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="mb-2 text-blue-700"
                  >
                    Total length of stay:
                  </Typography>
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="mb-2  ml-2"
                  >
                    {calculateNumberOfDays()} nights
                  </Typography>
                </div>
                {rooms.map((item) => (
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className=" text-red-600"

                  >
                    Price room/nights: {item.roomprice}$
                  </Typography>

                ))}


              </div>

              <div className=" border-2 px-3 py-3 rounded-md mt-3">

                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-2 uppercase"
                >
                  Totals
                </Typography>
                <div className="px-2 bg-slate-300 text-center">
                  <Typography
                    variant="h5"
                    name="total"
                    color="blue-gray"
                    className="mb-2 uppercase"
                  >
                    <TotalPrice checkin={booking?.checkin} checkout={booking?.checkout} rooms={rooms} />
                  </Typography>
                </div>
              </div>
            </div>
          </div>
    );
}
export default CardLeftBooking;