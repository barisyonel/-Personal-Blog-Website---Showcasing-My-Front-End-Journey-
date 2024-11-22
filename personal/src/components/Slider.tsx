import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) => {
  const location = useLocation();

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={toggleSidebar}>
        &times;
      </button>
      <ul className="sidebar-menu">
        <li>
          <Link
            to="/"
            className={`sidebar-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={toggleSidebar}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`sidebar-link ${location.pathname === "/about" ? "active" : ""}`}
            onClick={toggleSidebar}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`sidebar-link ${location.pathname === "/projects" ? "active" : ""}`}
            onClick={toggleSidebar}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`sidebar-link ${location.pathname === "/contact" ? "active" : ""}`}
            onClick={toggleSidebar}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
