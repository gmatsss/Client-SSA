import React, { useState, useEffect } from "react";
import logo from "../../../../img/Logo.png";
import "./priceTable.css";

const PriceTable = ({ isYearly }) => {
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

  const [currentCosts, setCurrentCosts] = useState({
    us: isYearly ? costs.us.yearly : costs.us.monthly,
    philippines: isYearly
      ? costs.philippines.yearly
      : costs.philippines.monthly,
    finalCost: isYearly ? costs.finalCost.yearly : costs.finalCost.monthly,
  });

  useEffect(() => {
    setCurrentCosts({
      us: isYearly ? costs.us.yearly : costs.us.monthly,
      philippines: isYearly
        ? costs.philippines.yearly
        : costs.philippines.monthly,
      finalCost: isYearly ? costs.finalCost.yearly : costs.finalCost.monthly,
    });
  }, [
    isYearly,
    costs.us.yearly,
    costs.us.monthly,
    costs.philippines.yearly,
    costs.philippines.monthly,
    costs.finalCost.yearly,
    costs.finalCost.monthly,
  ]);

  return (
    <div className="price_table">
      <table className="price-table">
        <tbody>
          <tr className="header-row">
            <td className="price-table-td country-service">Country/Service</td>
            <td className="price-table-td average-cost">Average Annual Cost</td>
          </tr>
          <tr className="data-row">
            <td className="price-table-td country-service">United States</td>
            <td className="price-table-td average-cost">{currentCosts.us}</td>
          </tr>
          <tr className="data-row">
            <td className="price-table-td country-service">Philippines</td>
            <td className="price-table-td average-cost">
              {currentCosts.philippines}
            </td>
          </tr>

          {isYearly ? (
            <tr className="header-row">
              <td className="price-table-td country-service">Bot Fee</td>
              <td className="price-table-td average-cost">Total Cost</td>
            </tr>
          ) : (
            <tr></tr>
          )}

          {isYearly ? (
            <tr className="data-row">
              <td className="price-table-td country-service">Bot Build fee</td>
              <td className="price-table-td average-cost">
                $495 <br /> <span>(One time payment)</span>
              </td>
            </tr>
          ) : (
            <tr></tr>
          )}

          {isYearly ? (
            <tr className="data-row">
              <td className="price-table-td country-service">Yearly fee</td>
              <td className="price-table-td average-cost">$99.95 x 12</td>
            </tr>
          ) : (
            <tr></tr>
          )}

          <tr>
            <td className="price-table-td final-row logo-cell">
              <img src={logo} alt="" className="logo" />
            </td>
            <td className="price-table-td final-cost">
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
