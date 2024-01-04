import React from "react";
import logo_small from "../../../../img/logo_small.png";
import "./watchDemo.css";

const WatchDemo = () => {
  return (
    <div className="watchDemo">
      <div className="textDemo1">
        <img className="mt-5" src={logo_small} alt="Super Smart Agents Logo" />
        <h1 className="mt-4">Watch Video Demo</h1>
        <p>
          Dive into the capabilities of Super Smart Agents.
          <br />
          This demo showcases how our AI-powered virtual assistants
          revolutionize customer service and sales support.
        </p>
      </div>

      <div className="vidDemos">
        <iframe
          src="https://fast.wistia.net/embed/iframe/gruk8nj2qd?videoFoam=true"
          title="Wistia video player"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          className="wistia_embed"
          name="wistia_embed"
          allowfullscreen
          mozallowfullscreen
          webkitallowfullscreen
          oallowfullscreen
          msallowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchDemo;
