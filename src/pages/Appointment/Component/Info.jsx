import React from "react";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../../img/Logo.png";

const Info = () => {
  return (
    <div className="column info">
      <RouterLink to="/" className="router-img-holder">
        <img src={logo} alt="Appointment illustration" className="info-image" />
      </RouterLink>
      <h1>
        Grab an Appointment with Us! Dive into a seamless experience with our{" "}
        <span className="glowing-text" style={{ fontWeight: "600" }}>
          Super Smart Agents
        </span>
      </h1>
    </div>
  );
};

export default Info;
