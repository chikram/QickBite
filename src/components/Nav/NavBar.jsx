import "./NavBar.css";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

const NavBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light bg-light  fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand fs-3 fw-bold text-danger" to="/">
          QuickBite
        </Link>
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
            <li
              onClick={() => setMenu("home")}
              className={menu === "home" ? "active" : ""}
            >
              <Link
                className="nav-link fw-bold text-dark"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li
              onClick={() => setMenu("Menu")}
              className={menu === "Menu" ? "active" : ""}
            >
              <a className="nav-link fw-bold text-dark" href="#menu">
                Menu
              </a>
            </li>
            <li
              onClick={() => {
                setMenu("contact-us");
              }}
              className={menu === "contact-us" ? "active" : ""}
            >
              <a className="nav-link fw-bold text-dark" href="#footer">
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
            <div className="position-relative">
              <Link to="/cart">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="xl"
                  className="pt-2 px-4"
                  style={{ color: "#030303" }}
                />
              </Link>
              <div
                className={
                  getTotalCartAmount() === 0
                    ? ""
                    : "text-center fs-6 position-absolute mx-2 my-1 top-0 start-50 translate-middle bg-danger text-white rounded-circle"
                }
                style={{ width: "10px", height: "10px", lineHeight: "20px" }}
              ></div>
            </div>
            {!token ? (
              <button
                className="btn border border-success mx-3 rounded-pill"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
            ) : (
              <div className="navbar-profile">
                <img src={assets.profile_icon} alt="profile" width={25} />
                <ul className="nav-profile-dropdown">
                  <li onClick={() => navigate("/myorders")}>
                    <img src={assets.bag_icon} alt="bag" />
                    <p className="m-0 fw-bold">Order</p>
                  </li>
                  <hr />
                  <li onClick={logout}>
                    <img src={assets.logout_icon} alt="logout" />
                    <p className="m-0 fw-bold">logout</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
