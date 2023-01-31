import { NavLink } from "react-router-dom"
import './Navbar.css';

const Navbar = () => {

    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
        <NavLink className="navbar-brand" to={'/'} >
        LAB - WikiCountries.
        </NavLink>
        </nav>
    )
        
}

export default Navbar