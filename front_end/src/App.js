import "./index.css";

import Login from "./pages/Customer/Page_login.js";
import Register from "./pages/Customer/Page_register.js";
import Home from "./pages/Customer/Page_Home.js";
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext.js";
import AdminHome from "./pages/Admin/Page_AdminHome.js";
import CreateRoomForm from "./pages/Admin/Page_CreateRoom.js";
import ListRoom from "./pages/Admin/Page_ListRoom.js";
import EditRoom from "./pages/Admin/Page_EditRoom.js";
import CreateHotelForm from "./pages/Admin/Page_CreateHotel.js";
import ListHotel from "./pages/Admin/Page_ListHotel.js";
import EditHotel from "./pages/Admin/Page_EditHotel.js";
import ListCustomer from "./pages/Admin/Page_ListCustomer.js";
import EditCustomer from "./pages/Admin/Page_EditCustomer.js";
import CreateCustomerForm from "./pages/Admin/Page_CreateCustomer.js";
import HotelDetails from "./pages/Customer/Page_HotelDetails.js";
import ListBooking from "./pages/Customer/Page_ListBooking.js";
import Booking from "./pages/Customer/Page_Booking";
import ListSearch from "./pages/Customer/Page_Search.js";
import AuthContext from './context/AuthContext';
import { Loading } from "./pages/Loading.js";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from "./context/PrivateRoute.js";
import Header from "./components/Customer/Header.js";
import Registers from "./pages/Customer/Page_register.js";
import Error from "./pages/Page_Error.js";
import axios from "axios";
import EditBooking from "./pages/Customer/Page_EditBooking.js";

function App() {
  const checkUserType = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/users/");
      const users = response.data;
      console.log("Dữ liệu người dùng:", users);
  
      const isAdmin = users.some((user) => user.account_type === "admin");
      return isAdmin ? "admin" : "user";
    } catch (error) {
      console.error("Lỗi khi lấy danh sách người dùng:", error);
      return "user";
    }
  };
  const PrivateRoute = ({ element }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
 
    useEffect(() => {
      const fetchUserType = async () => {
        try {
          const fetchedUserType = await checkUserType();
          setIsAdmin(fetchedUserType === "admin");
        } catch (error) {
          console.error("Lỗi khi kiểm tra loại tài khoản:", error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchUserType();
    }, []);
    if (isLoading) {
      // Hiển thị một màn hình đang tải hoặc một phần tử khác
      return <Loading />;
    }
    // if (isAdmin || userType === "admin") {
    //   return element;
    // } else if (userType !== "admin") {
    //   return <Navigate to="/error" />;
      
    // }      
    // Nếu là admin, cho phép truy cập
    return element;
  };
  const AdminRoute = ({ element }) => {

    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchUserType = async () => {
        try {
          const fetchedUserType = await checkUserType();
          setIsAdmin(fetchedUserType === "admin");
        } catch (error) {
          console.error("Lỗi khi kiểm tra loại tài khoản:", error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchUserType();
    }, []);
  
    if (isLoading) {
      // Hiển thị một màn hình đang tải hoặc một phần tử khác
      return <Loading />;
    }
  
    // if (isAdmin || userType === "admin") {
    //   return element;
    // } else {
    //   // Nếu người dùng không phải là admin, điều hướng về trang error
    //   return <Navigate to="/error" />;
    // }
  };
  
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/error" element={<Error />} />

          <Route path="/" element={<Home />} />
          <Route path="/list-booking" element={<ListBooking />} />
          <Route path="/hotel/:hotel_id" element={<HotelDetails />} />
          <Route path="/booking/:hotel_id/:room_id" element={<Booking />} />
          <Route path="/edit-booking/:hotel_id" element={<EditBooking />} />
          <Route path="/search-results" element={<ListSearch />} />

          <Route path="/admin" element={<PrivateRoute element={<AdminHome />} />} />
          <Route path="/admin/create-room" element={<PrivateRoute element={<CreateRoomForm />} />} />
          <Route path="/admin/list-room" element={<PrivateRoute element={<ListRoom />} />} />
          <Route path="/admin/edit-room/:room_id" element={<PrivateRoute element={<EditRoom />} />}  />
          <Route path="/admin/create-hotel" element={<PrivateRoute element={<CreateHotelForm />} />}/>
          <Route path="/admin/list-hotel" element={<PrivateRoute element={<ListHotel />} />} />
          <Route path="/admin/edit-hotel/:hotel_id" element={<PrivateRoute element={<EditHotel />} />} />
          <Route path="/admin/list-customer" element={<PrivateRoute element={<ListCustomer />} />} />
          <Route path="/admin/edit-customer/:id" element={<PrivateRoute element={<EditCustomer />} />}  />
          <Route path="/admin/create-customer"  element={<PrivateRoute element={<CreateCustomerForm />} />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
