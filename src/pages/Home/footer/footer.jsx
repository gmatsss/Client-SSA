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

        <a
          className="p-hover-color responsive-size affiliate-link"
          href="https://supersmartagents.firstpromoter.com/"
          target="_blank" // This opens the link in a new tab
          rel="noopener noreferrer" // For security reasons
        >
          <p className="p-hover-color responsive-size">Affiliates</p>
        </a>
      </div>
      <div className="footer-text">
        <p>
          Get started with your very own Super Smart Agent for just a{" "}
          <strong>one-time fee of $495</strong> and a{" "}
          <strong>monthly charge of $100</strong>. This includes access to one
          communication channel of your choice, be it Website, FB Messenger,
          Twilio, Telegram, or WhatsApp. Need more channels? Add as many as you
          like for just <strong>$19/mo</strong> each.
        </p>
      </div>

      <div className="footer-buttons mb-4">
        <RouterLink to="/Appointment" className="router-link">
          <button className="fots-button fw-bold">Buy Now</button>
        </RouterLink>
        <Link
          to="liveDemo" // the id or name of your Demo component
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className="fots-button fw-bold">Live Demo</button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
