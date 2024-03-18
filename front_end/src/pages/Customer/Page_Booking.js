import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Navbars } from "../../components/Navbar";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Card,
  Input,
  Button,
  Typography,
  Rating,
  Alert
} from "@material-tailwind/react";
function Booking() {
  const { id, roomid } = useParams();
  const [rooms, setRooms] = useState([]);
  const [hotels, setHotels] = useState({
    hotelname: "",
    hotelimage: null,
    descriptions: "",
    totalroom: "",
    roommap: "",
    location: "",
    rating: "",
    dateadded: "",
  });
  const [booking, setBooking] = useState({
    hotel: id,
    room: roomid,
    name: "",
    email: "",
    phonenumber: "",
    address: "",
    checkin: "",
    checkout: "",
    total: "",
    status: "",
  });
  const [CreateSuccess, setCreateSuccess] = useState(false);
  // const history= useHistory();

  const handleCreate = () => {
    const formData = new FormData();
    formData.append('hotel', booking.hotel);
    formData.append("room", booking.room);
    formData.append('name', booking.name);
    formData.append('email', booking.email);
    formData.append('phonenumber', booking.phonenumber);
    formData.append("address", booking.address);
    formData.append('checkin', booking.checkin);
    formData.append('checkout', booking.checkout);
    formData.append('total', booking.total);
    formData.append('status', booking.status);
    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    // Gửi dữ liệu đặt phòng và tổng tiền tới endpoint API
    axios({
      method: 'post',
      url: `http://localhost:8000/api/bookings/`,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }, 
    })
    .then((response) => {
      console.log("Create successful:", response.data);
      setCreateSuccess(true);
      setTimeout(() => {
        setCreateSuccess(false);
      }, 1000);
      // Redirect tới trang thành công hoặc thông báo thành công
    })
    .catch((error) => {
      console.error("Create failed:", error);
      // Hiển thị thông báo lỗi hoặc xử lý lỗi khác
    });
  }
    const handleChange = (e) => {
      const { name, value } = e.target
      setBooking((prevBooking) => ({ ...prevBooking, [name]: value }));
    };
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    const calculateNumberOfDays = () => {
      if (!startDate || !endDate) return 0;
      const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
      const numberOfDays = Math.round(Math.abs((startDate - endDate) / oneDay));
      return numberOfDays;
    };
  

    // Hàm tính tổng tiền dựa trên giá phòng và số đêm lưu trú
    const calculateTotalPrice = () => {
      const numberOfDays = calculateNumberOfDays();
      return rooms.roomprice * numberOfDays;
    };
    const handleStartDateChange = (date) => {
      setStartDate(date);
      setBooking((prevBooking) => ({
        ...prevBooking,
        checkin: date.toISOString(), // Chuyển đổi ngày sang chuỗi ISO để lưu trữ trong state
      }));
    };
    
    const handleEndDateChange = (date) => {
      setEndDate(date);
      setBooking((prevBooking) => ({
        ...prevBooking,
        checkout: date.toISOString(), // Chuyển đổi ngày sang chuỗi ISO để lưu trữ trong state
      }));
    };

    useEffect(() => {
      const numberOfDays = calculateNumberOfDays();
      const pricePerNight = rooms.roomprice;
      const totalPrice = numberOfDays * pricePerNight;
      setTotalPrice(totalPrice);
    }, [booking.checkin, booking.checkout, rooms.roomprice]);
    useEffect(() => {
      // Fetch hotel details
      axios
        .get(`http://localhost:8000/api/hotels/${id}/`)
        .then((response) => {
          // console.log("Hotel Data:", response.data);
          setHotels(response.data);
          window.scrollTo(0, 0);
          console.log(roomid)
        })
        .catch((error) => {
          console.error("Error fetching hotel data:", error);
        });

      // Fetch rooms for the hotel
      axios
        .get(`http://localhost:8000/api/hotels/${id}/rooms/${roomid}`)
        .then((response) => {
          setRooms(response.data[0]);
          console.log("Room Data:", response.data);
        })
        .catch((err) => console.log(err));
    }, [id, roomid]);

    return (
      <>
        <Navbars />
        {CreateSuccess && (
          <Alert
            className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
          >
            Create successfuly !!
          </Alert>
        )}
        <div className="grid grid-cols-6">
          <div className="grid gap-4 relative col-span-2  ">
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
                      className="mb-2  ml-2  "
                    >
                      <DatePicker className="text-black" name="checkin" selected={booking.checkin ? new Date(booking.checkin) : null} onChange={(date) => setBooking((prevBooking) => ({ ...prevBooking, checkin: date }))} dateFormat="dd/MM/yyyy" />
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
                      <DatePicker name="checkout"  selected={booking.checkout ? new Date(booking.checkout) : null} onChange={(date) => setBooking((prevBooking) => ({ ...prevBooking, checkout: date }))} dateFormat="dd/MM/yyyy" />
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

                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className=" text-red-600"

                  >
                    Price room/nights: {rooms.roomprice}$
                  </Typography>


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
                      value={booking.total}
                      color="blue-gray"
                      className="mb-2 uppercase"
                    >
                      {totalPrice} $
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 relative col-span-4 ml-3 mb-3 mt-4">
            <div className=" max-w-full px-3 rounded-lg mt-2 ">
              <div className=" border-2 px-3 py-3 rounded-md ">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-3"
                >
                  Your rooms details
                </Typography>
                <div className="flex">
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="mb-2 text-blue-700"
                  >
                    Rooms Name:
                  </Typography>
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="mb-2  ml-2 "
                  >
                    {rooms.roomname}
                  </Typography>
                </div>
                <div className=" flex ">
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="mb-2 text-blue-700"
                  >
                    Descriptions:
                  </Typography>
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="mb-2  ml-2"
                  >
                    {typeof rooms.descriptions === 'string' ? rooms.descriptions.split(' ').slice(0, 25).join(' ') : ''}
                  </Typography>
                </div>
                <div class="border-b mb-2"></div>
                <div className=" flex">
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="mb-2 text-blue-700"
                  >
                    Number of guests
                  </Typography>
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="mb-2  ml-2"
                  >
                    <span className="mx-auto px-2 py-1 text-center text-lg leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">{rooms.roomoccupancy} - person</span>
                  </Typography>
                </div>

                <Typography
                  variant="h3"
                  color="blue-gray"
                  className=" text-red-600"

                >
                  Price room/nights: {rooms.roomprice}$
                </Typography>


              </div>
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
                          size="lg"
                          name="name"
                          value={booking.name}
                          onChange={handleChange}
                          placeholder="Enter  username..."
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
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
                          type="email"
                          multiple
                          size="lg"
                          name="email"
                          value={booking.email}
                          onChange={handleChange}
                          placeholder="Enter email..."
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-700"

                        />
                      </div>

                    </div>
                    <div className="mb-1 w-1/2 p-4 ">
                      <div>
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="mb-2"
                        >
                          Phone number
                        </Typography>

                        <Input
                          type="number"
                          multiple
                          size="lg"
                          name="phonenumber"
                          value={booking.phonenumber}
                          onChange={handleChange}
                          placeholder="Enter Phone number..."
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                        />
                      </div>
                      <div>
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="mb-2 mt-4"
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
                          placeholder="Enter your Address..."
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                        />
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={handleCreate}
                    className="mx-auto w-2/4 bg-red-600 uppercase text-sm" fullWidth>
                    Book nows
                  </Button>

                </form>
              </Card>
            </div>
          </div>
        </div>

      </>
    );
  } export default Booking;