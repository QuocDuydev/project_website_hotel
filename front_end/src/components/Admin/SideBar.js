import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { ChevronRightIcon, ChevronDownIcon, HomeIcon } from "@heroicons/react/24/outline";
import { useAccessToken } from "../ultiti";


function Sidebar_Admin() {
   
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
     const token = useAccessToken();

    const [accountType, setAccountType] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const userDetailsResponse = await fetch(
              "http://localhost:8000/api/users/",
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            const userDetails = await userDetailsResponse.json();
            const loggedInUser = jwt_decode(token);
            const allowedAccess = userDetails.find(
              (user) =>
                user.id === loggedInUser.user_id &&
                (user.account_type === "superadmin")
            );
            // console.log(allowedAccess);
            setAccountType(allowedAccess);
          } catch (error) {
            console.error("Error decoding token:", error);
          }
        };
    
        fetchData();
      }, [token]);

    return (
        <div className="sticky top-0 z-10 h-max max-w-full rounded">
            <Card className=" block max-w-[15rem] p-4 h-full bg-white rounded shadow-none" >
                <List>
                    <Link to="/admin">
                        <ListItem>
                            <ListItemPrefix>
                                <HomeIcon className="h-6 w-6" />
                            </ListItemPrefix>
                            Dashboard
                        </ListItem>
                    </Link>
                    {accountType && (
                        <>
                            <Accordion
                                open={open === 1}
                                icon={<ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />}
                            >
                                <ListItem className="p-0" selected={open === 1}>
                                    <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">

                                        <Typography color="blue-gray" className="mr-auto font-normal">
                                            Manager Customer
                                        </Typography>
                                    </AccordionHeader>
                                </ListItem>
                                <AccordionBody className="py-1">
                                    <List className="p-0">
                                        <Link to="/admin/list-customer">
                                            <ListItem>
                                                <ListItemPrefix>
                                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                                </ListItemPrefix>
                                                List Customer
                                            </ListItem>
                                        </Link>

                                    </List>
                                </AccordionBody>
                            </Accordion>
                        </>
                    )}
                    <Accordion
                        open={open === 2}
                        icon={<ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`} />}
                    >
                        <ListItem className="p-0" selected={open === 2}>
                            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">

                                <Typography color="blue-gray" className="mr-auto font-normal">
                                    Manager Hotel
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <Link to="/admin/list-hotel">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        List Hotel
                                    </ListItem>
                                </Link>

                            </List>
                            <List className="p-0">
                                <Link to="/admin/create-hotel">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Create Hotel
                                    </ListItem>
                                </Link>

                            </List>
                        </AccordionBody>
                    </Accordion>

                    <Accordion
                        open={open === 3}
                        icon={<ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-180" : ""}`} />}
                    >
                        <ListItem className="p-0" selected={open === 3}>
                            <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">

                                <Typography color="blue-gray" className="mr-auto font-normal">
                                    Manager Rooms
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <Link to="/admin/list-room">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        List Rooms
                                    </ListItem>
                                </Link>

                            </List>
                            <List className="p-0">
                                <Link to="/admin/create-room">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        Create Rooms
                                    </ListItem>
                                </Link>

                            </List>
                        </AccordionBody>
                    </Accordion>

                    <Accordion
                        open={open === 4}
                        icon={<ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 4 ? "rotate-180" : ""}`} />}
                    >
                        <ListItem className="p-0" selected={open === 4}>
                            <AccordionHeader onClick={() => handleOpen(4)} className="border-b-0 p-3">

                                <Typography color="blue-gray" className="mr-auto font-normal">
                                    Manager Booking
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <Link to="/admin/list-booking">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon strokeWidth={4} className="h-3 w-5" />
                                        </ListItemPrefix>
                                        List Booking
                                    </ListItem>
                                </Link>

                            </List>
                        </AccordionBody>
                    </Accordion>

                </List>
            </Card>


        </div>

    );
} export default Sidebar_Admin;