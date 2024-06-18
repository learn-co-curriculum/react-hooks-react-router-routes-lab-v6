import { NavLink } from "react-router-dom"
import "./NavBar.css"

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Directors">Directors</NavLink>
      <NavLink to="/Actors">Actors</NavLink>
    </nav>
  )
}

export default NavBar
