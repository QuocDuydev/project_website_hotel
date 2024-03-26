import React from "react";
import {
    Card,
    Input,
    Button,
    Typography,
    Select, Option
} from "@material-tailwind/react";

function EditCustomerForm({ user, handleChange, handleUpdate, }) {
    return (
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
                                        readOnly
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
                                        readOnly
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
                                        readOnly
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
                                    <select
                                        name="account_type"
                                        size="md"
                                        value={user?.account_type || ""}

                                        onChange={handleChange}
                                        className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-[100%] border-2 px-2 py-2 rounded-md">

                                        <option value="user">User </option>
                                        <option value="admin">Admin </option>
                                        <option value="superadmin">Super Admin </option>

                                    </select>

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
                                        readOnly
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
    );
}
export default EditCustomerForm;