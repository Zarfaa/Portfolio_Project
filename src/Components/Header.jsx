import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Assets/Logo.png";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  const renderNavbarTabs = () => {
    if (location.pathname === "/") {
      return (
        <>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item marginRight ">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </>
      );
    } else if (location.pathname.startsWith("/CaseStudy")) {
      return (
        <li className="nav-item marginRight">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
      );
    } else {
      return (
        <li className="nav-item marginRight">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand marginLeft" href="/">
          <img className="logo me-3" src={Logo} alt="logo" />
          Digital Designer
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {renderNavbarTabs()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
