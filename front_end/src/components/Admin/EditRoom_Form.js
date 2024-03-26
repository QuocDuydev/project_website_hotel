import React from "react";
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea
} from "@material-tailwind/react";

function EditRoomForm({ room, handleChange, handleUpdate, selectedHotel }) {
    return (
        <div className=" container m-4 text-red-500">
            <Typography variant="h4" color="blue-gray">
                Edit the Rooms
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
                                        Name Rooms
                                    </Typography>

                                    <Input
                                        type="text"
                                        size="lg"
                                        name="roomname"
                                        value={room.roomname}
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
                                        Hotel Name
                                    </Typography>
                                    <Input
                                        type="text"
                                        size="lg"
                                        name="hotel"
                                        value={selectedHotel ? selectedHotel.hotelname : ''}
                                        placeholder="Enter name rooms..."
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        readOnly // Make the input readOnly
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
                                        onChange={handleChange}

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
                                        readOnly
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
    );
}
export default EditRoomForm;