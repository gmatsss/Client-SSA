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
    <div
      className="onBoard rounded container-fluid"
      style={{ backgroundColor: "#4c4d62" }}
    >
      <h1 className="fs-1 title_onboard" style={{ color: "rgb(39, 179, 223)" }}>
        {titles[currentStep - 1]}
      </h1>

      <OnboardingForm
        loading={loading}
        setLoading={setLoading}
        showTooltip={showTooltip}
        setShowTooltip={setShowTooltip}
        currentStep={currentStep} // Pass currentStep as prop
        setCurrentStep={setCurrentStep} // Pass setCurrentStep as prop
        currentBotCount={currentBotCount}
        setCurrentBotCount={setCurrentBotCount}
      />
    </div>
  );
};

export default Onboarding;
