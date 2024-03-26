import React from "react";
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea
} from "@material-tailwind/react";

function CreateHotelForm({ hotel, handleChange, handleCreate }) {
    return (
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
                                        value={hotel.hotelname}
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
                                        value={hotel.descriptions}
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
                                        value={hotel.totalroom}
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
                                        value={hotel.roommap}
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
                                        value={hotel.location}
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
                                        value={hotel.rating}
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
                                        defaultValue={hotel.dateadded}
                                        onChange={handleChange}
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        disabled
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
    );
}
export default CreateHotelForm;