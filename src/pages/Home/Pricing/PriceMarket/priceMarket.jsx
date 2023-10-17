import check from "../../../../img/check.svg";
import "./priceMarket.css";
import Aos from "aos";
import { useEffect } from "react";

const PriceMarket = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="price_market">
      <div className="content_wrapper">
        <div className="main_title" data-aos="fade-down">
          <h1>
            Hate to break it to you but we're even cheaper <br />
            than your Filipino VA
            <span> (A LOT Cheaper)</span>
          </h1>
        </div>
      </div>

      <div className="sub_content">
        <div className="sub_title">
          <h1>And...</h1>
        </div>

        <div className="features">
          <div className="feature_column">
            <div className="feature_item" data-aos="fade-down">
              <img src={check} className="CheckImg" alt="" />
              <p>More Accurate</p>
            </div>
            <div className="feature_item" data-aos="fade-down">
              <img src={check} className="CheckImg" alt="" />
              <p>More Precise</p>
            </div>
            <div className="feature_item" data-aos="fade-down">
              <img src={check} className="CheckImg" alt="" />
              <p>Sells and Sets Appointment Better</p>
            </div>
          </div>
          <div className="feature_column">
            <div className="feature_item" data-aos="fade-down">
              <img src={check} className="CheckImg" alt="" />
              <p>Get More Review</p>
            </div>
            <div className="feature_item" data-aos="fade-down">
              <img src={check} className="CheckImg" alt="" />
              <p>Does a better and consistent job</p>
            </div>
            <div className="feature_item" data-aos="fade-down">
              <img src={check} className="CheckImg" alt="" />
              <p>Works Around The Clock</p>
            </div>
          </div>
        </div>

        <div className="sub_title">
          <h1>And...</h1>
        </div>

        <div className="final_text mt-5" data-aos="fade-down">
          <h3>
            When you need the boss to intervene, we have an easy way for easy
            conversation takeover
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PriceMarket;
