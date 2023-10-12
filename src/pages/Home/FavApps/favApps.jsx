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
    <div className="fav_apps d-flex flex-column justify-content-center align-items-center ">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ marginTop: "70px" }}
      >
        <img
          src={logo_small}
          alt="Super Smart Agents Logo"
          style={{ height: "30%" }}
        />
        <p
          className="text-center"
          style={{ fontSize: "48px", fontWeight: "600", marginTop: "10px" }}
        >
          Super Smart Agents Integrate <br />
          with your favorite tools
        </p>
      </div>
      <div className="container">
        {[twilio, zapier, slack, whatsapp, messenger, shopify].map(
          (item, index) => (
            <div
              key={index}
              className="item d-flex flex-column align-items-center"
              data-aos="zoom-in-up"
            >
              <img
                src={item}
                alt={`item-${index}`}
                style={{
                  height: "300px",
                  width: "auto",
                  marginBottom: "-45px",
                }}
              />
              <p
                className="text-center"
                style={{ fontSize: "18px", width: "100%" }}
              >
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
