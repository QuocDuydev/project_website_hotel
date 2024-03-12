import { useState, useEffect } from "react";
import axios from "axios";
import { Navbars } from "../../components/Navbar";
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea,
    Alert
  } from "@material-tailwind/react";
function Booking() {

    return(
        <>
         <Navbars/>
            <div className="container mx-auto">
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
                        //   value={user.username}
                        //   onChange={handleChange}
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
                            Email
                          </Typography>
                          
                          <Input
                            type="email"
                            multiple
                            size="lg"
                            name="email"  
                            // value={user.email}
                            // onChange={handleChange}
                            placeholder="Enter email..."
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-700"
                            
                          />
                          
                      </div>
                      <div>
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="mb-2 mt-4"
                        >
                          Phone number
                        </Typography>
                      
                        <Input
                          type="number"
                          multiple
                          size="lg"
                          name="name"  
                        //   value={user.name}
                        //   onChange={handleChange}
                          placeholder="Enter Phone number..."
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
                            Hotel Name
                          </Typography>
                          
                          <Input
                            type="text"
                            multiple
                            size="lg"
                            name="password"  
                            // value={user.password}
                            // onChange={handleChange}
                            placeholder="Enter Password..."
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-700"
                            
                          />
                          
                      </div>
                     
                      <div>
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="mb-2 mt-4"
                        >
                          Check in
                        </Typography>
                        
                        <Input
                          type="date"
                          multiple
                          size="lg"
                          name="joined"  
                        //   value={user.joined}
                        //   onChange={handleChange}
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        
                        />
                        
                      </div>
                      <div>
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="mb-2 mt-4"
                        >
                          Check out
                        </Typography>
                        
                        <Input
                          type="date"
                          multiple
                          size="lg"
                          name="joined"  
                        //   value={user.joined}
                        //   onChange={handleChange}
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        
                        />
                        
                      </div>
                    </div>
                  </div>
                  <Button   
                    // onClick={handleCreate}
                    className="mx-auto w-2/4 bg-red-600 uppercase text-sm" fullWidth>
                      Add nows
                  </Button>
                  
                  </form>
              </Card>
          </div>
            </div>
           

        </>
    );
} export default Booking;