import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import  Header_Admin  from "../../components/Admin/Header";
import  Sidebar_Admin  from "../../components/Admin/SideBar";
import axios from "axios";
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
    Alert
  } from "@material-tailwind/react";
  
function EditHotel () {
  const {id}  = useParams();
  const [room, setRoom] = useState({
    hotelname: "",
    hotelimage: null,
    descriptions: "",
    totalroom: "",
    roommap: "",
    location: "",
    rating: "",
    dateadded: "",
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/hotels/${id}/`)
      .then((response) => {
        setRoom(response.data);
        // console.log(room.roomimage)
      })
      .catch((error) => {
        console.error("Error fetching room data:", error);
      });
  }, [id]);
  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("hotelname", room.hotelname);
    formData.append("hotelimage", room.hotelimage);
    formData.append("descriptions", room.descriptions);
    formData.append("totalroom", room.totalroom);
    formData.append("roommap", room.roommap);
    formData.append("location", room.location);
    formData.append("rating", room.rating);
    formData.append("dateadded", room.dateadded);
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }
    axios({
      method: 'put',
      url: `http://localhost:8000/api/hotels/${id}/`,
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }, 
    })
      .then((response) => {
        console.log("Update successful:", response.data);
        setUpdateSuccess(true);
        setTimeout(() => {
          setUpdateSuccess(false);
        }, 1000);

        // Redirect to home page after 1 seconds
        setTimeout(() => {
          navigate("/admin/list-hotel");
        }, 1000);  
      })
      .catch((error) => {
        console.error("Update failed:", error);
       
      });
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    if (name === "hotelimage" && files && files.length > 0) {
      
      const file = files[0];

      setRoom((prevRoom) => ({
        ...prevRoom,
        [name]: file,
      }));
    } else {
      setRoom((prevRoom) => ({ ...prevRoom, [name]: value }));
    };
  };
  return (
      <> 
      <div className=" flex h-screen overflow-hidden">  
      
        <Sidebar_Admin/> 
          <div className="flex flex-col flex-1 w-full">
              <Header_Admin/>
        {updateSuccess && (
            <Alert
                className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
              >
                Update successfuly !!
          </Alert>
        )}
              <div className=" container m-4 text-red-500">
              <Typography variant="h4" color="blue-gray">
                  Edit the Hotels
              </Typography>
              <div className=" max-w-full px-3 rounded-lg mt-2">
              
                  <Card color="transparent" shadow={false}>
                      <form>
                        <div className="flex mx-auto ">
                        <div className="mb-1 w-1/2 p-4">
                            <div>
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mb-2"
                              >
                                Name Hotels
                              </Typography>
                              <Input
                                type="text"
                                size="lg"
                                name="hotelname"  
                                value={room.hotelname}
                                onChange={handleChange}
                                placeholder="Enter name hotels..."
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                
                                />
                            </div>
                            <div>
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mb-2 mt-4"
                              >
                                Images Hotel
                              </Typography>
                              <Input
                                type="file"
                                multiple
                                size="lg"
                                name="hotelimage"  
                                onChange={handleChange}
                                placeholder="Choose file image..."
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                               
                              />
                            </div>
                            <div>
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mb-2 mt-4"
                              >
                                Descriptions
                              </Typography>
                              <Textarea
                                type="textarea"
                                multiple
                                size="lg"
                                name="descriptions"  
                                value={room.descriptions}
                                onChange={handleChange}
                                placeholder="Enter Descriptions about Rooms..."
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                
                              />
                            </div>
                            <div>
                                <Typography
                                  variant="h6"
                                  color="blue-gray"
                                  className="mb-2"
                                >
                                  Total Rooms
                                </Typography>
                                <Input
                                  type="number"
                                  multiple
                                  size="lg"
                                  name="totalroom"  
                                  value={room.totalroom}
                                  onChange={handleChange}
                                  placeholder="Enter total rooms..."
                                  className=" !border-t-blue-gray-200 focus:!border-t-gray-700"
                                 
                                />
                            </div>
                          </div>    
                        <div className="mb-1 w-1/2 p-4">
                          
                            <div>
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mb-2 mt-4"
                              >
                                Rooms Maps
                              </Typography>
                              <Input
                                type="text"
                                multiple
                                size="lg"
                                name="roommap"  
                                value={room.roommap}
                                onChange={handleChange}
                                placeholder="Enter Room Map..."
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                              
                              />
                            </div>
                            <div>
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mb-2 mt-4"
                              >
                                Location
                              </Typography>
                              <Input
                                type="text"
                                multiple
                                size="lg"
                                name="location"  
                                value={room.location}
                                onChange={handleChange}
                                placeholder="Enter Location hotel..."
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                               
                              />
                            </div>
                            <div>
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mb-2 mt-4"
                              >
                                Ratings
                              </Typography>
                              <Input
                                type="number"
                                multiple
                                size="lg"
                                name="rating"  
                                value={room.rating}
                                onChange={handleChange}
                                placeholder="Enter rating hotel..."
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                               
                              />
                            </div>
                            <div>
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mb-2 mt-4"
                              >
                                DateAdded Rooms
                              </Typography>
                              <Input
                                type="date"
                                multiple
                                size="lg"
                                name="dateadded"  
                                value={room.dateadded}
                                onChange={handleChange}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                               
                              />
                            
                          </div>
                        </div>
                      </div>
                      <Button   
                        onClick={handleUpdate}
                        className="mx-auto w-2/4 bg-red-600 uppercase text-sm" fullWidth>
                          Update nows
                      </Button>
                      
                      </form>
                  </Card>
              </div>
            </div>              
          </div>
      </div>
    </>
  );
} export default EditHotel;