import { NavLink } from "react-router-dom"
import "./NavBar.css"

function NavBar() {
  return (
    <nav>
      <NavLink to="/" className="navbar">
        Home
      </NavLink>
      <NavLink to="/directors" className="navbar">
        Directors
      </NavLink>
      <NavLink to="/actors" className="navbar">
        Actors
      </NavLink>
    </nav>
  )
}

export default NavBar
