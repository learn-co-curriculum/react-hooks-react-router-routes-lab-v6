import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import routes from "../routes";


const NavBar = () => (
  <div className="navbar">
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/directors">Directors</NavLink>
    <NavLink to="/actors">Actors</NavLink>
  </nav>
</div>
);
export default NavBar;
