import React, { useState } from "react";
import Select from "react-select";
import "./FormSubmited.css";
import industryData from "../../industry.json";
import toneOfVoiceOptions from "../../toneOfVoiceOptions";
import { toast } from "react-toastify";

const channelOptions = [
  { value: "Twilio", label: "Twilio" },
  { value: "FB Messenger", label: "FB Messenger" },
  { value: "Telegram", label: "Telegram" },
  { value: "WhatsApp", label: "WhatsApp" },
  { value: "Web Chat", label: "Web Chat" },
  { value: "Custom API", label: "Custom API" },
];

const agentTypeOptions = [
  { value: "CustomerService", label: "Customer Service" },
  { value: "SalesAgents", label: "Sales" },
];

const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#fff",
    borderColor: "#ff0077",
    borderWidth: "0 0 0 4px",
    boxShadow: "none",
    borderRadius: "5px",
    "&:hover": {
      borderColor: "#ff0077",
    },
  }),
  input: (provided) => ({
    ...provided,
    color: "#2c3553",
    fontSize: "1.3em",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#bbb",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#2c3553",
    fontSize: "1.0em",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#f0f0f0" : "#fff",
    color: "#2c3553",
    fontSize: "1.0em",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#bbb",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

const industryOptions = industryData.map((categoryData) => ({
  label: categoryData.category,
  options: categoryData.industries.map((industry) => ({
    value: industry.industry_name,
    label: industry.industry_name,
  })),
}));

const FormSubmited = ({ formData, onClose, updateFormData }) => {
  const [localFormData, setLocalFormData] = useState({ ...formData });
  const [agents, setAgents] = useState(localFormData.agents || []);

  const handleInputChange = (field, value) => {
    setLocalFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleAgentChange = (index, field, value) => {
    const updatedAgents = agents.map((agent, i) =>
      i === index ? { ...agent, [field]: value } : agent
    );
    setAgents(updatedAgents);
    setLocalFormData((prevData) => ({ ...prevData, agents: updatedAgents }));
  };

  const handleAddAgent = () => {
    const newAgent = { agentType: "", serviceIndustry: "", toneOfVoice: "" };
    const updatedAgents = [...agents, newAgent];
    setAgents(updatedAgents);
    setLocalFormData((prevData) => ({ ...prevData, agents: updatedAgents }));
  };

  const handleRemoveAgent = (index) => {
    const updatedAgents = agents.filter((_, i) => i !== index);
    setAgents(updatedAgents);
    setLocalFormData((prevData) => ({ ...prevData, agents: updatedAgents }));
  };

  const handleChannelChange = (selectedOptions) => {
    const selectedChannels = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    setLocalFormData((prevData) => ({
      ...prevData,
      botChannel: selectedChannels,
    }));
  };

  const validateFields = () => {
    let isValid = true;

    if (!localFormData.firstname) {
      toast.error("First Name is required");
      isValid = false;
    }
    if (!localFormData.lastname) {
      toast.error("Last Name is required");
      isValid = false;
    }
    if (!localFormData.email) {
      toast.error("Email is required");
      isValid = false;
    }
    if (!localFormData.phone) {
      toast.error("Phone is required");
      isValid = false;
    }
    if (agents.length === 0) {
      toast.error("At least one agent is required");
      isValid = false;
    }

    agents.forEach((agent, index) => {
      if (!agent.agentType) {
        toast.error(`Agent Type is required for Agent ${index + 1}`);
        isValid = false;
      }
      if (!agent.serviceIndustry) {
        toast.error(`Service Industry is required for Agent ${index + 1}`);
        isValid = false;
      }
      if (!agent.toneOfVoice) {
        toast.error(`Tone of Voice is required for Agent ${index + 1}`);
        isValid = false;
      }
    });

    return isValid;
  };

  const findIndustryOption = (value) => {
    for (let category of industryOptions) {
      const option = category.options.find((opt) => opt.value === value);
      if (option) return option;
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateFields()) {
      updateFormData(localFormData);
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div class="modal-header">
          <h2>Onboarding Data Summary</h2>
          <button class="close-button-form" onClick={onClose}>
            &times;
          </button>
        </div>
        <form className="form-submitted" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              value={localFormData.firstname}
              onChange={(e) => handleInputChange("firstname", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              value={localFormData.lastname}
              onChange={(e) => handleInputChange("lastname", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={localFormData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="text"
              value={localFormData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </div>
          <div className="form-group">
            <h3 className="section-title">
              Below fields apply to all Chat bot
            </h3>
          </div>

          <div className="form-group">
            <label>Additional Guidelines:</label>
            <textarea
              value={localFormData.additionalGuidelines}
              onChange={(e) =>
                handleInputChange("additionalGuidelines", e.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label>Bot Channel:</label>
            <Select
              isMulti
              value={channelOptions.filter((option) =>
                localFormData.botChannel.includes(option.value)
              )}
              options={channelOptions}
              onChange={handleChannelChange}
              styles={customSelectStyles}
            />
          </div>

          <div className="form-group">
            <div className="add-agent-container">
              <button
                type="button"
                className="add-agent"
                onClick={handleAddAgent}
              >
                Add Agent
              </button>
            </div>
            <ul>
              {agents.map((agent, index) => (
                <li key={index}>
                  <div className="agent-details">
                    <div className="agent-form">
                      <div className="form-group">
                        <label>Agent Type:</label>
                        <Select
                          styles={customSelectStyles}
                          options={agentTypeOptions}
                          name="agentType"
                          value={agentTypeOptions.find(
                            (option) => option.value === agent.agentType
                          )}
                          onChange={(selectedOption) =>
                            handleAgentChange(
                              index,
                              "agentType",
                              selectedOption.value
                            )
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label>Service Industry:</label>
                        <Select
                          styles={customSelectStyles}
                          options={industryOptions}
                          isSearchable={true}
                          name="serviceIndustry"
                          value={findIndustryOption(agent.serviceIndustry)}
                          onChange={(selectedOption) =>
                            handleAgentChange(
                              index,
                              "serviceIndustry",
                              selectedOption.value
                            )
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label>Tone of Voice:</label>
                        <Select
                          styles={customSelectStyles}
                          options={toneOfVoiceOptions}
                          isSearchable={true}
                          name="toneOfVoice"
                          value={toneOfVoiceOptions.find(
                            (option) => option.value === agent.toneOfVoice
                          )}
                          onChange={(selectedOption) =>
                            handleAgentChange(
                              index,
                              "toneOfVoice",
                              selectedOption.value
                            )
                          }
                        />
                      </div>
                      {agent.serviceIndustry === "Other" && (
                        <div className="form-group">
                          <label>Other Service Industry:</label>
                          <input
                            type="text"
                            value={agent.otherServiceIndustry || ""}
                            onChange={(e) =>
                              handleAgentChange(
                                index,
                                "otherServiceIndustry",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      )}
                      <button
                        type="button"
                        className="remove-agent-inline"
                        onClick={() => handleRemoveAgent(index)}
                      >
                        Remove Agent
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="button-containers">
            <button type="submit" className="save-button">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSubmited;
