import './Navbar.css';
import { IoHome } from "react-icons/io5";
import { FaCocktail } from "react-icons/fa";
import { MdNoMeals } from "react-icons/md";
import { TbBooks } from "react-icons/tb";
import { PiBank } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <p className="app-title">My Application</p>
            </div>

            <div className="navbar-links">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    <IoHome className="icon" />
                    <span>Home</span>
                </NavLink>

                <NavLink to="/Meal" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    <MdNoMeals className="icon" />
                    <span>Meal</span>
                </NavLink>

                <NavLink to="/Cocktail" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    <FaCocktail className="icon" />
                    <span>Cocktail</span>
                </NavLink>

                <NavLink to="/Book" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    <TbBooks className="icon" />
                    <span>Book</span>
                </NavLink>

                <NavLink to="/Bank" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    <PiBank className="icon" />
                    <span>Bank</span>
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
