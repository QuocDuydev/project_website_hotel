import React, {Component} from "react";
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
   
  export class CreateRoomForm extends Component {
    constructor(props){
      super(props);
      this.state = {
          activeItem:  {    
              roomname: "",
              roomimage: "",
              descriptions: "",
              roomprice: "",
              roomnumber: "",
              roomoccupancy: "",
              dateadded: "",
            },
            taskList: []
      };
  }
  componentDidMount() {
      this.refreshList();
    }
   
  refreshList = () => {
      axios   //Axios to send and receive HTTP requests
        .get("http://localhost:8000/api/rooms/")
        .then(res => this.setState({ taskList: res.data }))
        .catch(err => console.log(err));
    };

  handleChange = e => {
    const { name, type } = e.target;

    if (type === 'file' && e.target.files) {
      // Xử lý tệp được chọn
      const file = e.target.files[0];

      // Lưu thông tin tệp trong state
      this.setState({
        activeItem: {
          ...this.state.activeItem,
          [name]: file,
        },
      });
    } else {
      // Xử lý các trường khác
      const value = e.target.value;

      this.setState({
        activeItem: {
          ...this.state.activeItem,
          [name]: value,
        },
      });
    }
  };
  
  handleCreate = item => {  
    const formData = new FormData();
    formData.append("roomname", item.roomname);
    formData.append("roomimage", item.roomimage);
    formData.append("descriptions", item.descriptions);
    formData.append("roomprice", item.roomprice);
    formData.append("roomnumber", item.roomnumber);
    formData.append("roomoccupancy", item.roomoccupancy);
    formData.append("dateadded", item.dateadded); 
      axios
        .post(`http://localhost:8000/api/rooms/`,formData )
        // ,{
        //   headers: {
        //       // 'Content-Type': 'application/json',
        //       'Content-Type': 'multipart/form-data',
        //       // Add any other required headers
        //     }
        // })
        .then(res => {
          this.refreshList();   
        });
        
    }
    render(){
      const onSave = this.handleCreate;
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
                                name="roomname"  
                                value={this.state.activeItem.roomname}
                                onChange={this.handleChange}
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
                                name="roomimage"  
                                onChange={this.handleChange}
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
                                name="descriptions"  
                                value={this.state.activeItem.descriptions}
                                onChange={this.handleChange}
                                placeholder="Enter Descriptions about Rooms..."
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
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
                                  name="roomprice"  
                                  value={this.state.activeItem.roomprice}
                                  onChange={this.handleChange}
                                  placeholder="Enter price rooms..."
                                  className=" !border-t-blue-gray-200 focus:!border-t-gray-700"
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
                                Numbers Rooms
                              </Typography>
                              <Input
                                type="number"
                                multiple
                                size="lg"
                                name="roomnumber"  
                                value={this.state.activeItem.roomnumber}
                                onChange={this.handleChange}
                                placeholder="Enter Numbers rooms..."
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
                                Occupancy Rooms
                              </Typography>
                              <Input
                                type="number"
                                multiple
                                size="lg"
                                name="roomoccupancy"  
                                value={this.state.activeItem.roomoccupancy}
                                onChange={this.handleChange}
                                placeholder="Enter Occupancy rooms..."
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
                                DateAdded Rooms
                              </Typography>
                              <Input
                                type="date"
                                multiple
                                size="lg"
                                name="dateadded"  
                                value={this.state.activeItem.dateadded}
                                onChange={this.handleChange}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <Button   
                          onClick={() => onSave(this.state.activeItem)}
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
    }
    
  }