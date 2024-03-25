import React from "react";
import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";

function CardRightBooking({ booking, rooms, handleChange, handleCreate }) {
    return (
        <div className=" max-w-full px-3 rounded-lg mt-2 ">
        {rooms.map((item) => (
          <div className=" border-2 px-3 py-3 rounded-md ">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-3"
            >
              Your rooms details
            </Typography>

            <div className="flex">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-2 text-blue-700"
              >
                Rooms Name:
              </Typography>
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-2  ml-2 "
              >
                {item.roomname}
              </Typography>
            </div>

            <div className=" flex ">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-2 text-blue-700"
              >
                Descriptions:
              </Typography>
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-2  ml-2"
              >
                {typeof item.descriptions === 'string' ? item.descriptions.split(' ').slice(0, 25).join(' ') : ''}
              </Typography>
            </div>
            <div class="border-b mb-2"></div>
            <div className=" flex">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-2 text-blue-700"
              >
                Number of guests
              </Typography>
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-2  ml-2"
              >
                <span className="mx-auto px-2 py-1 text-center text-lg leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">{item.roomoccupancy} - person</span>
              </Typography>
            </div>

            <Typography
              variant="h3"
              color="blue-gray"
              className=" text-red-600"

            >
              Price room/nights: {item.roomprice}$
            </Typography>


          </div>
        ))}
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
                    value={booking?.name}
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
                    Email
                  </Typography>

                  <Input
                    type="email"
                    multiple
                    size="lg"
                    name="email"
                    value={booking?.email}
                    onChange={handleChange}
                    placeholder="Enter email..."
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-700"

                  />
                </div>

              </div>
              <div className="mb-1 w-1/2 p-4 ">
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
                    value={booking?.phonenumber}
                    onChange={handleChange}
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
                    Address
                  </Typography>

                  <Input
                    type="text"
                    multiple
                    size="lg"
                    name="address"
                    value={booking?.address}
                    onChange={handleChange}
                    placeholder="Enter your Address..."
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                  />
                </div>
              </div>
            </div>
            <Button
              onClick={handleCreate}
              className="mx-auto w-2/4 bg-red-600 uppercase text-sm" fullWidth>
              Book nows
            </Button>

          </form>
        </Card>
      </div>
    );
}
export default CardRightBooking;