import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { postUser } from "../../api/user_API";

function Registers() {
    const [activeItem, setActiveItem] = useState({
        username: "",
        email: "",
        password: "",
        repassword: "",
    });

    const [passwordsMatch, setPasswordsMatch] = useState(true); 
    const navigate = useNavigate()

    const handleChange = e => {
        const { name, value } = e.target;
        setActiveItem({ ...activeItem, [name]: value });
    };

    const handleCreate = async () => {
        if (activeItem.password === activeItem.repassword) {
            // Mật khẩu khớp nhau, tiếp tục xử lý đăng nhập hoặc đăng ký
            try {
                await postUser(activeItem.username, activeItem.email, activeItem.password);
                alert("Register Successfully!");
                setActiveItem({
                    username: "",
                    email: "",
                    password: "",
                    repassword: "",
                });
                navigate("/login");
            } catch (error) {
                console.error("Error create user failed:", error);
            }
        } else {
            // Mật khẩu không khớp nhau, hiển thị thông báo lỗi
            setPasswordsMatch(false);
        }
    };
    return (
        <div className="bg-gradient-to-r from-purple-300 to-blue-200">
            <div className="w-full mx-auto min-h-screen flex items-center justify-center p-3">
                <div className="w-full bg-white shadow overflow-hidden rounded-xl px-6 py-4  lg:w-[50%] md:w-[70%] sm:w-[50%]">

                    <div className="w-full">
                        <h3 className="mb-2 text-4xl font-extrabold text-red-500 text-center">Sign Up</h3>
                        <p className="mb-4 italic font-thin text-center">Enter your necessary information!</p>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2 text-left">Username</label>
                            <input type="username"
                                name="username"
                                value={activeItem.username}
                                onChange={handleChange}
                                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" placeholder="Enter username ..." />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-semibold mb-2 text-left">Email</label>
                            <input type="email"
                                name="email"
                                value={activeItem.email}
                                onChange={handleChange}
                                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 " placeholder="Enter email ..." />

                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-semibold mb-2 text-left">Password</label>
                            <input type="password"
                                name="password"
                                value={activeItem.password}
                                onChange={handleChange}
                                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 " placeholder="Enter password ..." />

                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-semibold mb-2 text-left">Repassword</label>
                            <input type="password"
                                name="repassword"
                                value={activeItem.repassword}
                                onChange={handleChange}
                                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 " placeholder="Enter Repassword ..." />

                        </div>
                        {!passwordsMatch && <p className="text-red-500 mb-3">Passwords do not match</p>}
                        <button type="button"
                            onClick={handleCreate}
                            className="w-full bg-blue-500 text-white px-4 mb-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 uppercase">Register</button>
                        <div className="flex ">
                            <p className="text-sm mx-auto text-right font-semibold"> Already have accounts <Link to={'/login'} className="text-sm text-right font-semibold text-red-500"> Login</Link> nows</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Registers;
