import React, {useEffect, useState} from "react";
import { useAccessToken } from "../../components/ultiti";
import { useParams, useNavigate } from "react-router-dom";
import  Header_Admin  from "../../components/Admin/Layout/Header";
import  Sidebar_Admin  from "../../components/Admin/Layout/SideBar";
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
  
function EditCustomer () {
  const {id}  = useParams();
  const [user, setUser] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    account_type: "",
    joined: "",
  });
  const [defaultAccountType, setDefaultAccountType] = useState("");
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const navigate = useNavigate();
  let token = useAccessToken()
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/${id}/`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
      .then((response) => {
        setUser(response.data);
        setDefaultAccountType(response.data.account_type);
        // console.log(room.roomimage)
      })
      .catch((error) => {
        console.error("Error fetching room data:", error);
      });
  }, [id]);
  const handleUpdate = () => {
    // const formData = new FormData();
    // formData.append('username', user.username);
    // formData.append("name", user.name);
    // formData.append('email', user.email);
    // formData.append('password', user.password);
    // formData.append('account_type', user.account_type);
    // formData.append('joined', user.joined);
    
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }
    axios({
      method: 'put',
      url: `http://localhost:8000/api/users/${id}/`,
      data:   user,
      headers: { 'Content-Type': 'multipart/form-data', 
            'Authorization': `Bearer ${token}`}, 
    })
      .then((response) => {
        console.log("Update successful:", response.data);
        setUpdateSuccess(true);
        setTimeout(() => {
          setUpdateSuccess(false);
        }, 1000);

        // Redirect to home page after 1 seconds
        setTimeout(() => {
          navigate("/admin/list-customer")
        }, 1000);  
      })
      .catch((error) => {
        console.error("Update failed:", error);
       
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target
      setUser((prevUser) => ({ ...prevUser, [name]: value }));
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
                  Edit the Users
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
                              Full Name
                            </Typography>
                          
                            <Input
                              type="text"
                              size="lg"
                              name="username"  
                              value={user.username}
                              onChange={handleChange}
                              placeholder="Enter  username..."
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
                              Full name
                            </Typography>
                          
                            <Input
                              type="text"
                              multiple
                              size="lg"
                              name="name"  
                              value={user.name}
                              onChange={handleChange}
                              placeholder="Enter Full name..."
                              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            
                            />
                          </div>
                          <div>
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mb-2 mt-4"
                              >
                                Email
                              </Typography>
                              
                              <Input
                                type="email"
                                multiple
                                size="lg"
                                name="email"  
                                value={user.email}
                                onChange={handleChange}
                                placeholder="Enter email..."
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
                              Account type
                            </Typography>
                            <Select
                            name="account_type"
                            size="md"
                            value={user?.account_type || ""}
                            className="rounded-md py-2 h-[40px] flex items-center bg-white !border-t-blue-gray-200 focus:!border-t-gray-700"
                            onChange={(val) => handleChange({ target: { name: "account_type", value: val } })}
                            >
                            <Option value="user">Người dùng</Option>
                            <Option value="admin">Quản trị viên</Option>
                            <Option value="superadmin">Quản trị viên cấp cao</Option>
                            </Select>
                          </div>
                         
                          <div>
                            <Typography
                              variant="h6"
                              color="blue-gray"
                              className="mb-2 mt-4"
                            >
                              Joined Account
                            </Typography>
                            
                            <Input
                              type="date"
                              multiple
                              size="lg"
                              name="joined"  
                              value={user.joined}
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
} export default EditCustomer;