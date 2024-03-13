import React, {useState, useEffect} from "react";
import  Header_Admin  from "../../components/Admin/Header";
import  Sidebar_Admin  from "../../components/Admin/SideBar";
import { useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
    Alert,
    Select, 
    Option
  } from "@material-tailwind/react";
   
function CreateRoomForm () {
    const { id } = useParams();
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
    const [taskList, setTaskList] = useState([]);
    const navigate= useNavigate();
    const [CreateSuccess, setCreateSuccess] = useState(false);
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
          setRoom((prevRoom) => ({ ...prevRoom, hotel: response.data.hotel_id }));
        })
        .catch((error) => {
          console.error("Error fetching room data:", error);
        });
  
      
    }, [id]);
  
    const handleChange = (e) => {
      const { name, type } = e.target;
  
      if (type === "file" && e.target.files) {
        const file = e.target.files[0];
  
        setRoom({
          ...room,
          [name]: file,
        });
      } else {
        const value = e.target.value;
  
        setRoom({
          ...room,
          [name]: value,
        });
      }
    };
  
    const handleCreate = () => {
      const formData = new FormData();
      formData.append("hotel", room.hotel);
      formData.append("roomname", room.roomname);
      formData.append("roomimage", room.roomimage);
      formData.append("descriptions", room.descriptions);
      formData.append("roomprice", room.roomprice);
      formData.append("roomnumber", room.roomnumber);
      formData.append("roomoccupancy", room.roomoccupancy);
      formData.append("dateadded", room.dateadded);
  
      axios({
        method: 'post',
        url: `http://localhost:8000/api/rooms/`,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' }, // Make sure to set the content type
      })
        .then((response) => {
          console.log("Update successful:", response.data);
          setCreateSuccess(true);
          setTimeout(() => {
            setCreateSuccess(false);
          }, 1000);
  
          // Redirect to home page after 5 seconds
          setTimeout(() => {
            navigate("/admin/list-room");
          }, 1000);
          // Optionally, you can reset the form or perform additional actions after a successful update.
        })
        .catch((error) => {
          console.error("Update failed:", error);
          // Handle errors or provide feedback to the user
        });
    };
      return (
        <> 
        <div className=" flex h-screen overflow-hidden">  
          
          <Sidebar_Admin/> 
           <div className="flex flex-col flex-1 w-full">
                <Header_Admin/>
              {CreateSuccess && (
                  <Alert
                      className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
                    >
                      Create successfuly !!
                </Alert>
              )}
                <div className=" container m-4 text-red-500">
                <Typography variant="h4" color="blue-gray">
                    Create the Rooms
                </Typography>
                <div className=" max-w-full px-3 rounded-lg mt-2">
               
                    <Card color="transparent" shadow={false}>
                        <form className=" ">
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
                              Choise Hotel
                            </Typography>
                            <select
                             type="text"
                             size="lg"
                             name="hotel"  
                             value={room.hotel}
                             onChange={handleChange}
                             placeholder="Enter name rooms..."
                             className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-full border-2 px-2 py-2 rounded-md">
                             
                             <option value=""> Select a hotel</option>
                             {hotel.map((item) => (
                                <option key={item.id} value={item.id}>
                                  {item.hotelname}
                                </option>
                               ))}
                              </select>
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
                          onClick={handleCreate}
                          className="mx-auto w-2/4 bg-red-600 uppercase text-sm" fullWidth>
                            Add nows
                        </Button>
                        </form>
                    </Card>
                </div>
             </div>
               
                
           </div>
                    
           {/* <Headers/> */}
           </div>
      </>
      
    );
} export default CreateRoomForm;