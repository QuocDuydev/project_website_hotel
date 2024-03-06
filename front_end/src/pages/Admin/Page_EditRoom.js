import React, {Component, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Headers } from "../../components/Header";
import { Sidebar_Admin } from "../../components/SideBar";
import axios from "axios";
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
  } from "@material-tailwind/react";
function EditRoom () {
  const {id}  = useParams();
  const [room, setRoom] = useState({
    roomname: "",
    roomimage: "",
    descriptions: "",
    roomprice: "",
    roomnumber: "",
    roomoccupancy: "",
    dateadded: "",
    // Add other properties as needed
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/rooms/${id}/`)
      .then((response) => {
        setRoom(response.data);
      })
      .catch((error) => {
        console.error("Error fetching room data:", error);
      });
  }, [id]);

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       data: null,
    //       id: "id",
    //       // roomname: "roomname",
    //       // roomimage: "roomimage",
    //       // descriptions: "descriptions",
    //       // roomprice: "roomprice",
    //       // roomnumber: "roomnumber",
    //       // roomoccupancy: "roomoccupancy",
    //       // dateadded: "dateadded",
    //        // Replace 'YOUR_ID' with the actual ID you want to update
    //       // newData: {
    //       //   // Include the updated data fields
    //       //   roomname: "newroomname",
    //       //   roomimage: "newroomimage",
    //       //   descriptions: "newdescriptions",
    //       //   roomprice: "newroomprice",
    //       //   roomnumber: "newroomnumber",
    //       //   roomoccupancy: "newroomoccupancy",
    //       //   dateadded: "newdateadded",

    //       //   // Include other fields you want to update
    //       // },
    //     };
    //   }
    //   componentDidMount() {
    //         // Replace 'YOUR_ID' with the actual ID you want to fetch
    //         const id = 'id';
    //         axios.get(`http://localhost:8000/api/rooms/`)
    //         .then((response) => {
    //           this.setState({ data: response.data });
    //           console.log(this.id);
    //         })
    //         .catch(error => {
    //           console.error("Error details:", error);
    //         });
    //       }
    
    //   // handleUpdate = () => {
    //   //   const { id, newData } = this.state;
    
    //   //   axios
    //   //     .put(`http://localhost:8000/api/rooms/${id}`, newData)
    //   //     .then((response) => {
    //   //       console.log("Update successful:", response.data);
    //   //       // Handle any additional logic after a successful update
    //   //     })
    //   //     .catch((error) => {
    //   //       console.error("Update failed:", error);
    //   //       // Handle errors or provide feedback to the user
    //   //     });
    //   // };
    //   handleChange = e => {
    //     const { name, type } = e.target;
    
    //     if (type === 'file' && e.target.files) {
    //       // Xử lý tệp được chọn
    //       const file = e.target.files[0];
    
    //       // Lưu thông tin tệp trong state
    //       this.setState({
    //         activeItem: {
    //           ...this.state.activeItem,
    //           [name]: file,
    //         },
    //       });
    //     } else {
    //       // Xử lý các trường khác
    //       const value = e.target.value;
    
    //       this.setState({
    //         activeItem: {
    //           ...this.state.activeItem,
    //           [name]: value,
    //         },
    //       });
    //     }
    //  }

        // const { data } = this.state;
        // const onSave = this.handleUpdate;

        return (
            <> 
            <div className=" flex h-screen overflow-hidden">  
              
              <Sidebar_Admin/> 
               <div className="flex flex-col flex-1 w-full">
                    <Headers/>
                    <div className=" container m-4 text-red-500">
                    <Typography variant="h4" color="blue-gray">
                        Add the Rooms
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
                                    name="newroomname"  
                                    value={room.roomname}
                                    
                                    placeholder="Enter name rooms..."
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
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
                                   
                                    name="newroomimage"  
                                   
                                    placeholder="Choose file image..."
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
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
                                    name="newdescriptions"  
                                    value={room.descriptions}
                                    
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
                                      type="numboer"
                                      multiple
                                      size="lg"
                                      name="newroomprice"  
                                      value={room.roomprice}
                                      
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
                                    name="newroomnumber"  
                                    value={room.roomnumber}
                                    
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
                                    name="newroomoccupancy"  
                                    value={room.roomoccupancy}
                                    
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
                                    name="newdateadded"  
                                    value={room.dateadded}
                                    
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                  
                                  />
                                  
                                </div>
                              </div>
                            </div>
                            <Button   
                              // onClick={() => onSave(this.state.activeItem)}
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

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       data: null,
    //     };
    //   }
    
    //   componentDidMount() {
    //     // Replace 'YOUR_ID' with the actual ID you want to fetch
    //     const id = 'id';
    //     axios.get(`http://localhost:8000/api/rooms/${id}`).then((response) => {
    //       this.setState({ data: response.data });
    //     });
    //   }
    // render(){
    //     const { data } = this.state;
    //     return(
    //         <div>
    //             <h1>Data from Database</h1>
    //             {data ? (
    //             <div>
    //                 <p>ID: {data.id}</p>
    //                 <p>Name: {data.roomname}</p>
    //                 {/* Include other fields you want to display */}
    //             </div>
    //             ) : (
    //             <p>Loading...</p>
    //             )}
    //         </div>
    //     )
    // }
