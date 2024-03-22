import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import {
  Collapse, // == mobilenav
  Navbar,
  Typography,
  Button,
  IconButton,

} from "@material-tailwind/react";

export function Navbars() {
  let { user, logoutUser } = useContext(AuthContext)
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col
    gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-2xl rounded-xl hover:bg-gray-200"
      >
        <Link to="/list-booking" className="flex items-center">
          Bookings
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-2xl rounded-xl hover:bg-gray-200"
      >
        <Link to="/search-results" className="flex items-center">
          Search
        </Link>
      </Typography>
    </ul>
  );

  return (
    // <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
    <Navbar className="sticky top-0 z-30 h-max max-w-full rounded-none border-0 px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between  ">
        <Typography
          as="a"
          href="/"
          className=" cursor-pointer font-medium uppercase text-2xl text-black"
        >
          Website Booking
        </Typography>
        <div className="flex items-center gap-4 ">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className=" flex items-center gap-4 ">
            {!user && (
              <>
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block pb-1 text-red-500 font-semibold rounded-xl hover:bg-gray-200"
                >
                  <Link to="/login">Log In</Link>
                </Button>
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block pb-1 text-red-500 font-semibold rounded-xl hover:bg-gray-200"
                >
                  <Link to="/register">Sign In</Link>
                </Button>
              </>
            )}
            {user && (
              <Button
                onClick={logoutUser}
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block pb-1 text-red-500 font-semibold rounded-xl hover:bg-gray-200"
              >
                <Link to="/">Log Out</Link>
              </Button>
            )}
          </div>
          <IconButton
            variant="text"
            className="mr-5 h-6 w-6 text-inherit  hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6 text-black"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <div className="bg-slate-100 ">
          {navList}
          {!user && (
            <>
              <div className="flex justify-center mx-auto">
                <Button
                  color="blue"
                  size="sm"
                  className=" mb-2 lg:hidden w-[90%] text-md text-white font-semibold rounded-xl hover:bg-blue-200"
                >
                  <Link to="/login">Sign In</Link>
                </Button>
              </div>
              <div className="flex justify-center mx-auto">
                <Button
                  color="blue"
                  size="sm"
                  className=" mb-2 lg:hidden w-[90%] text-md text-white font-semibold rounded-xl hover:bg-gray-200"
                >
                  <Link to="/register">Sign Up</Link>
                </Button>
              </div>
            </>
          )}
          {user && (
            <div className="flex justify-center mx-auto">
              <Button
                onClick={logoutUser}
                color="blue"
                size="sm"
                className="mb-2 lg:hidden w-[90%] text-md text-white font-semibold rounded-xl hover:bg-gray-200"
              >
                <Link to="/">Log Out</Link>
              </Button>
            </div>
          )}
        </div>
      </Collapse>
    </Navbar>

  );
}