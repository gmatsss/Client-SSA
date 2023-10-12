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

      <div className="vidDemo ">
        <video controls>
          <source src="path_to_your_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
export default WatchDemo;
