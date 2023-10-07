import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <nav className="navbar">
        <NavLink to="/" className="navbar-logo">
          <div>
            <img src="../logo.png" alt="Logo" className="h-14" />
          </div>
        </NavLink>

        <div className="navbar-links">
          <NavLink to="/" className="navbar-link">
            Home
          </NavLink>

          <NavLink to="/cart" className="navbar-cart">
            <div>
              <FaShoppingCart className="cart-icon" />
              {cart.length > 0 && (
                <span className="cart-badge">{cart.length}</span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
