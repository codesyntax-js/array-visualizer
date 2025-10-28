import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import CreateArray from "./CreateArray";
import RemoveElement from "./RemoveElement";
import UpdateElement from "./UpdateElement";
import InsertElement from "./InsertElement";
import SelectElement from "./SelectElement";

export default function Nav() {
  const [arr, setArr] = useState([5, 6, 4, 8]);

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h2 className="logo">Array <span>Visualizer</span></h2>
          <ul className="nav-links">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/create" className={({ isActive }) => isActive ? "active" : ""}>Create</NavLink></li>
            <li><NavLink to="/insert" className={({ isActive }) => isActive ? "active" : ""}>Insert</NavLink></li>
            <li><NavLink to="/remove" className={({ isActive }) => isActive ? "active" : ""}>Remove</NavLink></li>
            <li><NavLink to="/update" className={({ isActive }) => isActive ? "active" : ""}>Update</NavLink></li>
            <li><NavLink to="/select" className={({ isActive }) => isActive ? "active" : ""}>Select</NavLink></li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateArray arr={arr} setArr={setArr} />} />
            <Route path="/insert" element={<InsertElement arr={arr} setArr={setArr} />} />
            <Route path="/remove" element={<RemoveElement arr={arr} setArr={setArr} />} />
            <Route path="/update" element={<UpdateElement arr={arr} setArr={setArr} />} />
            <Route path="/select" element={<SelectElement arr={arr} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
