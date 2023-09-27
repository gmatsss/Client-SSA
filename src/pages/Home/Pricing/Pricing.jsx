import PriceChoose from "./PricingChoose/priceChoose";
import PriceTable from "./PriceTable/priceTable";
import PriceMarket from "./PriceMarket/priceMarket";
import Savings from "./Savings/Savings";

const Pricing = () => {
  return (
    <div className=" text-center" id="pricingComponent">
      <PriceChoose />

      <PriceTable />

      <PriceMarket />

      <Savings />
    </div>
  );
};

export default Pricing;
