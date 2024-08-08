import React, { useState } from "react";
import "./OnBoard.css";
import OnboardingForm from "./components/OnboardingForm";

const Onboarding = ({
  currentStep,
  setCurrentStep,
  currentBotCount,
  setCurrentBotCount,
}) => {
  const [loading, setLoading] = useState(false);

  const [showTooltip, setShowTooltip] = useState(false);

  const titles = [
    "Personal Details",
    "Bot Customization",
    "Additional Information",
  ];

  return (
    <div className="onboarding-container">
      <h1 className="my-onboarding-title">Onboarding For SSA Bot Agents</h1>
      <h2 className="my-onboarding-subtitle">{titles[currentStep - 1]}</h2>

      <div className="onboarding-form">
        <OnboardingForm
          loading={loading}
          setLoading={setLoading}
          showTooltip={showTooltip}
          setShowTooltip={setShowTooltip}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          currentBotCount={currentBotCount}
          setCurrentBotCount={setCurrentBotCount}
        />
      </div>
    </div>
  );
};

export default Onboarding;
