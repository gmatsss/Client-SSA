import React, { useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import logo from "../../../img/Logo.png";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { Link as RouterLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content ">
        <div className="logo-container">
          <img src={logo} alt="" className="logo-style responsive-size" />
        </div>
        <div>
          {isMenuOpen ? (
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(false)}
            >
              ✖
            </button>
          ) : (
            <button className="menu-toggle" onClick={() => setIsMenuOpen(true)}>
              ☰
            </button>
          )}
        </div>

        <div className={`menu-container ${isMenuOpen ? "open" : ""}`}>
          <RouterLink to="/" className="router-link">
            <p className="mx-4 p-hover-color responsive-size">Home</p>
          </RouterLink>

          <Link
            to="demoComponent" // the id or name of your Demo component
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="router-link"
          >
            <p className="mx-4 p-hover-color responsive-size router-link">
              Demo
            </p>
          </Link>
          <Link
            to="pricingComponent" // the id or name of your Demo component
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="router-link"
          >
            <p className="mx-4 p-hover-color responsive-size router-link">
              Pricing
            </p>
          </Link>
          <div className="hover-dropdown mx-4">
            <p className="p-hover-color responsive-size">About</p>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <hr className="custom-hr" />
                <Link
                  to="ratingsComponent" // the id or name of your Demo component
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="router-link"
                >
                  <p className="p-hover-color responsive-size dropdown-item router-link">
                    Testimonials
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <RouterLink to="/checkout" className="router-link">
            <ButtonComponent text="Hire Agents" color="#E03F6D" />
          </RouterLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
