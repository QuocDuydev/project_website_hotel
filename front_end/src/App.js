import "./index.css";

import Login from "./pages/Customer/Page_login.js";
import Register from "./pages/Customer/Page_register.js";
import Home from "./pages/Customer/Page_Home.js";
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider, useAuth } from "./context/AuthContext.js";
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
import ListHotels from "./pages/Customer/Page_Hotel.js";
import ListRooms from "./pages/Customer/Page_Room.js";
import Booking from "./pages/Customer/Page_Booking";
import ListSearch from "./pages/Customer/Page_Search.js";
import AuthContext from './context/AuthContext';

import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from "./context/PrivateRoute.js";
import Header from "./components/Customer/Header.js";
import Registers from "./pages/Customer/Page_register.js";
import Error from "./pages/Page_Error.js";
import axios from "axios";


const checkUserType = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/users/");
    const users = response.data;
    console.log("Dữ liệu người dùng:", users); // In ra dữ liệu người dùng để kiểm tra

    const isAdmin = users.some(user => user.account_type === "admin");
    return isAdmin ? "admin" : "customer";
  } catch (error) {
    console.error("Lỗi khi lấy danh sách người dùng:", error);
    return "customer"; // Mặc định là customer nếu có lỗi
  }
};

// Private Route cho trang Admin
const AdminRoute = ({ element }) => {
  const { userType } = useAuth(); // Lấy loại tài khoản từ context
  const [isAdmin, setIsAdmin] = useState(false); // State để lưu trạng thái là admin hay không

  useEffect(() => {
    const fetchUserType = async () => {
      try {
        const userType = await checkUserType();
        setIsAdmin(userType === "admin");
      } catch (error) {
        console.error("Lỗi khi kiểm tra loại tài khoản:", error);
      }
    };

    fetchUserType();
  }, []); // Gọi fetchUserType khi component được render lần đầu tiên

  // Kiểm tra nếu là admin thì cho phép truy cập, ngược lại điều hướng về trang chủ
  if (userType === "admin" || isAdmin) {
    return element;
  } else {
    return <Navigate to="/" />;
  }
};
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/error" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/list-room" element={<ListRooms />} />
          <Route path="/list-hotel" element={<ListHotels />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route path="/booking/:id/:roomid" element={<Booking />} />
          <Route path="/search-results" element={<ListSearch />} />
          <Route path="/admin" element={<AdminRoute element={<AdminHome />} />} />
          <Route path="/admin/create-room" element={<AdminRoute element={<CreateRoomForm />} />} />
          
            <Route path="/admin/list-room" element={<ListRoom />} />
            <Route path="/admin/edit-room/:id" element={<EditRoom />} />
            <Route path="/admin/create-hotel" element={<CreateHotelForm />} />
            <Route path="/admin/list-hotel" element={<ListHotel />} />
            <Route path="/admin/edit-hotel/:id" element={<EditHotel />} />
            <Route path="/admin/list-customer" element={<ListCustomer />} />
            <Route path="/admin/edit-customer/:id" element={<EditCustomer />} />
            <Route path="/admin/create-customer" element={<CreateCustomerForm />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
