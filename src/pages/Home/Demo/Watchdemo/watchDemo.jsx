import React from "react";
import logo_small from "../../../../img/logo_small.png";
import "./watchDemo.css";

const WatchDemo = () => {
  return (
    <div className="watchDemo">
      <div className="textDemo1">
        <img src={logo_small} alt="Super Smart Agents Logo" />
        <h1>Watch Video Demo</h1>
        <p>
          Dive into the capabilities of Super Smart Agents.
          <br />
          This demo showcases how our AI-powered virtual assistants
          revolutionize customer service and sales support.
        </p>
      </div>

      <div className="vidDemos">
        <video
          src="https://storage.googleapis.com/msgsndr/w8huTDD5C8qAPtFbY5nk/media/674cf2ce3ec81fb0701a5c68.mp4"
          className="video_demo"
          autoPlay
          muted
          loop
          controls
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default WatchDemo;
