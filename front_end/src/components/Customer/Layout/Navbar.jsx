import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import { useAccessToken } from "../../ultiti";
import jwt_decode from "jwt-decode";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Popover,
  PopoverHandler,
  PopoverContent,
  Avatar,
  List,
  ListItem,
  ListItemPrefix,
  Collapse,

} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
  ArrowRightCircleIcon,
  PencilSquareIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

export function Navbars() {
  const token = useAccessToken();
  let id = null;
  let username = null;
  if (token) {
    const loggedInUser = jwt_decode(token);
    id = loggedInUser.user_id;
    username = loggedInUser.username;
  }

  let { user, logoutUser } = useContext(AuthContext)
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
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
        className="px-2 py-2 font-normal text-2xl rounded-xl hover:bg-gray-200 hover:px-2 hover:py-2"
      >
        <Link to="/list-booking" className="flex items-center">
          Bookings
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="px-2 py-2 font-normal text-2xl rounded-xl hover:bg-gray-200 hover:px-2 hover:py-2"
      >
        <Link to="/search-results" className="flex items-center">
          Search
        </Link>
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
          <div className=" items-center gap-4 hidden lg:block">
            <Popover>

              <PopoverHandler>
                <div className="flex items-center">
                  <Avatar
                    src="http://127.0.0.1:8000/media/room_images/avatar.jpg"
                    alt="avatar"
                    withBorder={true}
                    className="p-0.5 ml-4 relative bg-green-300"
                  />
                  <div>
                    <Typography variant="h6" className="ml-2 text-black">{username}</Typography>
                  </div>

                </div>
              </PopoverHandler>
              <PopoverContent>
                <List className="p-0 text-sm ">
                  {!user && (
                    <>
                      <ListItem className="hover:bg-gray-200">
                        <ListItemPrefix>
                          <ArrowRightCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Link to="/login"> Sign in </Link>
                      </ListItem>
                      <ListItem className="hover:bg-gray-200">
                        <ListItemPrefix>
                          <PencilSquareIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Link to="/register">Sign up </Link>
                      </ListItem>
                    </>
                  )}
                  {user && (
                    <>
                      <ListItem className="hover:bg-gray-200">
                        <ListItemPrefix>
                          <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Link to={`/profile/${id}`}>Profile</Link>
                      </ListItem>
                      <ListItem className="hover:bg-gray-200">
                        <ListItemPrefix>
                          <Cog6ToothIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Setting
                      </ListItem>
                      <ListItem className="hover:bg-gray-200">
                        <ListItemPrefix>
                          <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>

                        <Link to="/" onClick={logoutUser} className=" text-red-500 font-bold">Sign Out</Link>

                      </ListItem>
                    </>
                  )}
                </List>
              </PopoverContent>
            </Popover>
          </div>
          <IconButton
            variant="text"
            className="mr-5 h-6 w-6 text-inherit  hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6 text-black" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-black" />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <div className="bg-slate-100 ">
          {navList}
          {!user && (
            <>
              <List className="p-0 text-black">
                <ListItem className="hover:bg-gray-200">
                  <ListItemPrefix>
                    <ArrowRightCircleIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Link to="/login"> Sign in </Link>
                </ListItem>
                <ListItem className="hover:bg-gray-200">
                  <ListItemPrefix>
                    <PencilSquareIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Link to="/register">Sign up </Link>
                </ListItem>
              </List>
            </>
          )}
          {user && (

            <List className="p-0 text-black">
              <ListItem className="hover:bg-gray-200">
                <ListItemPrefix>
                  <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Link to={`/profile/${id}`}>Profile</Link>
              </ListItem>
              <ListItem className="hover:bg-gray-200">
                <ListItemPrefix>
                  <Cog6ToothIcon className="h-5 w-5" />
                </ListItemPrefix>
                Settings
              </ListItem>
              <ListItem className="hover:bg-gray-200">
                <ListItemPrefix>
                  <PowerIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Link to="/" onClick={logoutUser} className=" text-red-500 font-bold -mr-2">Sign Out</Link>
              </ListItem>
            </List>
          )}
        </div>
      </Collapse>
    </Navbar>

  );
}