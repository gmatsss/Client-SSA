import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PersonalDetails from "./PersonalDetails";
import AgentDetails from "./AgentDetails";
import AdditionalInfo from "./AdditionalInfo";

const OnboardingForm = ({
  formData,
  setFormData,
  loading,
  setLoading,
  showTooltip,
  setShowTooltip,
  currentStep,
  setCurrentStep,
}) => {
  const navigate = useNavigate();

  const [uploadedFiles, setUploadedFiles] = useState([]); // Moved to OnboardingForm

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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

    // Validation for the last step
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

    // Merging uploadedFiles with formData
    const completeFormData = {
      ...formData,
      uploadedFiles: uploadedFiles,
      // verificationCode: "GDbnJqHY2Qda7rEfBfIezPwHH0autx",
      verificationCode: generateVerificationCode(),
    };

    // Check the number of agents
    const numAgents = parseInt(completeFormData.numberOfAgents, 10);
    console.log(`Redirecting to link for ${numAgents} agent(s)...`);
    navigate("/payments", {
      state: { agentCount: numAgents, formData: completeFormData },
    });
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

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (formData.email && !emailPattern.test(formData.email)) {
      isValid = false;
      toast.error("Please enter a valid email address.");
    }

    // Phone validation (only numbers)
    const phonePattern = /^[0-9]+$/;
    if (formData.phone && !phonePattern.test(formData.phone)) {
      isValid = false;
      toast.error("Phone number can contain numbers only.");
    }

    return isValid;
  };

  const validateStep2 = () => {
    const fields = [
      "numberOfAgents",
      "toneOfVoice",
      "agentType",
      "serviceIndustry",
    ];
    let isValid = true;

    fields.forEach((field) => {
      if (!formData[field]) {
        isValid = false;
        toast.error(`Please fill out the ${field} field.`);
      }
    });

    // Validate numberOfAgents to ensure it's greater than 0
    if (formData.numberOfAgents <= 0) {
      isValid = false;
      toast.error("Number of agents must be greater than 0.");
    }

    // Check if serviceIndustry is set to "Other" and validate the otherServiceIndustry field
    if (
      formData.serviceIndustry === "Other" &&
      !formData.otherServiceIndustry
    ) {
      isValid = false;
      toast.error("Please specify the industry.");
    }

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
    <form onSubmit={handleSubmit} className="p-4">
      <div className="row g-3">
        {currentStep === 1 && (
          <PersonalDetails
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}

        {currentStep === 2 && (
          <AgentDetails
            formData={formData}
            handleInputChange={handleInputChange}
            showTooltip={showTooltip}
            setShowTooltip={setShowTooltip}
          />
        )}

        {currentStep === 3 && (
          <AdditionalInfo
            formData={formData}
            handleInputChange={handleInputChange}
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles} // Passing the setter function as prop
            setFormData={setFormData} // Pass setFormData here
          />
        )}
      </div>

      <div className="mt-5 btn-onboard-holder">
        {currentStep > 1 && (
          <button
            type="button"
            className="btn-onboard mr-2 mx-2"
            onClick={handleBack}
          >
            Back
          </button>
        )}

        {currentStep < 3 && (
          <button
            type="button"
            className="btn-onboard mr-2 mx-2"
            onClick={handleNext}
          >
            Next
          </button>
        )}

        {currentStep === 3 && (
          <button type="submit" className="btn-onboard mx-2" disabled={loading}>
            {loading ? <div className="lds-dual-ring-onboard"></div> : "Submit"}
          </button>
        )}
      </div>
    </form>
  );
};

export default OnboardingForm;
