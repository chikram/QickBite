import "./NavBar.css";
import React from "react";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand fs-3 fw-bold text-danger" href="#">
          QuickBite
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li>
              <a
                className="nav-link fw-bold text-dark"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a className="nav-link fw-bold text-dark" href="#">
                Menu
              </a>
            </li>
            <li>
              <a className="nav-link fw-bold text-dark" href="#">
                Contact us
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="lg"
              className="p-2"
            />
            <FontAwesomeIcon icon={faCartShopping} size="lg" className="p-2" />

            <button
              className="btn border border-success mx-3 rounded-pill"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
