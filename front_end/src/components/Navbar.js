import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse, // == mobilenav
  Navbar,
  Typography,
  Button,
  IconButton,
 
} from "@material-tailwind/react";
 
export function Navbars() {
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
        className="p-1 font-normal text-2xl rounded-xl hover:bg-gray-200 "
      >
        <a href="#" className="flex items-center">
          Hotels
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-2xl rounded-xl hover:bg-gray-200"
      >
        <a href="#" className="flex items-center">
          Rooms
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal text-2xl rounded-xl hover:bg-gray-200"
      >
        <a href="#" className="flex items-center">
          Homestay
        </a>
      </Typography>
    </ul>
  );
 
  return (
    // <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none border-0 px-4 py-2 lg:px-8 lg:py-4">
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
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block  pb-1 text-red-500 font-semibold rounded-xl hover:bg-gray-200"
              >
                <Link to="/login"><span>Log In</span></Link>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block pb-1 text-red-500 font-semibold rounded-xl hover:bg-gray-200"
              >
                  <Link to="/register"><span>Sign In</span></Link>
              </Button>
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
          
            <div className=" bg-slate-100">
                {navList}
            </div> 
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="text" size="sm" className=" text-center bg-black ">
              <Link to="/login"><span>Log In</span></Link>
              </Button>
              <Button fullWidth variant="gradient" size="sm" className="text-center bg-black">
              <Link to="/register"><span>Sign In</span></Link>
              </Button>
            </div>
          
        </Collapse>
      </Navbar>

  );
}