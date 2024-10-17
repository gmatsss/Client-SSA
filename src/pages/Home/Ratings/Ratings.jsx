import React, { useState, useEffect } from "react";

import star from "../../../img/star.svg";
import "./Ratings.css"; // Import the CSS file

const testimonials = [
  {
    image:
      "https://globalnation.inquirer.net/files/2014/08/Chari-Heredia-Reyes-ensaymadas2819.jpg",
    name: "Jade Santos",
    title: "CEO, Santos Bakery",
    testimonial:
      "Super Smart Agents have been a game-changer for us. They speak fluent Tagalog, ensuring our Filipino customers feel right at home. Our online sales have skyrocketed, and we can't thank them enough.",
    tagline: "Boosted our online sales!",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQEphc39WxeXMA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1602013173976?e=1732752000&v=beta&t=GiVUfCu9RxAkrFN0e4M5zlrPN-p_2Pz5KPKluuDx7WE",
    name: "Raymark Smith",
    title: "Marketing Director, Smith & Co.",
    testimonial:
      "Super Smart Agents operate 24/7, which means our customers are always attended to, no matter the time zone. Their multilingual capabilities are a huge asset as we expand globally.",
    tagline: "24/7 customer support!",
  },
  {
    image:
      "http://images.assetsdelivery.com/compings_v2/mavoimage/mavoimage1601/mavoimage160100167.jpg",
    name: "Theo dela Cruz",
    title: "President, Dela Cruz Enterprises",
    testimonial:
      "Ang Super Smart Agents ay laging available, at napakahusay nila sa Tagalog! Hindi kami nauubusan ng mga kliyente at napakadaling makipag-ugnayan sa kanila. Sobra sobrang salamat sakanila!",
    tagline: "Fluent in Tagalog!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1609130870647-b2252487dade?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    name: "Sarah Thompson",
    title: "COO, Thompson Industries",
    testimonial:
      "Ang Super Smart Agents ay hindi lang nakapag-salita ng Tagalog ng kahanga-hanga, kundi nakatutok din sa aming kustomisasyon. Ang kanilang serbisyo ay walang katulad.",
    tagline: "Ang daming kustomisasyon!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1595502124338-950db27ea1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    name: "Manuel Garcia",
    title: "CEO, Garcia Tech",
    testimonial:
      "Super Smart Agents have saved us money and headaches. No overtime, no complaints, and they're always ready to assist. Truly cost-efficient.",
    tagline: "Efficiency at its Best",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    name: "Emily Clark",
    title: "Founder, Clark Innovations",
    testimonial:
      "Our partnership with Super Smart Agents has allowed us to scale without limits. They adapt to our growing business seamlessly, ensuring our customers are always happy.",
    tagline: "Scaling Made Seamless",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551890299-1bc7ea6f0054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    name: "Malou Ramirez",
    title: "CFO, Ramirez Holdings",
    testimonial:
      "Hindi kami makakakuha ng mas mahusay na serbisyo! Sumubok na kami ng iba't ibang serbisyo na katulad dito pero ang Super Smart Agents ang pinaka epektibo at sila ay bihasa sa 106 wika, kaya namin mas mapagsilbihan ang aming international na mga kliyente.",
    tagline: "Service Beyond Borders",
  },
  {
    image:
      "https://venchitotampon.com/wp-content/uploads/2023/06/young-filipino-entrepreneur-alvin-ong-1024x683.webp",
    name: "Michael Gabing",
    title: "Chef, Mikey’s Kitchen",
    testimonial:
      "Kaming lahat ay sobrang natutuwa sa Super Smart Agents. Sobrang bilis at epektibo ng serbisyo nila, na nagpapahusay sa aming operasyon.",
    tagline: "Culinary Operations Enhanced",
  },
  {
    image:
      "data:image/jpeg;base64,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",
    name: "Lina Fernandez",
    title: "Director of Sales, Fernandez Fashion",
    testimonial:
      "Super Smart Agents have exceeded our expectations. Their custom-tailored approach ensures they understand our unique needs, making them an invaluable asset to our team.",
    tagline: "Understand our unique needs!",
  },
];

const Ratings = () => {
  const [displayedTestimonials, setDisplayedTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const shuffledTestimonials = [...testimonials].sort(
      () => Math.random() - 0.5
    );
    setDisplayedTestimonials(shuffledTestimonials.slice(0, 3));
  }, []);

  const slideNext = () => {
    let nextIndex = currentIndex + 3;
    if (nextIndex >= testimonials.length) nextIndex = 0;
    setCurrentIndex(nextIndex);
    setDisplayedTestimonials(testimonials.slice(nextIndex, nextIndex + 3));
  };

  const slidePrev = () => {
    let prevIndex = currentIndex - 3;
    if (prevIndex < 0) prevIndex = testimonials.length - 3;
    setCurrentIndex(prevIndex);
    setDisplayedTestimonials(testimonials.slice(prevIndex, prevIndex + 3));
  };

  return (
    <div className="ratings" id="ratingsComponent">
      <div className="headerRating">
        <p>
          Thousands of businesses across dozens <br />
          of industries trust{" "}
          <span className="glowing-text">Super Smart Agents</span>
        </p>
      </div>
      <div className="card_rating_holder">
        {displayedTestimonials.map((profile, index) => (
          <div key={index} className="rating_card">
            <div className="card_title">
              <h1>{profile.tagline}</h1>
            </div>
            <div className="card_middle">
              <p>{profile.testimonial}</p>
            </div>
            <div className="card_footer">
              <div className="profile-image">
                <img src={profile.image} alt={profile.name} />
              </div>
              <div className="footer-content">
                <div className="stars">
                  {/* Loop to render stars 5 times */}
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <img key={i} src={star} alt="star" />
                    ))}
                </div>
                <p className="company">{profile.name}</p>
                <p>{profile.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="banner-button mb-3" onClick={slideNext}>
        More Testimonials
      </button>
    </div>
  );
};

export default Ratings;
