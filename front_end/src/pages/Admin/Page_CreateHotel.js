import React, {useState, useEffect} from "react";
import  Header_Admin  from "../../components/Admin/Header";
import  Sidebar_Admin  from "../../components/Admin/SideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
    Alert
  } from "@material-tailwind/react";
   
function CreateHotelForm () {
    const [activeItem, setActiveItem] = useState({
      hotelname: "",
      hotelimage: "",
      descriptions: "",
      totalroom: "",
      roommap: "",
      location: "",
      rating: "",
      dateadded: "",
    });
    const [taskList, setTaskList] = useState([]);
    const navigate= useNavigate();
    const [CreateSuccess, setCreateSuccess] = useState(false);
    useEffect(() => {
      refreshList();
    }, []);
  
    const refreshList = () => {
      axios
        .get("http://localhost:8000/api/hotels/")
        .then((response) => setTaskList(response.data))
        .catch((error) => console.log(error));
    };
  
    const handleChange = (e) => {
      const { name, type } = e.target;
  
      if (type === "file" && e.target.files) {
        const file = e.target.files[0];
  
        setActiveItem({
          ...activeItem,
          [name]: file,
        });
      } else {
        const value = e.target.value;
  
        setActiveItem({
          ...activeItem,
          [name]: value,
        });
      }
    };
  
    const handleCreate = () => {
      const formData = new FormData();
      formData.append("hotelname", activeItem.hotelname);
      formData.append("hotelimage", activeItem.hotelimage);
      formData.append("descriptions", activeItem.descriptions);
      formData.append("totalroom", activeItem.totalroom);
      formData.append("roommap", activeItem.roommap);
      formData.append("location", activeItem.location);
      formData.append("rating", activeItem.rating);
      formData.append("dateadded", activeItem.dateadded);
  
      axios({
        method: 'post',
        url: `http://localhost:8000/api/hotels/`,
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
            navigate("/admin/list-hotel");
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
                    Create the Hotels
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
                                Name Hotels
                              </Typography>
                              <Input
                                type="text"
                                size="lg"
                                name="hotelname"  
                                value={activeItem.hotelname}
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
                                value={activeItem.descriptions}
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
                                  value={activeItem.totalroom}
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
                                value={activeItem.roommap}
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
                                value={activeItem.location}
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
                                value={activeItem.rating}
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
                                value={activeItem.dateadded}
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
} export default CreateHotelForm;