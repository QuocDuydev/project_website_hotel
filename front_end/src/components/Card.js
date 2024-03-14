import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Rating
} from "@material-tailwind/react";

function CardDefault() {
  const [data, setData] = useState([]);
  const isConfirmed = false;
  const refreshList = () => {
    axios
      .get("http://localhost:8000/api/hotels/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };


  useEffect(() => {

    refreshList();

  }, []);
  const limitedData = data.slice(0, 4);
  return (
    <>
      <div className=" container mt-6">
        <Typography variant="h4">List Hotel Suggested</Typography>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        {limitedData.map((item) => (
          <Card className="p-4 text-center bg-white shadow-md rounded-xl" key={item.id}>
            <CardHeader color="blue-gray" className="relative h-56 overflow-hidden">
              <img
                src={item.hotelimage}
                alt="card-image"
                className="object-cover w-full h-full transform transition-transform hover:scale-110"
              />
            </CardHeader>
            <CardBody className="flex flex-col justify-between h-1/2">
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-2 mt-3">
                  {item.hotelname}
                </Typography>

                <Rating value={item.rating} unratedColor="red" ratedColor="red" readonly />
                <div className=" flex mt-1">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>

                  <Typography variant="h6" color="blue-gray" className="ml-1">{item.location}</Typography>
                </div>
              </div>
              <CardFooter className="flex flex-col justify-between h-1/2 mt-5">
                <Link to={`/hotel/${item.id}`}>
                  <Button className="text-white bg-blue-500 hover:bg-blue-700">Read More</Button>
                </Link>
              </CardFooter>
            </CardBody>
          </Card>
        ))}
      </div>
    </>

  );
}
export default CardDefault;