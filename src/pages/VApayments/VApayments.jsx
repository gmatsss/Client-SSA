import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./VApayments.css";
import YearlyVAPlan from "./Plan/Yearly/YearlyVAPlan";
import MonthlyVAPlan from "./Plan/Monthly/MonthlyVAPlan";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const VApayments = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    if (!formData) {
      navigate("/VAonboarding");
    }
  }, [formData, navigate]);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handleBack = () => {
    const confirmed = window.confirm(
      "Are you sure you want to go back? Make sure you don't process any payment as we can't retrieve lost payments."
    );
    if (confirmed) {
      setSelectedPlan(null);
    }
  };

  const persuasiveParagraph =
    "Experience high-speed AI for smooth operations and deploy anywhere for unmatched flexibility, unlocking time savings and improving customer service. Increase revenue and reduce costs with optimized interactions. Enhance service accuracy and discover insights on customer preferences with seamless integration.";

  return (
    <div className="vapayments-container">
      <h1>SSA Voice Agents</h1>
      <div className="pricing-grid">
        <div
          className={`pricing-item ${
            selectedPlan === "yearly" ? "no-background" : ""
          }`}
        >
          {selectedPlan !== "yearly" ? (
            <>
              <h2>Monthly</h2>
              <p>$599/Month per inbound agent</p>
              <p>🌟 Best for short-term needs</p>
              <p>👍 Flexible and no long-term commitment</p>
              <p>📈 Perfect for scaling your support quickly</p>
              <p>{persuasiveParagraph}</p>
              {selectedPlan !== "monthly" ? (
                <button
                  className="pricing-button monthly-button"
                  onClick={() => handleSelectPlan("monthly")}
                >
                  Choose Monthly
                </button>
              ) : (
                <>
                  <div className="verification-container">
                    <p>
                      Verification Code:{" "}
                      <span className="verification-code">asdasdad</span>
                    </p>
                    <button className="verification-button">
                      <FontAwesomeIcon icon={faCheck} /> Verify Payment
                    </button>
                  </div>

                  <button className="pricing-button" onClick={handleBack}>
                    Back
                  </button>
                </>
              )}
            </>
          ) : (
            <div className="plan-content">
              <YearlyVAPlan />
            </div>
          )}
        </div>

        <div
          className={`pricing-item ${
            selectedPlan === "monthly" ? "no-background" : ""
          }`}
        >
          {selectedPlan !== "monthly" ? (
            <>
              <h2 style={{ color: "#007bff" }}>Yearly</h2>
              <p>$6000/Year per inbound agent</p>
              <p>💰 Save more with annual billing</p>
              <p>🚀 Ideal for long-term growth</p>
              <p>🔒 Lock in the best rates for the year</p>
              <p>{persuasiveParagraph}</p>
              {selectedPlan !== "yearly" ? (
                <button
                  className="pricing-button"
                  onClick={() => handleSelectPlan("yearly")}
                >
                  Choose Yearly
                </button>
              ) : (
                <>
                  <div className="verification-container">
                    <p>
                      Verification Code:{" "}
                      <span className="verification-code">asdasdad</span>
                    </p>
                    <button className="verification-button">
                      <FontAwesomeIcon icon={faCheck} /> Verify Payment
                    </button>
                  </div>
                  <button className="pricing-button" onClick={handleBack}>
                    Back
                  </button>
                </>
              )}
            </>
          ) : (
            <div className="plan-content">
              <MonthlyVAPlan />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VApayments;
