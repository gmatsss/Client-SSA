import React, { useState } from "react";
import "./VAonboarding.css";
import "./VAonboardingResponsive.css";
import VoiceAgentDetailsStep from "./components/VoiceAgentDetailsStep";
import AdditionalDetailsStep from "./components/AdditionalDetailsStep";
import CustomerNameStep from "./components/CustomerNameStep";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../api/FetchData";
import { toast } from "react-toastify";

const VAonboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    voiceAgentDetails: [],
    additionalBehavior: "",
  });
  const [currentDetailVAagent, setCurrentDetailVAagent] = useState({
    customKnowledge: "",
    agentBehavior: "",
    agentPrompt: "",
    agentGreeting: "",
    voiceoftheagent: "",
    limitations: "",
  });
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const currentErrors = validateFields(step);
    if (Object.keys(currentErrors).length === 0) {
      if (
        step === 2 &&
        Object.keys(currentDetailVAagent).some(
          (key) => currentDetailVAagent[key]
        )
      ) {
        addVoiceAgentDetail(currentDetailVAagent);
        setCurrentDetailVAagent({
          customKnowledge: "",
          agentBehavior: "",
          agentPrompt: "",
          agentGreeting: "",
          voiceoftheagent: "",
          limitations: "",
        });
      }
      if (step < 3) setStep(step + 1);
      else handleSubmit();
    } else {
      setErrors(currentErrors);
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleAgentDetailChange = (e) => {
    const { name, value } = e.target;
    setCurrentDetailVAagent((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateFields = (currentStep) => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]*$/;

    if (currentStep === 1) {
      if (!formData.fname) newErrors.fname = "First name is required";
      if (!formData.lname) newErrors.lname = "Last name is required";
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
      if (!formData.phone) {
        newErrors.phone = "Phone is required";
      } else if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "Phone number can only contain digits";
      }
    } else if (currentStep === 2) {
      formData.voiceAgentDetails.forEach((detail, index) => {
        if (!detail.customKnowledge)
          newErrors[`customKnowledge_${index}`] = "Agent Knowledge is required";
        if (!detail.agentBehavior)
          newErrors[`agentBehavior_${index}`] = "Agent Behavior is required";
        if (!detail.agentPrompt)
          newErrors[`agentPrompt_${index}`] = "Agent Prompt is required";
        if (!detail.agentGreeting)
          newErrors[`agentGreeting_${index}`] = "Agent Greeting is required";
        if (!detail.voiceoftheagent)
          newErrors[`voiceoftheagent_${index}`] =
            "Voice of the Agent is required";
        if (!detail.limitations)
          newErrors[`limitations_${index}`] = "Limitations are required";
      });

      if (!currentDetailVAagent.customKnowledge)
        newErrors.customKnowledge = "Agent Knowledge is required";
      if (!currentDetailVAagent.agentBehavior)
        newErrors.agentBehavior = "Agent Behavior is required";
      if (!currentDetailVAagent.agentPrompt)
        newErrors.agentPrompt = "Agent Prompt is required";
      if (!currentDetailVAagent.agentGreeting)
        newErrors.agentGreeting = "Agent Greeting is required";
      if (!currentDetailVAagent.voiceoftheagent)
        newErrors.voiceoftheagent = "Voice of the Agent is required";
      if (!currentDetailVAagent.limitations)
        newErrors.limitations = "Limitations are required";
    }
    return newErrors;
  };

  const validateCurrentDetail = (currentDetailVAagent) => {
    const newErrors = {};
    if (!currentDetailVAagent.customKnowledge)
      newErrors.customKnowledge = "Agent Knowledge is required";
    if (!currentDetailVAagent.agentBehavior)
      newErrors.agentBehavior = "Agent Behavior is required";
    if (!currentDetailVAagent.agentPrompt)
      newErrors.agentPrompt = "Agent Prompt is required";
    if (!currentDetailVAagent.agentGreeting)
      newErrors.agentGreeting = "Agent Greeting is required";
    if (!currentDetailVAagent.voiceoftheagent)
      newErrors.voiceoftheagent = "Voice of the Agent is required";
    if (!currentDetailVAagent.limitations)
      newErrors.limitations = "Limitations are required";

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async () => {
    try {
      const result = await fetchData("User/check_userexist", "POST", {
        email: formData.email,
      });

      navigate("/VApayments", { state: { formData } });
    } catch (error) {
      toast.error(error.message || "Failed to check email");
    }
  };

  const addVoiceAgentDetail = (newDetail) => {
    setFormData((prev) => ({
      ...prev,
      voiceAgentDetails: [...prev.voiceAgentDetails, newDetail],
    }));
  };

  const renderAdditionalStepHeader = () => {
    if (step === 3) {
      return (
        <h2 className="informative-header">This applies to all Voice Agents</h2>
      );
    }
    return null;
  };

  return (
    <div className="vaonboarding-container">
      <h1 className="vaonboarding-title">Onboarding For SSA Voice Agents</h1>
      <h2 className="vaonboarding-subtitle">
        Please fill in your details to get started
      </h2>
      <div className="progress-indicator">
        <div className={`progress-step ${step >= 1 ? "active" : ""}`}>
          Customer Name
        </div>
        <div className={`progress-step ${step >= 2 ? "active" : ""}`}>
          Voice Agent Details
        </div>
        <div className={`progress-step ${step >= 3 ? "active" : ""}`}>
          Additional Details
        </div>
      </div>

      <form className="vaonboarding-form">
        {renderAdditionalStepHeader()}
        {step === 1 && (
          <CustomerNameStep
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        )}
        {step === 2 && (
          <VoiceAgentDetailsStep
            currentDetailVAagent={currentDetailVAagent}
            handleAgentDetailChange={handleAgentDetailChange}
            errors={errors}
            addVoiceAgentDetail={addVoiceAgentDetail}
            validateCurrentDetail={validateCurrentDetail}
            setErrors={setErrors}
            voiceAgentDetails={formData.voiceAgentDetails}
          />
        )}
        {step === 3 && (
          <AdditionalDetailsStep
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        )}

        <div className="vaonboarding-options">
          {step > 1 && (
            <button
              type="button"
              className="vaonboarding-button"
              onClick={handlePrev}
            >
              Previous
            </button>
          )}
          <button
            type="button"
            className="vaonboarding-button"
            onClick={handleNext}
          >
            {step < 3 ? "Next" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VAonboarding;
