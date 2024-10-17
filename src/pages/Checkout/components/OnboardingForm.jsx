import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PersonalDetails from "./PersonalDetails";
import AgentDetails from "./AgentDetails";
import AdditionalInfo from "./AdditionalInfo";
import "./OnboardingForm.css";
import "./Responsive.css";

const OnboardingForm = ({
  loading,
  setLoading,
  showTooltip,
  setShowTooltip,
  currentStep,
  setCurrentStep,
  setCurrentBotCount,
}) => {
  const navigate = useNavigate();
  const [savedAgents, setSavedAgents] = useState([]);

  const initialAgentData = {
    agentType: "",
    toneOfVoice: "",
    serviceIndustry: "",
    otherServiceIndustry: "",
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    numberOfAgents: 1,
    agents: [initialAgentData],
    botChannel: [],
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAgentInputChange = (index, event) => {
    const newAgents = [...formData.agents];
    newAgents[index][event.target.name] = event.target.value;
    setFormData((prevData) => ({ ...prevData, agents: newAgents }));
  };

  const addMoreBot = () => {
    if (validateStep2()) {
      setSavedAgents([...savedAgents, ...formData.agents]);
      setFormData((prevData) => ({
        ...prevData,
        numberOfAgents: prevData.numberOfAgents + 1,
        agents: [{ ...initialAgentData }],
      }));
      setCurrentBotCount((prevCount) => prevCount + 1);
    }
  };

  const generateVerificationCode = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 30; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const Fields = ["additionalGuidelines"];

    if (uploadedFiles.length === 0) {
      toast.error("Please upload at least one file.");
      return;
    }

    let isValid = true;
    Fields.forEach((field) => {
      if (!formData[field]) {
        isValid = false;
        toast.error(`Please fill out the ${field} field.`);
      }
    });

    if (!isValid) return;

    setLoading(true);

    const allAgentsData = [...savedAgents, ...formData.agents];
    const completeFormData = {
      ...formData,
      agents: allAgentsData,
      uploadedFiles: uploadedFiles,
      // verificationCode: "7xVJxzju0KMq94Vj2EJWHeD7N4qzBV",//yearly2
      // verificationCode: "J8jcyQbmnRKeBGaT502aZNhIzwJpSA", //monthly1
      verificationCode: generateVerificationCode(),
    };

    const numAgents = parseInt(completeFormData.numberOfAgents, 10);
    navigate("/payments", {
      state: { agentCount: numAgents, formData: completeFormData },
    });

    console.log(numAgents);
    console.log(completeFormData);
  };

  const validateStep1 = () => {
    const fields = ["firstname", "lastname", "email", "phone"];
    let isValid = true;

    fields.forEach((field) => {
      if (!formData[field]) {
        isValid = false;
        toast.error(`Please fill out the ${field} field.`);
      }
    });

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (formData.email && !emailPattern.test(formData.email)) {
      isValid = false;
      toast.error("Please enter a valid email address.");
    }

    const phonePattern = /^[0-9]+$/;
    if (formData.phone && !phonePattern.test(formData.phone)) {
      isValid = false;
      toast.error("Phone number can contain numbers only.");
    }

    return isValid;
  };

  const validateStep2 = () => {
    const fields = ["toneOfVoice", "agentType", "serviceIndustry"];
    let isValid = true;

    formData.agents.forEach((agent) => {
      fields.forEach((field) => {
        if (!agent[field]) {
          isValid = false;
          toast.error(
            `Please fill out the ${field} field for one of the agents.`
          );
        }
      });

      if (agent.serviceIndustry === "Other" && !agent.otherServiceIndustry) {
        isValid = false;
        toast.error("Please specify the industry for one of the agents.");
      }
    });

    return isValid;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <form className="my-onboarding-form" onSubmit={handleSubmit}>
      <div>
        {currentStep === 1 && (
          <PersonalDetails
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}

        {currentStep === 2 &&
          formData.agents.map((agentData, index) => (
            <AgentDetails
              key={index + formData.numberOfAgents}
              formData={agentData}
              handleInputChange={(e) => handleAgentInputChange(index, e)}
              showTooltip={showTooltip}
              setShowTooltip={setShowTooltip}
              botCount={formData.numberOfAgents}
            />
          ))}

        {currentStep === 2 && (
          <button
            className="onboarding-add-Agent"
            type="button"
            onClick={addMoreBot}
          >
            Add More Bot
          </button>
        )}

        {currentStep === 3 && (
          <AdditionalInfo
            formData={formData}
            handleInputChange={handleInputChange}
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
            setFormData={setFormData}
          />
        )}
      </div>

      <div className="button-container">
        {currentStep > 1 && (
          <button
            className="my-onboarding-button"
            type="button"
            onClick={handleBack}
          >
            Back
          </button>
        )}

        {currentStep < 3 && (
          <button
            className="my-onboarding-button"
            type="button"
            onClick={handleNext}
          >
            Next
          </button>
        )}

        {currentStep === 3 && (
          <button
            className="my-onboarding-button"
            type="submit"
            disabled={loading}
          >
            {loading ? <div></div> : "Submit"}
          </button>
        )}
      </div>
    </form>
  );
};

export default OnboardingForm;
