import "./index.css";
import { createRoot } from 'react-dom/client';

import Login from "./pages/Customer/Page_login.js";
import Register from "./pages/Customer/Page_register.js";
import Home from "./pages/Customer/Page_home.js";
import RoomDetails from "./pages/Customer/Page_RoomDetails.js";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AdminHome from "./pages/Admin/Page_AdminHome.js";
import { CreateRoomForm } from "./pages/Admin/Page_AdminCustomer.js";


const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/room/:id',
    element: <RoomDetails/>
  },
  {
    path: '/admin',
    element: <AdminHome/>
  },
  {
    path: '/admin/rooms',
    element: <CreateRoomForm/>
  },

]);
function App() {

  return (
    <>
      {/* <Header /> */}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
