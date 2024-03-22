
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Rating
} from "@material-tailwind/react";
export function GridLocation() {
  const [data, setData] = useState([]);
  const [locationCounts, setLocationCounts] = useState({});
  const isConfirmed = false;
  const refreshList = () => {
    axios
      .get("http://localhost:8000/api/hotels/")
      .then((res) => {
        setData(res.data);

        // Calculate location counts
        const counts = res.data.reduce((acc, item) => {
          acc[item.location] = (acc[item.location] || 0) + 1;
          return acc;
        }, {});

        setLocationCounts(counts);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    refreshList();
  }, []);
  const uniqueLocations = Array.from(new Set(data.map((item) => item.location)));
  return (
    <>
      <div className="mt-[40px] mb-4">
        <Typography variant="h4">
          Explore Vietnam
        </Typography>
        <Typography variant="h5" className=" font-normal">
          These popular destinations have a lot to offer
        </Typography>
      </div>
      <div className="grid grid-cols-3 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {uniqueLocations.map((location) => {
          const item = data.find((item) => item.location === location);
          return (
            <div className=" justify-center text-center " key={item.hotel_id}>
              <img
                className="h-[100px] w-full rounded-lg object-cover object-center transform transition-transform hover:scale-105 cursor-pointer"
                src={item.hotelimage}
                alt="gallery-photo"
              />
              <p className="text-black font-bold">{item.location}</p>

              <p>{`${locationCounts[item.location] || 0} properties`}</p>
            </div>
          );
        })}
      </div>
    </>
  );
} export default GridLocation;