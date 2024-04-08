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
                  Project1
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
          </div>
  );
}

export default NavBar;
