/**
 * Navbar component
 */

import { useNavigate } from "react-router-dom";
import useTheme from "../hooks/useTheme";

const NavBar = () => {
  // Access useTheme hook in order to set theme and use toggle function

  const { isDarkMode, toggleTheme } = useTheme();
  // create navigate instance
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span id="snail-logo">🐌 </span>
        <span id="logo-left-text">SPEEDY SNAIL</span>{" "}
        <span id="logo-right-text">Day Planner</span>
      </div>
      <div className="navbar-buttons">
        <button onClick={toggleTheme}>
          {isDarkMode ? "Light mode" : "Dark mode"}
        </button>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </nav>
  );
};

export default NavBar;
