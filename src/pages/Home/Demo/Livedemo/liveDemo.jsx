import React from "react";
import logo_small from "../../../../img/logo_small.png";
import LiveDemos from "../../../../img/ipad_live_demo.png";
import "./liveDemo.css"; // Import the CSS file

const LiveDemo = () => {
  return (
    <div className="liveDemo" id="liveDemo">
      <div className="content-overlay-live">
        <div className="textDemo text-center mt-5">
          <img src={logo_small} alt="" />
          <h1 className="liveDemoHeader">View Live Demo</h1>{" "}
          {/* Added className */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            animi quos aspernatur inventore provident, voluptatum aliquam a
            sapiente sequi tempore.
          </p>
        </div>

        <div className="vidDemo mt-5">
          <img className="liveDemoImage" src={LiveDemos} alt="" />{" "}
          {/* Added className */}
        </div>
      </div>
    </div>
  );
};

export default LiveDemo;
