import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import '../cssFiles/Login.css';
import logo from '../images/Resume-source-app.png'
import AddItems from "./AddContent";
import UserMenu from "./UserMenu";
import Person1 from '../images/Person-1.png'

import UserPool from "../UserPool";

import { useNavigate } from "react-router-dom";


function TopNav3(props) {
  const temp = UserPool.getCurrentUser();
  const navigate = useNavigate();
  const signout=()=>{
  const user = UserPool.getCurrentUser();
  
  if(user){
      user.signOut();
      console.log("Success: Signed Out")
      alert("Signed out")

      navigate('/login')
  } 
}
    return (
        // Resume Logo [Icon] should go to About-page [Extra]
        // Once logged in, User should have different nav-bar such that it is able to click to a:
        // User Profile [Icon]
        <div>
            <div className="nav-bar">
                <ul className="nav-bar-left">
                    <li><img className={"resume-logo"} src={logo}></img></li>
                    <li className='nav-item'><Link className='no-decor' to="/">Home</Link></li>
                </ul>
                <ul className="nav-bar-right">
                    <li 
                        className='nav-item-right'>
                        <img id={"profile-picture-w"} src={Person1} ></img> Hi, {temp.getUsername()}
                    <div id="user-menu" class="popup-menu">
                        <div>
                            <li className="popup-menu-item"><Link className='no-decor' to="/profile">Profile</Link></li>
                            <li className="popup-menu-item"><Link className='no-decor' to="/settings">Account Settings</Link></li>
                            <li className="popup-menu-item" onClick={signout}><Link className='no-decor'>Log out</Link></li>
                        </div>
                    </div>
                    </li>
                    
                </ul>
            </div>
            <Outlet />
        </div>
    );

}

export default TopNav3;