import React ,{ Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: "",
         
        };
       
      }
    
      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleLogin = () => {
        const { username, password } = this.state;

   
        axios
        .get("http://localhost:8000/api/tasks/")
        .then((res) => {
          // Find the user with the provided username and password
          const user = res.data.find(
            (u) => u.username.trim() === username.trim() && u.password.trim() === password.trim()
          );
    
          if (user) {
            
            console.log("Login successful!");

          } else {
            // Handle login failure (display error message, etc.)
            console.error("Login failed: Invalid username or password");
            
          }
        })
        .catch((error) => {
          // Handle API error
          console.error("Error fetching user data", error);
          
        });
      };
    render(){
        return (
        <form>
            <div className="max-w-md px-3 rounded-lg mx-auto overflow-hidden mt-4 bg-gray-200">
                <h1 className="w-full px-4 mb-2 rounded border py-4  text-center text-4xl">LOGIN</h1>
                <div className="flex flex-col mt-2 mb-5">
                    <div className="relative"/>
                        <h2 className="text-sm text-rigth font-semibold">Username</h2>
                        <input 
                            type="text" 
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange} 
                            className="w-full px-4 mb-3 rounded border py-2" 
                            placeholder="Username..."/>
               
                    <div className="relative mb-3"/>
                        <h2 className="text-sm text-rigth font-semibold">Password</h2>
                        <input 
                            type="password" 
                            name="password" 
                            value={this.state.password}
                            onChange={this.handleChange} 
                            className="w-full px-4 mb-3 rounded border py-2" 
                            placeholder="Password..."/>
                    <div className="relative mb-3"/>
                    
                        <button 
                            type="submit"
                            onClick={this.handleLogin}
                            className="py-1 mb-3 px-3 rounded text-white bg-blue-500 shadow-lg shadow-blue-500/50"
                            >Login</button>
                      
                        <a href="" className="text-sm text-rigth font-semibold text-blue-500">Forgot Password?</a>
                        <p className="text-sm text-rigth font-semibold"> Don't have an accounts <Link to={'/register'} class="text-sm text-rigth font-semibold text-red-500"> Register</Link> nows</p>
                </div>
            </div>
        </form>
        )
    }
}   
export default Login;








