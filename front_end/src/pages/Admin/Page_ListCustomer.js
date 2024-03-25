import { useState, useEffect } from "react";
import Header_Admin from "../../components/Admin/Layout/Header";
import Sidebar_Admin from "../../components/Admin/Layout/SideBar";
import { useAccessToken } from "../../components/ultiti";
import { getUser } from "../../api/user_API";
import CustomerTable from "../../components/Admin/Customer_Table";
import { deleteUsers } from "../../api/user_API";

function ListCustomer() {
    const [users, setUser] = useState([]);
    const isConfirmed = false;
    const token = useAccessToken()

    useEffect(() => {
        const fetchData = async () => {
            try {

                const userData = await getUser(token);

                setUser(userData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [token]);


    const handleDelete = async (item) => {
        const isConfirmed = window.confirm("Are you sure you want to delete?");
        if (isConfirmed) {
            try {
                await deleteUsers(item.id, token);
                const updatedUsers = await getUser(token);
                setUser(updatedUsers);
                window.location.reload();
            } catch (error) {
                console.error("Error deleting user:", error);
            }
        }
    };

    return (
        <>

            <div className=" flex h-screen overflow-hidden">

                <Sidebar_Admin />
                <div className="flex flex-col flex-1 w-full">
                    <Header_Admin />
                    <CustomerTable users={users} handleDelete={handleDelete} />
                </div>
            </div>
        </>
    )
} export default ListCustomer;