import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
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
  
function EditRoom () {
  const {id}  = useParams();
  const [hotel, setHotel] = useState([]);
  const [room, setRoom] = useState({
    hotel: "",
    roomname: "",
    roomimage: null,
    descriptions: "",
    roomprice: "",
    roomnumber: "",
    roomoccupancy: "",
    dateadded: "",
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const history= useHistory();
  useEffect(() => {
    axios
    .get(`http://localhost:8000/api/hotels/`)
    .then((response) => {
      setHotel(response.data);
      
      // console.log(room.roomimage)
    })
    .catch((error) => {
      console.error("Error fetching room data:", error);
    });

    axios
      .get(`http://localhost:8000/api/rooms/${id}/`)
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
    formData.append('hotel', room.hotel);
    formData.append('roomname', room.roomname);
    formData.append("roomimage", room.roomimage);
    formData.append('descriptions', room.descriptions);
    formData.append('roomprice', room.roomprice);
    formData.append('roomnumber', room.roomnumber);
    formData.append('roomoccupancy', room.roomoccupancy);
    formData.append('dateadded', room.dateadded);
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }
    axios({
      method: 'put',
      url: `http://localhost:8000/api/rooms/${id}/`,
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
          history.push("/admin/list-room");
        }, 1000);  
      })
      .catch((error) => {
        console.error("Update failed:", error);
       
      });
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
  
    if (name === "roomimage" && files && files.length > 0) {
      
      const file = files[0];

      setRoom((prevRoom) => ({
        ...prevRoom,
        [name]: file,
      }));
    } else {
      setRoom((prevRoom) => ({ ...prevRoom, [name]: value }));
    };
  };
  const selectedHotel = hotel.find((item) => item.id === room.hotel);
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
                  Edit the Rooms
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
                              Name Rooms
                            </Typography>
                          
                            <Input
                              type="text"
                              size="lg"
                              name="roomname"  
                              value={room.roomname}
                              onChange={handleChange}
                              placeholder="Enter name rooms..."
                              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                             
                              />
                            
                          </div>
                          <div>
                            <Typography
                              variant="h6"
                              color="blue-gray"
                              className="mb-2 mt-4"
                            >
                              Hotel Name
                            </Typography>
                            <Input
                              type="text"
                              size="lg"
                              name="hotel"
                              value={selectedHotel ? selectedHotel.hotelname : ''}
                              placeholder="Enter name rooms..."
                              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                              readOnly // Make the input readOnly
                            />
                          </div>
                          <div>
                            <Typography
                              variant="h6"
                              color="blue-gray"
                              className="mb-2 mt-4"
                            >
                              Images Rooms
                            </Typography>
                            
                            <Input
                              type="file"
                              multiple
                              size="lg"
                              
                              name="roomimage"  
                              onChange={handleChange}
                              
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
                        </div>    
                      <div className="mb-1 w-1/2 p-4">
                        <div>
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mb-2"
                              >
                                Price Rooms
                              </Typography>
                              
                              <Input
                                type="number"
                                multiple
                                size="lg"
                                name="roomprice"  
                                value={room.roomprice}
                                onChange={handleChange}
                                placeholder="Enter price rooms..."
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-700"
                                
                              />
                              
                          </div>
                          <div>
                            <Typography
                              variant="h6"
                              color="blue-gray"
                              className="mb-2 mt-4"
                            >
                              Numbers Rooms
                            </Typography>
                            
                            <Input
                              type="number"
                              multiple
                              size="lg"
                              name="roomnumber"  
                              value={room.roomnumber}
                              onChange={handleChange}
                              placeholder="Enter Numbers rooms..."
                              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            
                            />
                          
                          </div>
                          <div>
                            <Typography
                              variant="h6"
                              color="blue-gray"
                              className="mb-2 mt-4"
                            >
                              Occupancy Rooms
                            </Typography>
                            
                            <Input
                              type="number"
                              multiple
                              size="lg"
                              name="roomoccupancy"  
                              value={room.roomoccupancy}
                              onChange={handleChange}
                              placeholder="Enter Occupancy rooms..."
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
} export default EditRoom;