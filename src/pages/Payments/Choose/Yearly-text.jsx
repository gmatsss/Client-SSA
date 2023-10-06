import React from "react";
import "./YearlyPlan.css";

const YearlyPlan = () => {
  return (
    <div className="yearly-container">
      <h1 className="yearly-title">Exclusive Yearly Plan Offer</h1>
      <p className="yearly-description">
        Experience year-round benefits and premium features with our yearly
        subscription. Perfect for those committed to excellence.
      </p>
      <div className="yearly-details">
        <h2 className="yearly-subtitle">Package Details:</h2>
        <ul className="yearly-list">
          <li>
            <strong>Bot Build Fee:</strong> A one-time fee of $495 for a
            top-tier bot setup.
          </li>
          <li>
            <strong>Monthly Subscription:</strong> Just $99.95/month, billed
            annually.
          </li>
          <li>
            <strong>Total Yearly Payment:</strong> An upfront payment of only
            $1,695.00 secures your yearly access.
          </li>
        </ul>
      </div>
      <p className="yearly-footer">
        Elevate your operations and enjoy uninterrupted premium access with our
        yearly plan. Commit to success today!
      </p>
    </div>
  );
};

export default YearlyPlan;
