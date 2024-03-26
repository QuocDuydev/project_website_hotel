import React, { useState} from "react";
import Header_Admin from "../../components/Admin/Layout/Header";
import Sidebar_Admin from "../../components/Admin/Layout/SideBar";
import { useAccessToken } from "../../components/ultiti";
import { useNavigate } from "react-router-dom";
import { Alert } from "@material-tailwind/react";
import { postHotel } from "../../api/hotel_API";
import CreateHotelForm from "../../components/Admin/CreateHotel_Form";

function CreateHotel() {
  const token = useAccessToken()
  const [hotel, setHotels] = useState({
    hotelname: "",
    hotelimage: "",
    descriptions: "",
    totalroom: "",
    roommap: "",
    location: "",
    rating: "",
    dateadded: new Date().toISOString().split('T')[0],
  });

  const navigate = useNavigate();
  const [CreateSuccess, setCreateSuccess] = useState(false);

  const handleCreate = async () => {
    try {
      const hotelData = {
        hotelname: hotel.hotelname,
        hotelimage: hotel.hotelimage,
        descriptions: hotel.descriptions,
        totalroom: hotel.totalroom,
        roommap: hotel.roommap,
        location: hotel.location,
        rating: hotel.rating,
        dateadded: hotel.dateadded
      };

      const response = await postHotel( token, hotelData);
      console.log("Create successful:", response.data);
      setCreateSuccess(true);
      setTimeout(() => {
        setCreateSuccess(false);
        navigate("/admin/list-hotel");
      }, 1000);
    } catch (error) {
      console.error('Create failed:', error);
    }
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "hotelimage" && files && files.length > 0) {

      const file = files[0];

      setHotels((prevHotel) => ({
        ...prevHotel,
        [name]: file,
      }));
    } else {
      setHotels((prevHotel) => ({ ...prevHotel, [name]: value }));
    };
  };
  return (
    <>
      <div className=" flex h-screen overflow-hidden">

        <Sidebar_Admin />
        <div className="flex flex-col flex-1 w-full">
          <Header_Admin />
          {CreateSuccess && (
            <Alert
              className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
            >
              Create successfuly !!
            </Alert>
          )}
          <CreateHotelForm hotel={hotel} handleChange={handleChange} handleCreate={handleCreate} />
        </div>
      </div>
    </>

  );
} export default CreateHotel;