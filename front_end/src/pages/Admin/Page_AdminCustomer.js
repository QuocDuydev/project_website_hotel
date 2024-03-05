import React, { Component } from "react";
import { Headers } from "../../components/Header";
import { Sidebar_Admin } from "../../components/SideBar";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Textarea,
  } from "@material-tailwind/react";
   
  export function CreateRoomForm() {
    return (
        <> 
        <div className=" flex h-screen">  
          
          <Sidebar_Admin/> 
           <div className="flex flex-col flex-1 w-full">
                <Headers/>
                <div className=" container m-4 text-red-500">
                <Typography variant="h4" color="blue-gray">
                    Add the Rooms
                </Typography>
                <div className=" max-w-full px-3 rounded-lg  overflow-hidden mt-2">
               
                <Card color="transparent" shadow={false}>
                    <form className=" ">
                      <div className="flex ">
                    <div className="mb-1 flex-grow gap-6 p-4">
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
                            className="mb-2"
                          >
                            Images Rooms
                          </Typography>
                          <Input
                            type="file"
                            multiple
                            size="lg"
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
                            className="mb-2"
                          >
                            Descriptions
                          </Typography>
                          <Textarea
                            type="textarea"
                            multiple
                            size="lg"
                            placeholder="Enter Descriptions about Rooms..."
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                          />
                        </div>
                      </div>    
                    <div className="mb-1 flex-grow gap-6 p-4">
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
                            multiple
                            size="lg"
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
                            className="mb-2"
                          >
                            Occupancy Rooms
                          </Typography>
                          <Input
                            type="number"
                            multiple
                            size="lg"
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
                            className="mb-2"
                          >
                            DateAdded Rooms
                          </Typography>
                          <Input
                            type="date"
                            multiple
                            size="lg"
                           
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <Button className="mt-6 w-full items-center bg-red-600 uppercase text-sm" fullWidth>
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