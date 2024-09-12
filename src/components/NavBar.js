// src/components/NavBar.js
// src/components/NavBar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation"> {/* Add role="navigation" */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </nav>
  );
};

export default NavBar;

