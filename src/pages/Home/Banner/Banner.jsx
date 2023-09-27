import React from "react";
import "./Banner.css";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <div className="banner">
      <div className=" banner-bg">
        <div className="text-overlay">
          <div className="text-center">
            <h1 className="banner-title">
              Unlock the Future of Sales <br /> and Customer Service
            </h1>
            <h4 className="banner-subtitle">
              with <span className="glowing-text">Super Smart Agents</span>
            </h4>
            <Link
              to="liveDemo" // the id or name of your Demo component
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button className="banner-button">Live Demo</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
