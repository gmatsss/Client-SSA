import React from "react";
import logo from "../../../img/Logo.png";
import "./footer.css";

import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" className="logo-img" />
      </div>
      <div className="footer-links">
        <RouterLink to="/" className="router-link">
          <p className=" p-hover-color responsive-size">Home</p>
        </RouterLink>
        <Link
          to="demoComponent" // the id or name of your Demo component
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p className="p-hover-color responsive-size">Demo</p>
        </Link>
        <Link
          to="pricingComponent" // the id or name of your Demo component
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p className="p-hover-color responsive-size">Pricing</p>
        </Link>

        <Link
          to="ratingsComponent" // the id or name of your Demo component
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="router-link"
        >
          <p className="p-hover-color responsive-size">Testimonials</p>
        </Link>
        <p className="p-hover-color">About</p>
      </div>
      <div className="footer-text">
        <p>
          Get started with your very own Super Smart Agent for just a one-time
          fee of $495 and a monthly charge of $100. This includes access to one
          communication channel of your choice, be it Website, FB Messenger,
          Twilio, Telegram, or WhatsApp. Need more channels? Add as many as you
          like for just $19/mo each
        </p>
      </div>
      <div className="footer-buttons">
        <RouterLink to="/checkout" className="router-link">
          <button className="banner-button fw-bold">Buy Now</button>
        </RouterLink>
        <Link
          to="liveDemo" // the id or name of your Demo component
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className="banner-button fw-bold">Live Demo</button>
        </Link>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>c 2023 Super Smart Agents. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
