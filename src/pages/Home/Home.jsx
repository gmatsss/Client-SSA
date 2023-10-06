import React from "react";

import "../../App.css";

import Banner from "./Banner/Banner";
import Demo from "./Demo/Demo";
import Pricing from "./Pricing/Pricing";
import GetAgent from "./GetAgent/getAgent";
import FavApps from "./FavApps/favApps";
import Ratings from "./Ratings/Ratings";
import Footer from "./footer/footer";
import Header from "./Header/Header";

function Home() {
  return (
    <div className=" ">
      <Header />
      <Banner />
      <Demo />
      <Pricing />
      <GetAgent />
      <FavApps />
      <Ratings />
      <Footer />
    </div>
  );
}

export default Home;
