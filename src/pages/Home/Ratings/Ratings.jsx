import React from "react";
import prof1 from "../../../img/rating_prof1.PNG";
import prof2 from "../../../img/rating_prof2.PNG";
import prof3 from "../../../img/rating_prof3.PNG";
import star from "../../../img/star.svg";
import "./Ratings.css"; // Import the CSS file

const Ratings = () => {
  return (
    <div className="ratings" id="ratingsComponent">
      <div className="headerRating">
        <p>
          Thousand of business accross dozens <br />
          of Industries Trust{" "}
          <span className="glowing-text">Super Smart Agents</span>
        </p>
      </div>
      <div className="card_rating_holder">
        {[prof1, prof2, prof3].map((profile, index) => (
          <div key={index} className="rating_card">
            <div className="card_title">
              <h1>Amazing Features fit for my business</h1>
            </div>
            <div className="card_middle">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                incidunt eum asperiores, velit debitis molestiae ad
                voluptatibus. Temporibus iste quibusdam dolores veritatis ipsa
                corporis recusandae, officiis soluta dolorum, totam quos.
              </p>
            </div>
            <div className="card_footer">
              <div className="profile-image">
                <img src={profile} alt="" />
              </div>
              <div className="footer-content">
                <div className="stars">
                  {/* Loop to render stars 5 times */}
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <img key={i} src={star} alt="" />
                    ))}
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit...
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ratings;
