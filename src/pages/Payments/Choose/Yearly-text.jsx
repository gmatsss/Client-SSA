import React from "react";
import "./YearlyPlan.css";

const YearlyPlan = ({ numberOfBots = 1 }) => {
  const botBuildFees = [495, 395, 295, 195];
  const monthlyUpkeepFee = 99.95; // Monthly fee for upkeep
  const buildFee = botBuildFees[numberOfBots - 1] || botBuildFees[3];
  const yearlySubscription = monthlyUpkeepFee * 12; // Yearly subscription cost
  const totalYearlyPayment = buildFee + yearlySubscription; // Total yearly payment

  return (
    <div className="yearly-container">
      <div className="yearly-inner-container">
        <h1 className="yearly-title">Unlock the Value with Our Yearly Plan</h1>
        <h4 className="yearly-subtitle">
          Secure the ideal plan for {numberOfBots} bot
          {numberOfBots > 1 ? "s" : ""} and gain exclusive access to your
          business!
        </h4>
      </div>

      <div className="card-yearlydetails">
        <div className="yearly-plan-header">
          <h2>Yearly Plan</h2>
          <p className="yearly-price">
            ${monthlyUpkeepFee.toFixed(2)}
            <span>/per month (billed annually)</span>
          </p>
        </div>

        <div className="yearly-plan-details">
          <div className="yearly-bot-build-container">
            <p className="yearly-bot-build-fee">BOT BUILD FEE:</p>
            <p className="yearly-fee-amount">${buildFee.toFixed(2)}</p>
          </div>

          <div className="yearly-total-payment-container">
            <p className="yearly-total-payment-label">TOTAL YEARLY PAYMENT:</p>
            <p className="yearly-total-amount">
              ${totalYearlyPayment.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="yearly-footer-plan">
          <p className="yearly-footer-text">
            Commit to success with our premium yearly plan and enjoy
            uninterrupted access to our top-tier features. Don't miss out on
            this limited-time offer designed to elevate your business!
          </p>
        </div>
      </div>
    </div>
  );
};

export default YearlyPlan;
