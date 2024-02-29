import "./index.css";

import Login from "./pages/Page_login.js";
import Register from "./pages/Page_register.js";
import Home from "./pages/Page_home.js";
import RoomDetails from "./pages/Page_RoomDetails.js";
import {createBrowserRouter, RouterProvider  } from 'react-router-dom';


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
