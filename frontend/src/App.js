import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import './App.css';
import Homepage from './pages/Homepage';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import './css/Login.css';
import logo from './images/Resume-source-app.png'

export default function App() {
  return (
      <div>
        <Routes>        
          <Route path="/" element={<Layout/>}>            
            <Route index element = {<Homepage/>} />
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
          </Route>
        </Routes>
      </div>
  );
}

function Layout() {
  return (
    <div>
      <div className="nav-bar">
        <ul className="nav-bar-left">
        <li><img class = {"resume-logo"} src={logo}></img></li>
          <li className='nav-item'><Link className='no-decor' to="/"             >Home</Link></li>
        </ul>
        <ul className="nav-bar-right">
          <li className='nav-item'><Link className='no-decor' to="/login"         >Log In</Link></li>        
          <li className='nav-item'><Link className='no-decor' to="/signup"        >Sign Up</Link></li>
        </ul>
      </div>

      <Outlet />
      </div>
  );
}