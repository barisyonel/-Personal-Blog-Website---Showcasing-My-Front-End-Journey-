import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

interface NavbarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, setSidebarOpen }) => {
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="menu-icon" onClick={toggleSidebar}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
      </div>
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}>
          <div className="sidebar" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeSidebar}>
              &times;
            </button>
            <ul>
              <li>
                <Link
                  to="/"
                  className={location.pathname === "/" ? "active" : ""}
                  onClick={closeSidebar}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={location.pathname === "/about" ? "active" : ""}
                  onClick={closeSidebar}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={location.pathname === "/projects" ? "active" : ""}
                  onClick={closeSidebar}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? "active" : ""}
                  onClick={closeSidebar}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
