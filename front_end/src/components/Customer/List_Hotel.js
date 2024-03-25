import {
    Card,
    CardBody,
    Typography,
    Button,
    Rating,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Utilities from "./Layout/Utilities";

function ListHotel({ filteredHotels }) {
    return (
        <div>
            {filteredHotels.map((hotel) => (
                <div>
                    <Card className=" w-full mx-auto mb-2 border-2">

                        <CardBody className="m-3 flex">

                            <img
                                src={hotel.hotelimage}
                                className="h-30 w-1/3 rounded-lg object-cover object-center"
                            />

                            <div className="m-3">
                                <Typography variant="h5" color="blue-gray" className="mb-2 text-blue-800">
                                    {hotel.hotelname} - {hotel.location}
                                </Typography>
                                <Typography className=" text-justify">
                                    {hotel.descriptions.slice(0, 99)}
                                </Typography>
                                <Typography className=" text-right mb-3 text-xl font-bold">
                                    {hotel.hotelname && (
                                        <>
                                            <Rating
                                                value={hotel.rating}
                                                unratedColor="red"
                                                ratedColor="red"
                                                readonly
                                            />
                                        </>
                                    )}
                                </Typography>
                                <Utilities />
                                <div className="flex justify-between items-center mt-3">
                                    <span className="mx-auto px-2 py-2 text-center text-lg leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">{hotel.totalroom} - rooms</span>
                                    <Link to={`/hotel/${hotel.hotel_id}`} ><Button className=" bg-black">See availability</Button></Link>

                                </div>

                            </div>

                        </CardBody>


                    </Card>
                </div>
            ))}
        </div>
    );
}
export default ListHotel;
