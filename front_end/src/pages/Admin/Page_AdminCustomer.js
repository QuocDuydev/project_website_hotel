import React, { Component } from "react";
import { Headers } from "../../components/Header";
import { Sidebar_Admin } from "../../components/SideBar";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export function CreateRoomForm() {
    return (
        <> 
        <div className=" flex h-screen">  
          
          <Sidebar_Admin/> 
          
           <div className="flex flex-col flex-1 w-full">
                <Headers/>
                <div className=" container">
                <Typography variant="h4" color="blue-gray">
                    Add the Rooms
                </Typography>
                <div className=" max-w-md px-3 rounded-lg  overflow-hidden mt-2">
               
                <Card color="transparent" shadow={false}>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-5">
                        Name Rooms
                        </Typography>
                        <Input
                        type="text"
                        size="lg"
                        placeholder="Enter name rooms..."
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-5">
                        Images Rooms
                        </Typography>
                        <Input
                        type="images"
                        size="lg"
                        placeholder="Images..."
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                        />
                         <Typography variant="h6" color="blue-gray" className="-mb-5">
                        Description
                        </Typography>
                        <Input
                        type="text"
                        size="lg"
                        placeholder="Enter descriptions..."
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        />
                <div className=" flex items-center gap-4">
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
                        size="lg"
                        placeholder="Enter price rooms..."
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
                        className="mb-2"
                      >
                        Numbers Rooms
                      </Typography>
                      <Input
                        type="number"
                        size="lg"
                        placeholder="Enter number rooms..."
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        />
                    </div>
                  </div>
                         <Typography variant="h6" color="blue-gray" className="-mb-5">
                        Occupancy
                        </Typography>
                        <Input
                        type="number"
                        size="lg"
                        placeholder="Enter Occupancy..."
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        />
                            <Typography variant="h6" color="blue-gray" className="-mb-5">
                        DateAdded
                        </Typography>
                        <Input
                        type="date"
                        size="lg"
                        placeholder="Enter DateAdded..."
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        />
                    </div>

                    <Button className="mt-6 bg-red-600 uppercase" fullWidth>
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