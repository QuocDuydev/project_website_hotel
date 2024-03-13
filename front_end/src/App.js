import "./index.css";

import Login from "./pages/Customer/Page_login.js";
import Register from "./pages/Customer/Page_register.js";
import Home from "./pages/Customer/Page_home.js";
import RoomDetails from "./pages/Customer/Page_RoomDetails.js";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
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
import ListHotels from "./pages/Customer/Page_Hotel.js";
import ListRooms from "./pages/Customer/Page_Room.js";
import Booking from "./pages/Customer/Page_Booking";
import ListSearch from "./pages/Customer/Page_Search.js";
const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },

  // Interface Customer
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/list-room',
    element: <ListRooms/>
  },
  {
    path: '/room/:id',
    element: <RoomDetails/>
  },
  {
    path: '/list-hotel',
    element: <ListHotels/>
  },
  {
    path: '/hotel/:id',
    element: <HotelDetails/>
  },
  {
    path: '/booking',
    element: <Booking/>
  },
  {
    path: '/search-results',
    element: <ListSearch/>
  },


    // Interface Admin
  {
    path: '/admin',
    element: <AdminHome/>
  },
  {
    path: '/admin/create-room',
    element: <CreateRoomForm/>
  },
  {
    path: '/admin/list-room',
    element: <ListRoom/>
  },
  {
    path: '/admin/edit-room/:id',
    element: <EditRoom/>
  },
  {
    path: '/admin/create-hotel',
    element: <CreateHotelForm/>
  },
  {
    path: '/admin/list-hotel',
    element: <ListHotel/>
  },
  {
    path: '/admin/edit-hotel/:id',
    element: <EditHotel/>
  },
  {
    path: '/admin/list-customer',
    element: <ListCustomer/>
  },
  {
    path: '/admin/edit-customer/:id',
    element: <EditCustomer/>
  },
  {
    path: '/admin/create-customer',
    element: <CreateCustomerForm/>
  },

]);
function App() {

  return (
    <>
    {/* <AuthProvider> */}
       {/* <Header /> */}
       <RouterProvider router={router} />
      {/* <Footer /> */}
    {/* </AuthProvider> */}
     
    </>
  );
}

export default App;
