import React from "react";
import "./YearlyPlan.css";

const YearlyPlan = ({ numberOfBots = 1 }) => {
  const botBuildFees = [495, 395, 295, 195];
  const monthlyUpkeepFee = 99.95;
  const buildFee = botBuildFees[numberOfBots - 1] || botBuildFees[3];
  const totalYearlyPayment = buildFee + monthlyUpkeepFee * 12;

  return (
    <div className="yearly-container">
      <h1 className="yearly-title">
        Exclusive Yearly Plan Offer for {numberOfBots} Bot
        {numberOfBots > 1 ? "s" : ""}
      </h1>
      <p className="yearly-description">
        Unlock unparalleled efficiency and premium features with our yearly
        subscription tailored for {numberOfBots} bot
        {numberOfBots > 1 ? "s" : ""}. Ideal for those who aim for the pinnacle
        of excellence.
      </p>
      <div className="yearly-details">
        <h2 className="yearly-subtitle">Your Customized Package Details:</h2>
        <ul className="yearly-list">
          <li>
            <strong>Bot Build Fee:</strong> A special one-time fee of $
            {buildFee.toFixed(2)} for a top-tier bot setup.
          </li>
          <li>
            <strong>Monthly Subscription:</strong> Only $
            {monthlyUpkeepFee.toFixed(2)}/month, billed annually.
          </li>
          <li>
            <strong>Total Yearly Payment:</strong> An exclusive upfront payment
            of just ${totalYearlyPayment.toFixed(2)} secures your yearly access.
          </li>
        </ul>
      </div>
      <p className="yearly-footer">
        Elevate your operations and enjoy uninterrupted premium access tailored
        for your needs. Commit to unparalleled success today!
      </p>
    </div>
  );
};

export default YearlyPlan;
