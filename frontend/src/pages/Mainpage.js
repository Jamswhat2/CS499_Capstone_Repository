import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import TopNav2 from "../components/TopNav2";
import NavBar from "../components/Navbar";
import Settings from "./Settings";


function Mainpage(prop)
{
    return(                    
        <div>
            <TopNav2/>
            <div className="page-wrapper">
                <NavBar/>
                <div className="main-content">
                    {/* add page content here */}
                    Main page after login
                    <br></br>
                    <Link to="textEditorMCE"> TextEditMCE-placeholder-button </Link>                
                    <Link to="/settings">Account Settings</Link>
                </div>
            </div>
        </div>
    );
}

export default Mainpage;