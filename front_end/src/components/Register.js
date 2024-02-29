import { render } from "@testing-library/react";
import axios from "axios";
import React, {Component} from "react";

class Registers extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        };
    }

    handleChange = e => {
        let {name, value} = e.target;
        if (e.target.type === "checkbox"){
            value = e.target.checked;
        }
        const activeItem = {...this.state.activeItem, [name]:value};
        this.setState({activeItem})
    };
   
    render()
    {
        const {toggle, onSave} = this.props;
        return (
            <div class="max-w-md px-3 rounded-lg mx-auto overflow-hidden mt-4 bg-gray-200">
                <h1 class="w-full px-4 mb-2 rounded border py-4  text-center text-4xl">LOGIN</h1>
                <div class="flex flex-col mt-2 mb-5">
                    <div class="relative"/>
                        <h2 class="text-sm text-rigth font-semibold">Username</h2>
                        <input type="text" 
                            name="username" 
                            class="w-full px-4 mb-3 rounded border py-2" 
                            value={this.state.activeItem.username}
                            onChange={this.handleChange}
                            placeholder="Username..."/>
               
                    <div class="relative mb-3"/>
                        <h2 class="text-sm text-rigth font-semibold" >Full Name</h2>
                        <input type="text" 
                            name="name" 
                            class="w-full px-4 mb-3 rounded border py-2" 
                            value={this.state.activeItem.name}
                            onChange={this.handleChange}
                            placeholder="Email..."/>
                        
                    <div class="relative mb-3"/>
                        <h2 class="text-sm text-rigth font-semibold" >Email</h2>
                        <input type="text" 
                            name="email" 
                            class="w-full px-4 mb-3 rounded border py-2" 
                            value={this.state.activeItem.email}
                            onChange={this.handleChange}
                            placeholder="Email..."/>

                    <div class="relative mb-3"/>
                        <h2 class="text-sm text-rigth font-semibold" >Password</h2>
                        <input type="text" 
                            name="password" 
                            class="w-full px-4 mb-3 rounded border py-2" 
                            value={this.state.activeItem.password}
                            onChange={this.handleChange}
                            placeholder="Password..."/>

                    <div class="relative mb-3"/>
                        <h2 class="text-sm text-rigth font-semibold" >Joined</h2>
                        <input type="date" 
                            name="joined" 
                            class="w-full px-4 mb-3 rounded border py-2" 
                            value={this.state.activeItem.joined}
                            onChange={this.handleChange}
                            placeholder="Joined..."/>

                    <div class="relative mb-3"/>
                        <button 
                            type="submit" 
                            class="py-1 mb-3 px-3 rounded text-white bg-blue-500 shadow-lg shadow-blue-500/50"
                            onClick={() => onSave(this.state.activeItem)}
                            >
                                Login
                        </button>
                        <a href="" class="text-sm text-rigth font-semibold text-blue-500">Forgot Password?</a>
                        <p class="text-sm text-rigth font-semibold"> Don't have an accounts <a href="" class="text-sm text-rigth font-semibold text-red-500"> Register </a> nows</p>
                </div>
            </div>
        )
    }
} export default Registers;