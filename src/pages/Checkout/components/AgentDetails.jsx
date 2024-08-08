import React from "react";
import industryData from "../../../industry.json";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const AgentDetails = ({ formData, handleInputChange, botCount }) => {
  const options = industryData.map((categoryData) => ({
    label: categoryData.category,
    options: categoryData.industries.map((industry) => ({
      value: industry.industry_name,
      label: industry.industry_name,
    })),
  }));

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
        <select
          name="agentType"
          value={formData.agentType}
          onChange={handleInputChange}
          className="my-onboarding-input"
          tabIndex="7"
        >
          <option value="" disabled>
            Select Agent Type
          </option>
          <option value="CustomerService">Customer Service</option>
          <option value="SalesAgents">Sales</option>
        </select>
      </div>
      <div className="my-input-item">
        <label className="my-onboarding-label" htmlFor="toneOfVoice">
          Tone of Voice
          <span className="tooltip-container">
            <FontAwesomeIcon icon={faInfoCircle} className="tooltip-icon" />
            <span className="tooltip">
              <strong>Examples of Tone of Voice:</strong>
              <ul>
                <li>
                  <strong>Professional and Formal:</strong> "We want the chatbot
                  to sound like a corporate representative, using formal
                  language and avoiding slang or colloquialisms."
                </li>
                <li>
                  <strong>Friendly and Casual:</strong> "We'd like the chatbot
                  to come across as approachable and friendly, using everyday
                  language that our customers can relate to."
                </li>
                <li>
                  <strong>Empathetic and Supportive:</strong> "The chatbot
                  should sound understanding and caring, especially since it
                  will handle customer complaints and issues."
                </li>
                <li>
                  <strong>Enthusiastic and Energetic:</strong> "We want a
                  chatbot that sounds excited about our products and services,
                  using exclamation points and positive adjectives."
                </li>
                <li>
                  <strong>Concise and Direct:</strong> "The chatbot should
                  provide straight-to-the-point answers without any fluff."
                </li>
                <li>
                  <strong>Humorous and Playful:</strong> "We'd like our chatbot
                  to have a sense of humor, maybe even cracking jokes or using
                  puns when appropriate."
                </li>
                <li>
                  <strong>Educational and Informative:</strong> "The chatbot
                  should sound knowledgeable, providing detailed answers and
                  guiding users with additional information."
                </li>
                <li>
                  <strong>Youthful and Trendy:</strong> "We're targeting a
                  younger audience, so we want the chatbot to use current slang
                  and maybe even emojis."
                </li>
                <li>
                  <strong>Calm and Reassuring:</strong> "Given the nature of our
                  services, it's important that the chatbot provides answers in
                  a calm and soothing manner."
                </li>
                <li>
                  <strong>Neutral and Objective:</strong> "We prefer a chatbot
                  that remains neutral, avoiding any kind of emotional
                  language."
                </li>
              </ul>
              <p>
                Remember, the tone of voice for the chatbot should align with
                the company's brand identity and the expectations of its target
                audience.
              </p>
            </span>
          </span>
        </label>
        <input
          type="text"
          className="my-onboarding-input"
          placeholder="Tone of Voice"
          name="toneOfVoice"
          value={formData.toneOfVoice}
          onChange={handleInputChange}
          tabIndex="6"
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
