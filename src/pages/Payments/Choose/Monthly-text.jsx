import React from "react";
import "./Montlyplan.css";

const Monthlyplan = () => {
  return (
    <div className="choose-container">
      <h1 className="choose-title">Introducing Our Monthly Plan</h1>
      <p className="choose-description">
        Unlock the full potential of our platform with our exclusive monthly
        plan tailored for your needs.
      </p>
      <div className="choose-details">
        <h2 className="choose-subtitle">What's Included:</h2>
        <ul className="choose-list">
          <li>
            <strong>Bot Build Fee:</strong> A one-time fee of $495 for a
            personalized bot setup.
          </li>
          <li>
            <strong>Monthly Subscription:</strong> Only $149/month for continued
            access and support.
          </li>
          <li>
            <strong>Total Payment:</strong> Get started with an upfront payment
            of just $644.00.
          </li>
        </ul>
      </div>
      <p className="choose-footer">
        Join our community of satisfied customers and elevate your business to
        new heights. Don't miss out on this limited-time offer!
      </p>
    </div>
  );
};

export default Monthlyplan;
