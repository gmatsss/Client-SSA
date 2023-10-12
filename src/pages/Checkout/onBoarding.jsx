import React, { useState } from "react";
import "./OnBoard.css";
import OnboardingForm from "./components/OnboardingForm";

const Onboarding = ({ currentStep, setCurrentStep }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    numberOfAgents: "",
    agentType: "",
    serviceIndustry: "",
    uploadedFiles: [],
    toneOfVoice: "",
    additionalGuidelines: "",
    otherServiceIndustry: "",
    botChannel: [],
  });
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
      <h1 className="fs-1" style={{ color: "rgb(39, 179, 223)" }}>
        {titles[currentStep - 1]}
      </h1>

      <OnboardingForm
        formData={formData}
        setFormData={setFormData}
        loading={loading}
        setLoading={setLoading}
        showTooltip={showTooltip}
        setShowTooltip={setShowTooltip}
        currentStep={currentStep} // Pass currentStep as prop
        setCurrentStep={setCurrentStep} // Pass setCurrentStep as prop
      />
    </div>
  );
};

export default Onboarding;
