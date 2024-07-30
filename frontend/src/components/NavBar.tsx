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
      <div className="navbar-brand">My Daily Planner</div>
      <div className="navbar-buttons">
        <button onClick={toggleTheme}>
          {isDarkMode ? "Light Theme" : "Dark Theme"}
        </button>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </nav>
  );
};

export default NavBar;
