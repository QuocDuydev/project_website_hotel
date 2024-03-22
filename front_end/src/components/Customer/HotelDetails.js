import { useState, useEffect } from "react";
import { getHoteldetail } from "../../api/hotel_API";
import { useParams } from 'react-router-dom';
import { useAccessToken } from "../ultiti";
import RoominHotel from "./Room_in_Hotel";
import Utilities from "./Layout/Utilities";
import Extensions from "./Layout/Extensions";
import {
  Card,
  CardBody,
  Typography,
  Tooltip,
  Rating
} from "@material-tailwind/react";
function HotelDetails() {
  let token = useAccessToken()
  const { hotel_id } = useParams();
  const [hotels, setHotel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const hotelData = await getHoteldetail(hotel_id, token);
        setHotel(hotelData);
        window.scrollTo(0,0);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

  }, [hotel_id, token]);

  return (
    <div className='container mx-auto relative'>

      <Card className=" w-full mx-auto mb-2 shadow-none mt-3">
        <CardBody className="m-3">
          <div className="m-3">
            <div className="flex">
              <div className="flex">
                <Typography variant="h4" color="blue-gray" className="flex mb-2 text-blue-800">
                  {hotels.hotelname} - {hotels.location}
                </Typography>
              </div>

              <Typography className="flex ml-4 mb-2">
                {hotels.rating && (
                  <>
                    <Rating
                      value={hotels.rating}
                      unratedColor="red"
                      ratedColor="red"
                      readonly
                    />
                  </>
                )}
              </Typography>
            </div>

            <div className=" flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>

              <Typography variant="h6" color="blue-gray" className="ml-1">{hotels.roommap}, {hotels.location}</Typography>
            </div>
            <div className="grid grid-cols-6">
              <div className="grid gap-4 relative col-span-2">
                <div className=" col-1">
                  <img
                    src={hotels.hotelimage}
                    className="h-full max-w-full rounded-lg object-cover object-center mt-3"
                  />
                </div>
                <div className=" col-1 mt-2">
                  <img
                    src={hotels.hotelimage}
                    className="h-full max-w-full rounded-lg object-cover object-center"
                  />
                </div>
              </div>

              <div className="grid gap-4 relative col-span-4 ml-3 mb-3">
                <img
                  src={hotels.hotelimage}
                  className="h-full max-w-full rounded-lg object-cover object-center mt-3"
                />
              </div>
            </div>
            <div>
              <Typography variant="h4" className=" text-justify mt-3">
                Descriptions:
              </Typography>
              <Typography className=" text-justify mt-1">
                {hotels.descriptions}
              </Typography>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
} export default HotelDetails;
