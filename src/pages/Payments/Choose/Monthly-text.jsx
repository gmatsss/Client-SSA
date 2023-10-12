import React from "react";
import "./Montlyplan.css";

const Monthlyplan = ({ numberOfBots = 1 }) => {
  const botBuildFees = [495, 395, 295, 195];
  const monthlySubscription = 149;
  const buildFee = botBuildFees[numberOfBots - 1] || botBuildFees[3];
  const totalPayment = buildFee + monthlySubscription;

  return (
    <div className="choose-container">
      <h1 className="choose-title">
        Introducing Our Monthly Plan for {numberOfBots} Bot
        {numberOfBots > 1 ? "s" : ""}
      </h1>
      <p className="choose-description">
        Unlock the full potential of our platform with our exclusive monthly
        plan tailored for {numberOfBots} bot{numberOfBots > 1 ? "s" : ""}.
      </p>
      <div className="choose-details">
        <h2 className="choose-subtitle">Your Customized Package Details:</h2>
        <ul className="choose-list">
          <li>
            <strong>Bot Build Fee:</strong> A special one-time fee of $
            {buildFee.toFixed(2)} for a personalized bot setup.
          </li>
          <li>
            <strong>Monthly Subscription:</strong> Only $
            {monthlySubscription.toFixed(2)}/month for continued access and
            support.
          </li>
          <li>
            <strong>Total Payment:</strong> Get started with an upfront payment
            of just ${totalPayment.toFixed(2)}.
          </li>
        </ul>
      </div>
      <p className="choose-footer">
        Join our community of satisfied customers and elevate your business to
        new heights. Don't miss out on this limited-time offer tailored for your
        needs!
      </p>
    </div>
  );
};

export default Monthlyplan;
