import React from "react";
import { Link } from "react-router-dom";
import "../src/Navbar.css";
export default function Navbar() {
  return (
    <div className="container">
      <div className="title">
        <h1>Our Menus</h1>
        <div className="title-line"></div>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">
          All
        </Link>
        <Link to="/Breakfast" className="nav-link">
          Breakfast
        </Link>
        <Link to="/Lunch" className="nav-link">
          Lunch
        </Link>
        <Link to="/Shakes" className="nav-link">
          Shakes
        </Link>
      </nav>
    </div>
  );
}
