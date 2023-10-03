import React, { useState } from "react";
import PriceChoose from "./PricingChoose/priceChoose";
import PriceTable from "./PriceTable/priceTable";
import PriceMarket from "./PriceMarket/priceMarket";
import Savings from "./Savings/Savings";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const toggleIsYearly = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className="text-center" id="pricingComponent">
      <PriceChoose isYearly={isYearly} toggleIsYearly={toggleIsYearly} />
      <PriceTable isYearly={isYearly} />
      <PriceMarket />
      <Savings />
    </div>
  );
};

export default Pricing;
