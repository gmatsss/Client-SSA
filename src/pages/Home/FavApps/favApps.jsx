import twilio from "../../../img/TWILIO.png";
import messenger from "../../../img/MESS.png";
import slack from "../../../img/SLACK.png";
import shopify from "../../../img/SHOPIFY.png";
import whatsapp from "../../../img/WHATSAPP.png";
import zapier from "../../../img/ZAPIER.png";
import logo_small from "../../../img/logo_small.png";
import "./FavApps.css";
import Aos from "aos";
import { useEffect } from "react";

const FavApps = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const descriptions = {
    twilio:
      "Enhance your communication workflows with SSA's seamless integration with Twilio.",
    zapier:
      "Automate and connect SSA with 2,000+ apps using our Zapier integration.",
    slack:
      "Empower your team with real-time updates and tasks on Slack with SSA.",
    whatsapp:
      "Reach global audiences directly on WhatsApp, powered by SSA's intelligent responses.",
    messenger:
      "Engage with users on Facebook Messenger, leveraging SSA's advanced capabilities.",
    shopify:
      "Streamline e-commerce operations on Shopify with SSA's efficient order handling and customer support.",
  };

  return (
    <div className="fav_apps d-flex flex-column justify-content-center align-items-center">
      <div className="header-section d-flex flex-column justify-content-center align-items-center">
        <img src={logo_small} alt="Super Smart Agents Logo" className="logo" />
        <p className="intro-text">
          Super Smart Agents Integrate <br />
          with your favorite tools
        </p>
      </div>
      <div className="container">
        {[twilio, zapier, slack, whatsapp, messenger, shopify].map(
          (item, index) => (
            <div key={index} className="item" data-aos="zoom-in-up">
              <img src={item} alt={`item-${index}`} className="item-image" />
              <p className="description">
                {descriptions[Object.keys(descriptions)[index]]}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FavApps;
