import React, { useState, useEffect } from "react";
import logo from "../../../../img/Logo.png";
import "./priceTable.css";

const PriceTable = ({ isYearly }) => {
  // Costs data
  const costs = {
    us: {
      yearly: "$40,000/per year",
      monthly: "$3,333/per month",
    },
    philippines: {
      yearly: "$7,000/per year",
      monthly: "$583/per month",
    },
    finalCost: {
      yearly: "$1,695 (one-time + fee for a year)",
      monthly: "$149/mo",
    },
  };

  // Current costs state
  const [currentCosts, setCurrentCosts] = useState({
    us: isYearly ? costs.us.yearly : costs.us.monthly,
    philippines: isYearly
      ? costs.philippines.yearly
      : costs.philippines.monthly,
    finalCost: isYearly ? costs.finalCost.yearly : costs.finalCost.monthly,
  });

  // Update currentCosts state when isYearly prop changes
  useEffect(() => {
    setCurrentCosts({
      us: isYearly ? costs.us.yearly : costs.us.monthly,
      philippines: isYearly
        ? costs.philippines.yearly
        : costs.philippines.monthly,
      finalCost: isYearly ? costs.finalCost.yearly : costs.finalCost.monthly,
    });
  }, [isYearly]); // Dependency array to watch for changes in isYearly prop

  return (
    <div className="price_table">
      <table className="price-table">
        <tbody>
          <tr className="header-row">
            <td className="country-service">Country/Service</td>
            <td className="average-cost">Average Annual Cost</td>
          </tr>
          <tr className="data-row">
            <td className="country-service">United States</td>
            <td className="average-cost">{currentCosts.us}</td>
          </tr>
          <tr className="data-row">
            <td className="country-service">Philippines</td>
            <td className="average-cost">{currentCosts.philippines}</td>
          </tr>

          {isYearly ? (
            <tr className="header-row">
              <td className="country-service">Bot Fee</td>
              <td className="average-cost">Total Cost </td>
            </tr>
          ) : (
            <tr></tr>
          )}

          {isYearly ? (
            <tr className="data-row">
              <td className="country-service">Bot Build fee</td>
              <td className="average-cost">
                $495 <br /> <span>(One time payment)</span>
              </td>
            </tr>
          ) : (
            <tr></tr>
          )}

          {isYearly ? (
            <tr className="data-row">
              <td className="country-service">Yearly fee</td>
              <td className="average-cost">$99.95 x 12</td>
            </tr>
          ) : (
            <tr></tr>
          )}

          <tr className="">
            <td className="final-row logo-cell">
              <img src={logo} alt="" className="logo" />
            </td>
            <td className="final-cost">
              {isYearly ? (
                <span className="h1" data-text="$1,695">
                  $1,695
                </span>
              ) : (
                <span className="MO">$149</span>
              )}
              <br />
              <span className="fee-note">
                {isYearly ? "(fee for a year)" : "(per month)"}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
