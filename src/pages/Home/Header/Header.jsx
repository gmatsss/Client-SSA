import React, { useContext, useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import logo from "../../../img/Logo.png";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { Link as RouterLink, useNavigate } from "react-router-dom";
import "./Header.css";
import UserContext from "../../../Context/UserContext";
import { fetchData } from "../../../api/FetchData";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const { user, reloadUser } = useContext(UserContext); // Use UserContext here
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await fetchData("User/logoutuser", "POST");
      if (response.message === "Successfully logged out.") {
        toast.success(response.message);
        navigate("/Signin");
        reloadUser();
      }
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <header className="header">
      <div className="header-content ">
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
          {!user ? (
            <RouterLink to="/Signin" className="router-link">
              <ButtonComponent text="Hire Agents" color="#E03F6D" />
            </RouterLink>
          ) : (
            <button onClick={handleLogout} className="router-link">
              <p className="mx-4 p-hover-color responsive-size">Logout</p>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
