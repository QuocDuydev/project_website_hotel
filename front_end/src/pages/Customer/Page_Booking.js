import { useState, useEffect } from "react";
import axios from "axios";
import { Navbars } from "../../components/Navbar";
import {
    Card,
    Input,
    Button,
    Typography,
    Rating,
    Textarea,
    Alert
  } from "@material-tailwind/react";
function Booking() {

    return(
        <>
         <Navbars/>
         <div className="grid grid-cols-6">
            <div className="grid gap-4 relative col-span-2  ">
              <div className=" max-w-full px-3 rounded-lg mt-2 mb-3 ">
                <div className="mb-1 w-full h-full p-4">
                    <div className=" border-2 px-3 py-3 rounded-md">
                    <Rating
                        unratedColor="red"
                        ratedColor="red"
                        
                      />
                      <Typography
                        variant="h4"
                        color="blue-gray"
                        className="mb-2 text-blue-700"
                      >
                        Name Rooms
                      </Typography>
                      <div className=" flex mt-1">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    
                        <Typography variant="h6" color="blue-gray" className="ml-1">Roommap - Locations</Typography>
                      </div>
                    </div>

                    <div className=" border-2 px-3 py-3 rounded-md mt-3">
                      <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-3"
                      >
                          Your booking details
                      </Typography>
                      <div className=" flex">
                        <Typography
                          variant="h3"
                          color="blue-gray"
                          className="mb-2 text-blue-700"
                        >
                          Check in:
                        </Typography>
                        <Typography
                          variant="h3"
                          color="blue-gray"
                          className="mb-2  ml-2"
                        >
                          Date 
                        </Typography>
                      </div>
                      <div className=" flex">
                        <Typography
                          variant="h3"
                          color="blue-gray"
                          className="mb-2 text-blue-700"
                        >
                          Check out:
                        </Typography>
                        <Typography
                          variant="h3"
                          color="blue-gray"
                          className="mb-2  ml-2"
                        >
                          Date 
                        </Typography>
                      </div>
                      <div class="border-b mb-2"></div>
                      <div className=" flex">
                        <Typography
                          variant="h3"
                          color="blue-gray"
                          className="mb-2 text-blue-700"
                        >
                          Total length of stay:
                        </Typography>
                        <Typography
                          variant="h3"
                          color="blue-gray"
                          className="mb-2  ml-2"
                        >
                          ... nights 
                        </Typography>
                      </div>
                      <Typography
                          variant="h3"
                          color="blue-gray"
                          className=""
                        >
                          Price room/nights: ...$
                      </Typography>
                     
                    </div>  

                    <div className=" border-2 px-3 py-3 rounded-md mt-3">
                    
                      <Typography
                        variant="h4"
                        color="blue-gray"
                        className="mb-2 uppercase"
                      >
                        Totals
                      </Typography>
                      <div className="px-2 bg-slate-300 text-center">
                          <Typography
                            variant="h5"
                            color="blue-gray"
                            className="mb-2 uppercase"
                          >
                            Sum price
                          </Typography>
                      </div>
                    </div>    
                </div>
              </div>
            </div>
            <div className="grid gap-4 relative col-span-4 ml-3 mb-3 mt-4">
            <div className=" max-w-full px-3 rounded-lg mt-2 ">
                
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
                            name="name"  
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
                            Check in
                          </Typography>
                          
                          <Input
                            type="date"
                            multiple
                            size="lg"
                            name="checkin"  
                          //   value={user.joined}
                          //   onChange={handleChange}
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
                            Phone number
                          </Typography>
                        
                          <Input
                            type="number"
                            multiple
                            size="lg"
                            name="phonenumber"  
                          //   value={user.name}
                          //   onChange={handleChange}
                            placeholder="Enter Phone number..."
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                          
                          />
                      </div>
                      <div>
                            <Typography
                              variant="h6"
                              color="blue-gray"
                              className="mb-2 mt-4"
                            >
                              Country/region
                            </Typography>
                            
                            <Input
                              type="text"
                              multiple
                              size="lg"
                              name="country"  
                              // value={user.password}
                              // onChange={handleChange}
                              placeholder="Enter  Country/region..."
                              className=" !border-t-blue-gray-200 focus:!border-t-gray-700"
                              
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
          </div>

        </>
    );
} export default Booking;