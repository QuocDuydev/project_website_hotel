import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
  Avatar,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

function Header_Admin(){
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <div className=" sticky max-w-screen-lg overflow-hidden z-10 rounded-none">
    <Navbar className="mx-auto  px-4 py-2 lg:px-8 lg:py-4 rounded border-none boxShadow-[ 0 2px 4px 0]">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium text-xl"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block"></div>
        <div className="hidden items-center gap-x-2 lg:flex">
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="blacks"
              className="rounded relative "
              containerProps={{
              className: "min-w-[350px]",
              }}
            />
            <Button
                size="sm"
                color="red"
                className="ml-1"
            >
                Search
            </Button>
          </div>
          <Popover>
              <PopoverHandler>
              <Avatar
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  alt="avatar"
                  withBorder={true}
                  className="p-0.5 ml-4 relative bg-green-300"
              />
                  
              </PopoverHandler>
              <PopoverContent>
              <List className="p-0 text-sm ">
                  <ListItem className="hover:bg-gray-200">
                      <ListItemPrefix>
                          <UserCircleIcon className="h-5 w-5" />
                      </ListItemPrefix>
                      Profile
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
                      Log Out
                  </ListItem>
          </List>
              </PopoverContent>
          </Popover>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
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
              className="h-6 w-6"
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
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          
          <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center mb-auto">
            <div className="relative w-full gap-2 md:w-max">
            <Input
              type="search"
              color="black"
              className="rounded text-xl"
              containerProps={{
              className: "min-w-[350px]",
              }}
            />
             
            </div>
            <Button
                size="sm"
                color="red"
                className="mt-1 rounded-lg sm:mt-0"
            >
                Search
            </Button>
          </div>

          <List className="p-0 text-black">
              <ListItem className="hover:bg-gray-200">
                  <ListItemPrefix>
                      <UserCircleIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Profile
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
                  Log Out
              </ListItem>
      </List>
                 
        </div>
      </MobileNav>
    </Navbar>
    </div>
  );
} export default Header_Admin;
