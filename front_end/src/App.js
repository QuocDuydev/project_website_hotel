import "./index.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// url config
import { AuthProvider } from "./context/AuthContext.js";
import AdminRoute from "./context/PrivateRoute.js";

// url interface Customer
import Login from "./pages/Customer/Page_Login.js";
import Registers from "./pages/Customer/Page_Register.js";
import Error from "./pages/Page_Error.js";
import ShowProfile from "./pages/Customer/Page_Profile.js";

import Home from "./pages/Customer/Page_Home.js";
import ListSearch from "./pages/Customer/Page_Search.js";
import ShowHotelDetails from "./pages/Customer/Page_HotelDetails.js";

import Booking from "./pages/Customer/Page_Booking";
import ShowListBooking from "./pages/Customer/Page_ListBooking.js";
import EditBooking from "./pages/Customer/Page_EditBooking.js";

// url interface Admin
import AdminHome from "./pages/Admin/Page_AdminHome.js";

import ListCustomer from "./pages/Admin/Page_ListCustomer.js";
import EditCustomer from "./pages/Admin/Page_EditCustomer.js";

import CreateHotel from "./pages/Admin/Page_CreateHotel.js";
import ListHotelAdmin from "./pages/Admin/Page_ListHotel.js";
import EditHotel from "./pages/Admin/Page_EditHotel.js";

import CreateRoom from "./pages/Admin/Page_CreateRoom.js";
import ListRoom from "./pages/Admin/Page_ListRoom.js";
import EditRoom from "./pages/Admin/Page_EditRoom.js";

import ListBookings from "./pages/Admin/Page_ListBooking_Admin.js";
import EditBookings from "./pages/Admin/Page_EditBooking_Admin.js";
import ProfileAdmin from "./pages/Admin/Page_Profile_Admin.js";


function App() {
  const [isAdmin] = useState(true);

  return (
    <Router>
      <AuthProvider>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registers />} />
          <Route path="/error" element={<Error />} />
          <Route path="/profile/:id" element={<ShowProfile />} />

          <Route path="/" element={<Home />} />
          <Route path="/search-results" element={<ListSearch />} />
          <Route path="/hotel/:hotel_id" element={<ShowHotelDetails />} />
          <Route path="/booking/:hotel_id/:room_id" element={<Booking />} />
          <Route path="/list-booking" element={<ShowListBooking />} />
          <Route path="/edit-booking/:booking_id" element={<EditBooking />} />

          <Route path="/admin" element={<AdminRoute element={<AdminHome />} isAdmin={isAdmin} />} />
          <Route path="/admin/profile/:id" element={<AdminRoute element={<ProfileAdmin />} isAdmin={isAdmin} />} />
          <Route path="/admin/:hotel_id/create-rooms" element={<AdminRoute element={<CreateRoom />} isAdmin={isAdmin} />} />
          <Route path="/admin/:hotel_id/list-rooms" element={<AdminRoute element={<ListRoom />} isAdmin={isAdmin} />} />
          <Route path="/admin/:hotel_id/edit-room/:room_id" element={<AdminRoute element={<EditRoom />} isAdmin={isAdmin} />} />
          <Route path="/admin/create-hotel" element={<AdminRoute element={<CreateHotel />} isAdmin={isAdmin} />} />
          <Route path="/admin/list-hotel" element={<AdminRoute element={<ListHotelAdmin />} isAdmin={isAdmin} />} />
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
