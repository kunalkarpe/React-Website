import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ onSearch, cartItemCount }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim().length) {
      onSearch(searchQuery.trim());
    }
    setSearchQuery(" ");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark fixed-top position-fixed"
        data-bs-theme="dark"
      >
        <div className="container-fluid ">
          <Link className="navbar-brand" to="">
            One Piece Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto gap-4 mukta justify-content-evenly">
              <li className="nav-item mr">
                <NavLink
                  className="nav-link active "
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ml-auto">
                <NavLink className="nav-link" to="/product">
                  Products
                </NavLink>
              </li>
              <li className="nav-item ml-auto">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item ml-auto">
                <NavLink className="nav-link" to="/Login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item ml-auto me-2  ">
                <NavLink className="nav-link" to="/CartPage">
                  <FaShoppingCart />
                </NavLink>
              </li>
              {cartItemCount > 0 && (
                <div className="cart-counter fs-6 text-body-tertiary">
                  {cartItemCount <= 9 ? cartItemCount : "9+"}
                </div>
              )}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-3 rounded-pill"
                type="search"
                placeholder="Search products ..."
                aria-label="Search "
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={handleSubmit}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
