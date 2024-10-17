import React from "react";
import "./Montlyplan.css";

const Monthlyplan = ({ numberOfBots = 1 }) => {
  const botBuildFees = [495, 395, 295, 195];
  const monthlySubscription = 149;
  const buildFee = botBuildFees[numberOfBots - 1] || botBuildFees[3];
  const totalPayment = buildFee + monthlySubscription;

  return (
    <div className="choose-container">
      <div className="choose-continer">
        <h1 className="choose-title">Introducing Our Monthly Plan</h1>
        <h4>
          Get the perfect plan for {numberOfBots} {""}
          and elevate your business to new heights effortlessly!
        </h4>
      </div>

      <div className="card-monthlydetails">
        <div className="monthly-plan-header">
          <h2>Monthly Plan</h2>
          <p className="monthly-price">
            $149<span>/per month</span>
          </p>
        </div>

        <div className="plan-details">
          <div className="bot-build-container">
            <p className="bot-build-fee">BOT BUILD FEE:</p>
            <p className="fee-amount">${buildFee.toFixed(2)}</p>
          </div>

          <div className="total-payment-container">
            <p className="total-payment-label">TOTAL PAYMENT:</p>
            <p className="total-amount">${totalPayment.toFixed(2)}</p>
          </div>
        </div>
        <div className="footer-planss">
          <p className="footer-textss">
            Join our community of satisfied customers and elevate your business
            to new heights. Don't miss out on this limited-time offer tailored
            for your needs!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Monthlyplan;
