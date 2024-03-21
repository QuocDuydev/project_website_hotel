import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// url config
import { AuthProvider } from "./context/AuthContext.js";
import AdminRoute from "./context/PrivateRoute.js";

// url interface Customer
import Login from "./pages/Customer/Page_Login.js";
import Register from "./pages/Customer/Page_Register.js";
import Error from "./pages/Page_Error.js";

import Home from "./pages/Customer/Page_Home.js";
import ListSearch from "./pages/Customer/Page_Search.js";
import HotelDetails from "./pages/Customer/Page_HotelDetails.js";

import Booking from "./pages/Customer/Page_Booking";
import ListBooking from "./pages/Customer/Page_ListBooking.js";
import EditBooking from "./pages/Customer/Page_EditBooking.js";

// url interface Admin
import AdminHome from "./pages/Admin/Page_AdminHome.js";

import ListCustomer from "./pages/Admin/Page_ListCustomer.js";
import EditCustomer from "./pages/Admin/Page_EditCustomer.js";

import CreateHotelForm from "./pages/Admin/Page_CreateHotel.js";
import ListHotel from "./pages/Admin/Page_ListHotel.js";
import EditHotel from "./pages/Admin/Page_EditHotel.js";

import CreateRoomForm from "./pages/Admin/Page_CreateRoom.js";
import ListRoom from "./pages/Admin/Page_ListRoom.js";
import EditRoom from "./pages/Admin/Page_EditRoom.js";

import ListBookings from "./pages/Admin/Page_ListBooking.js";
import EditBookings from "./pages/Admin/Page_EditBooking.js";

function App() {
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <Router>
      <AuthProvider>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/error" element={<Error />} />

          <Route path="/" element={<Home />} />
          <Route path="/search-results" element={<ListSearch />} />
          <Route path="/hotel/:hotel_id" element={<HotelDetails />} />
          <Route path="/booking/:hotel_id/:room_id" element={<Booking />} />
          <Route path="/list-booking" element={<ListBooking />} />
          <Route path="/edit-booking/:booking_id" element={<EditBooking />} />

          <Route path="/admin" element={<AdminRoute element={<AdminHome />} isAdmin={isAdmin} />} />
          <Route path="/admin/create-room" element={<AdminRoute element={<CreateRoomForm />} isAdmin={isAdmin} />} />
          <Route path="/admin/list-room" element={<AdminRoute element={<ListRoom />} isAdmin={isAdmin} />} />
          <Route path="/admin/edit-room/:room_id" element={<AdminRoute element={<EditRoom />} isAdmin={isAdmin} />} />
          <Route path="/admin/create-hotel" element={<AdminRoute element={<CreateHotelForm />} isAdmin={isAdmin} />} />
          <Route path="/admin/list-hotel" element={<AdminRoute element={<ListHotel />} isAdmin={isAdmin} />} />
          <Route path="/admin/edit-hotel/:hotel_id" element={<AdminRoute element={<EditHotel />} isAdmin={isAdmin} />} />
          <Route path="/admin/list-customer" element={<AdminRoute element={<ListCustomer />} isAdmin={isAdmin} />} />
          <Route path="/admin/edit-customer/:id" element={<AdminRoute element={<EditCustomer />} isAdmin={isAdmin} />} />
          <Route path="/admin/list-booking" element={<AdminRoute element={<ListBookings />} isAdmin={isAdmin} />} />
          <Route path="/admin/edit-booking/:booking_id" element={<AdminRoute element={<EditBookings />} isAdmin={isAdmin} />} />

        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
