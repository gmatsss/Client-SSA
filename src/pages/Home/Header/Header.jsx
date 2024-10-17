import React, { useContext, useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import logo from "../../../img/Logo.png";
import { Link } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import "./Header.css";
import UserContext from "../../../Context/UserContext";
import { fetchData } from "../../../api/FetchData";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const { user, reloadUser } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="" className="logo-style responsive-size" />
        </div>
        <div>
          <button
            className={`menu-toggle ${isMenuOpen ? "hidden" : ""}`}
            onClick={() => setIsMenuOpen(true)}
          >
            ☰
          </button>
        </div>

        <div className={`menu-container ${isMenuOpen ? "open" : ""}`}>
          {isMenuOpen && (
            <button
              className="close-button"
              onClick={() => setIsMenuOpen(false)}
            >
              ✖
            </button>
          )}

          <RouterLink to="/" className="router-link">
            <p className=" p-hover-color responsive-size router-link">Home</p>
          </RouterLink>

          <Link
            to="demoComponent"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="router-link"
          >
            <p className=" p-hover-color responsive-size router-link">Demo</p>
          </Link>
          <Link
            to="pricingComponent"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="router-link"
          >
            <p className=" p-hover-color responsive-size router-link">
              Pricing
            </p>
          </Link>
          <div className="testi-hover-dropdown ">
            <p className="testi-flex">
              <span className="p-hover-color">About</span>
              <span className="testi-arrow">&#9662;</span>
            </p>
            <ul>
              <li>
                <Link
                  to="ratingsComponent"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="testi-link"
                >
                  <p className="testi-style">Testimonials</p>
                </Link>
              </li>
            </ul>
          </div>

          <RouterLink to="/Appointment" className="router-link">
            <button className="banner-button header-buts">
              Hire Super Agents
            </button>
          </RouterLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
