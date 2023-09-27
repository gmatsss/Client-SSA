import Aos from "aos";
import logo from "../../../img/Logo.png";
import "./GetAgent.css";
import { Link as RouterLink } from "react-router-dom";
import { useEffect } from "react";

const GetAgent = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="get_agent d-flex flex-column justify-content-center align-items-center">
      <div className="w-75 text-center">
        <p className="text">
          Our current Price of <span className="price">$100/mo </span>
          per bot is a <span className="special">LIMITED-TIME SPECIAL</span>,
          and we will raise the price to $395/mo once we service our first 500
          customer under this plan. The increase is very much justified because
          we are still cheaper, more consistent, and more accurate than any VA
          for a lot less money
        </p>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img src={logo} alt="" className="logo" />
        <div className="mt-5">
          <h1 className="title">Get your Super Smart Agents Today!</h1>
        </div>

        <RouterLink to="/checkout">
          <button className="banner-button fw-bold" data-aos="flip-up">
            HIRE AGENT NOW!
          </button>
        </RouterLink>
      </div>
    </div>
  );
};

export default GetAgent;
