import React from "react";
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

function EditBookingForm({ booking, handleUpdate, handleChange, selectedHotel, selectedRoom }) {
    return (
        <div className=" container m-4 text-red-500">
            <Typography variant="h4" color="blue-gray">
                Edit the Bookings
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
                                        multiple
                                        size="lg"
                                        name="name"
                                        value={booking.name}
                                        onChange={handleChange}
                                        placeholder="Enter Descriptions about Rooms..."
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        readOnly
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
                                        type="text"
                                        multiple
                                        size="lg"
                                        name="email"
                                        value={booking.email}
                                        onChange={handleChange}
                                        placeholder="Enter price rooms..."
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-700"
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <Typography
                                        variant="h6"
                                        color="blue-gray"
                                        className="mb-2 mt-3"
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
                                        className="mb-2 mt-3"
                                    >
                                        Occupancy Room
                                    </Typography>
                                    <Input
                                        type="text"
                                        size="lg"
                                        name="room"
                                        value={selectedRoom ? selectedRoom.roomoccupancy : ''}
                                        placeholder="Enter name rooms..."
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        readOnly // Make the input readOnly
                                    />
                                </div>
                                <div>
                                    <Typography
                                        variant="h6"
                                        color="blue-gray"
                                        className="mb-2 mt-3"
                                    >
                                        Check in
                                    </Typography>

                                    <Input
                                        type="date"
                                        multiple
                                        size="lg"
                                        name="checkin"
                                        value={booking.checkin}
                                        onChange={handleChange}
                                        placeholder="Enter Occupancy rooms..."
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="mb-1 w-1/2 p-4">
                            <div>
                                    <Typography
                                        variant="h6"
                                        color="blue-gray"
                                        className="mb-2 "
                                    >
                                        Choise Process
                                    </Typography>

                                    <select
                                        type="text"
                                        size="lg"
                                        name="status"
                                        value={booking.status}  // Giá trị trạng thái hiện tại được chọn từ cơ sở dữ liệu
                                        onChange={handleChange}
                                        placeholder="Enter name rooms..."
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full border-2 px-2 py-2 rounded-md">

                                        <option value="processing">Processing </option>
                                        <option value="active">Active </option>

                                    </select>
                                </div>
                                <div>
                                    <Typography
                                        variant="h6"
                                        color="blue-gray"
                                        className="mb-2 mt-3"
                                    >
                                        Phone Number
                                    </Typography>

                                    <Input
                                        type="number"
                                        multiple
                                        size="lg"
                                        name="phonenumber"
                                        value={booking.phonenumber}
                                        onChange={handleChange}
                                        placeholder="Enter Numbers rooms..."
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        readOnly

                                    />

                                </div>
                                <div>
                                    <Typography
                                        variant="h6"
                                        color="blue-gray"
                                        className="mb-2 mt-3"
                                    >
                                        Address
                                    </Typography>

                                    <Input
                                        type="text"
                                        multiple
                                        size="lg"
                                        name="address"
                                        value={booking.address}
                                        onChange={handleChange}
                                        placeholder="Enter Numbers rooms..."
                                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        readOnly
                                    />

                                </div>
                                
                                <div>
                                    <Typography
                                        variant="h6"
                                        color="blue-gray"
                                        className="mb-2 mt-3"
                                    >
                                        Total Amount
                                    </Typography>
                                    <Input
                                        type="text"
                                        size="lg"
                                        name="total"
                                        value={booking.total}
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
                                        Check out
                                    </Typography>

                                    <Input
                                        type="date"
                                        multiple
                                        size="lg"
                                        name="checkout"
                                        value={booking.checkout}
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
export default EditBookingForm;