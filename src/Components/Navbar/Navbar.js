import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <span>Rashtriya Puraskar</span>
      </div>
      <div className="right">
        <ul className="header-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutportal">About the Portal</Link>{" "}
          </li>
          <li>
            <Link to="/awardslist">Awardspedia</Link>{" "}
          </li>
          <li>
            <Link to="/ongoing">Ongoing Award Nominations</Link>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
