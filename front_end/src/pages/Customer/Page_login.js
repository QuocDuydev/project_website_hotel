import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Alert, 
  Select,
  Option
} from "@material-tailwind/react";
function Login () {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [loginError, setLoginError] = useState('');
  const navigate= useNavigate();
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const { username, password } = loginData;

    axios
      .get("http://localhost:8000/api/users/")
      .then((res) => {
        // Find the user with the provided username and password
        const user = res.data.find(
          (u) => u.username.trim() === username.trim() && u.password.trim() === password.trim()
        );

        if (user) {
          if (user.account_type === 'user') {
            // Redirect to user dashboard or any page for users
            console.log("Login successful for user!");
            navigate("/");
          } else if (user.account_type === 'admin') {
            // Redirect to admin dashboard or any page for admins
            console.log("Login successful for admin!");
            navigate("/admin");
          } else if (user.account_type === 'superadmin') {
            // Redirect to admin dashboard or any page for admins
            console.log("Login successful for superadmin!");
            navigate("/admin");
        }
        } else {
          // Handle login failure (display error message, etc.)
          setLoginError('Invalid username or password. Please try again.');
          console.error("Login failed: Invalid username or password");
        }
      })
      .catch((error) => {
        // Handle API error
        console.error("Error fetching user data", error);
      });
  };

  return (
    <form>
      <div className="max-w-md px-3 rounded-lg mx-auto overflow-hidden mt-4 bg-gray-200">
        <h1 className="w-full px-4 mb-2 rounded border py-4 text-center text-4xl">LOGIN</h1>
        <div className="flex flex-col mt-2 mb-5">
          <div className="relative">
            <h2 className="text-sm text-left font-semibold">Username</h2>
            <input
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleChange}
              className="w-full px-4 mb-3 rounded border py-2"
              placeholder="Username..."
            />
          </div>
          <div className="relative mb-3">
            <h2 className="text-sm text-left font-semibold">Password</h2>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="w-full px-4 mb-3 rounded border py-2"
              placeholder="Password..."
            />
          </div>
            {loginError && (
              <p className="text-red-500 text-sm text-center mb-3">{loginError}</p>
            )}
          
          <div className="relative mb-3">
          <Button   
            onClick={handleLogin}
            className="mx-auto w-1/2 bg-red-600 uppercase" fullWidth>
              Login
          </Button>

          </div>
        </div>
      </div>
    </form>
  );
}; export default Login;