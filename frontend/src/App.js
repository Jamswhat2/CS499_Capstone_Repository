import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link, NavLink } from "react-router-dom";
import './App.css';
import './cssFiles/Login.css';
import Homepage from './pages/Homepage';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Mainpage from "./pages/Mainpage";
import Resume from "./pages/Resume";
import Blocks from "./pages/Blocks";
import Settings from "./pages/Settings";
import Application from "./pages/Application";
import BlockEditor from "./pages/BlockEditor";
import Profile from "./pages/Profile";

export default function App() {
  return (
      <div>
        <Routes>                  
            <Route index element = {<Homepage/>} />
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/mainpage" element={<Mainpage/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/blocks" element={<Blocks/>}/>            
            <Route path="/settings" element={<Settings/>}/>            
            <Route path="/applications" element={<Application/>}/>
            <Route path="/blockeditor" element={<BlockEditor/>}/>            
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
  );
}

