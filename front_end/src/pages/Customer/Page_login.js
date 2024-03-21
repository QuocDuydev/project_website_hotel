import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Login() {
  const { loginUser } = useContext(AuthContext);

  return (
    <div className="bg-gradient-to-r from-purple-300 to-blue-200">
      <div className="w-full mx-auto min-h-screen flex items-center justify-center">
        <form onSubmit={loginUser} className="w-[50%] bg-white shadow overflow-hidden sm:rounded-lg px-6 py-4 ">

          <div className="w-full">

            <h3 className="mb-2 text-4xl font-extrabold text-red-500 text-center">Sign In</h3>
            <p className="mb-4 italic font-thin text-center">Enter your username and password!</p>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2 text-left">Username</label>
              <input type="username" name="username" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" placeholder="Enter username ..." />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2 text-left">Password</label>
              <input type="password" name="password" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 " placeholder="Enter password" />
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white px-4 mb-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 uppercase">Login</button>
            <div className="flex ">
              <a href="" className="text-sm text-left font-semibold mx-auto text-blue-500">Forgot Password?</a>
              <p className="text-sm mx-auto text-right font-semibold"> No account yet? <Link to={'/register'} className="text-sm text-right font-semibold text-red-500"> Register</Link> now</p>
            </div>

          </div>

        </form>
      </div>
    </div>

  );
};
export default Login;
