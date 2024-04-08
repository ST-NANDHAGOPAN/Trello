import React from "react";
import { Link } from 'react-router-dom';
import "../../assets/navbar.css"
function NavBar() {
  
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-black ">
        <div className="container py-2 ">
          <button
            className="navbar-toggler  navbartogglericon  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto set gg  mb-2 mb-lg-0   ">
              <li className="nav-item me-3">
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item me-3 ">
                <Link  className="nav-link" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item me-3 ">
                <Link className="nav-link" to={"/products"}>
                  Products
                </Link>
              </li>
              <li className="nav-item me-3 ">
                <Link className="nav-link" to={"/news"}>
                  News
                </Link>
              </li>
              <li className="nav-item me-3 ">
                <Link className="nav-link" to={"/contact"}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="navbar-nav">
              <ul className="navbar-nav mx-auto set  mb-2 mb-lg-0 ">
                <li className="nav-item set">
                  Logout
                </li>
              </ul>

            </div>
          </div>
        </div>
      </nav>
          </div>
  );
}

export default NavBar;
