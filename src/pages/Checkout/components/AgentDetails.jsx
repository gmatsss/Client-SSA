import React from "react";
import industryData from "../../../industry.json";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import toneOfVoiceOptions from "../../../toneOfVoiceOptions";

const AgentDetails = ({ formData, handleInputChange, botCount }) => {
  const options = industryData.map((categoryData) => ({
    label: categoryData.category,
    options: categoryData.industries.map((industry) => ({
      value: industry.industry_name,
      label: industry.industry_name,
    })),
  }));

  const agentTypeOptions = [
    { value: "CustomerService", label: "Customer Service" },
    { value: "SalesAgents", label: "Sales" },
  ];

  const customStyles = {
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
      fontSize: "0.9em",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#bbb",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#2c3553",
      fontSize: "0.9em",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#f0f0f0" : "#fff",
      color: "#2c3553",
      fontSize: "0.9em",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#bbb",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  return (
    <div className="agent-input-group">
      <div className="my-input-item">
        <label className="my-onboarding-label" htmlFor="agentType">
          Agent Type
          <span className="tooltip-container">
            <FontAwesomeIcon icon={faInfoCircle} className="tooltip-icon" />
            <span className="tooltip">
              Select the type of agent. This field specifies the main role of
              the agent you are creating. Choose between "Customer Service" for
              agents handling customer inquiries or "Sales Agents" for agents
              focusing on sales tasks.
            </span>
          </span>
        </label>
        <Select
          styles={customStyles}
          options={agentTypeOptions}
          isSearchable={true}
          name="agentType"
          value={agentTypeOptions.find(
            (option) => option.value === formData.agentType
          )}
          onChange={(selectedOption) =>
            handleInputChange({
              target: {
                name: "agentType",
                value: selectedOption.value,
              },
            })
          }
        />
      </div>
      <div className="my-input-item">
        <label className="my-onboarding-label" htmlFor="toneOfVoice">
          Tone of Voice
          <span className="tooltip-container">
            <FontAwesomeIcon icon={faInfoCircle} className="tooltip-icon" />
            <span className="tooltip">
              <strong>Examples of Tone of Voice:</strong>
              <ul>
                {toneOfVoiceOptions.map((option) => (
                  <li key={option.value}>
                    <strong>{option.label}:</strong> Some description of{" "}
                    {option.label}.
                  </li>
                ))}
              </ul>
              <p>
                Remember, the tone of voice for the chatbot should align with
                the company's brand identity and the expectations of its target
                audience.
              </p>
            </span>
          </span>
        </label>
        <Select
          styles={customStyles}
          options={toneOfVoiceOptions}
          isSearchable={true}
          name="toneOfVoice"
          value={toneOfVoiceOptions.find(
            (option) => option.value === formData.toneOfVoice
          )}
          onChange={(selectedOption) =>
            handleInputChange({
              target: {
                name: "toneOfVoice",
                value: selectedOption.value,
              },
            })
          }
        />
      </div>
      <div className="my-input-item">
        <label className="my-onboarding-label" htmlFor="serviceIndustry">
          Service Industry
          <span className="tooltip-container">
            <FontAwesomeIcon icon={faInfoCircle} className="tooltip-icon" />
            <span className="tooltip">
              Select the service industry. This field helps categorize the type
              of services your agents will be dealing with. If your industry is
              not listed, select "Other" and specify the industry in the
              provided input field.
            </span>
          </span>
        </label>
        <Select
          styles={customStyles}
          options={options}
          isSearchable={true}
          name="serviceIndustry"
          value={options.find(
            (category) => category.value === formData.serviceIndustry
          )}
          onChange={(selectedOption) =>
            handleInputChange({
              target: {
                name: "serviceIndustry",
                value: selectedOption.value,
              },
            })
          }
        />
        <div>
          <p>
            ⓘ Current Bot Count: <strong>{botCount}</strong>
          </p>
        </div>
        {formData.serviceIndustry === "Other" && (
          <input
            type="text"
            className="my-onboarding-input"
            placeholder="Specify Industry"
            name="otherServiceIndustry"
            value={formData.otherServiceIndustry}
            onChange={handleInputChange}
            tabIndex="9"
          />
        )}
      </div>
    </div>
  );
};

export default AgentDetails;
