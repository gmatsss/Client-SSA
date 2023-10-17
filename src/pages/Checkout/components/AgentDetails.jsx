import React from "react";
import industryData from "../../../industry.json";
import Select from "react-select";

const AgentDetails = ({
  formData,
  handleInputChange,
  showTooltip,
  setShowTooltip,
}) => {
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
      backgroundColor: "#4c4d62",
      borderColor: "#9b9b9b",
      borderWidth: "0 0 2px 0",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#9b9b9b",
      },
    }),
    input: (provided) => ({
      ...provided,
      color: "#fff",
      fontSize: "17px",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "transparent",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
      fontSize: "17px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "rgb(76, 77, 98)" : "rgb(76, 77, 98)", // Set the default background to black
      color: "#fff", // Set the text color to white
      fontSize: "17px",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#9b9b9b",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          {/* Number of Agents */}
          <div className="form__group_onboard field mb-3 ">
            <input
              type="number"
              className="form__field_onboard"
              placeholder="Number of Agents"
              name="numberOfAgents"
              value={formData.numberOfAgents}
              onChange={handleInputChange}
              tabIndex="5"
            />
            <label htmlFor="numberOfAgents" className="form__label_onboard">
              Number of Agents (Bots)
            </label>
          </div>
          {/* Agent Type */}
          <div className="form__group_onboard field mb-4">
            <select
              className="form__field_onboard"
              name="agentType"
              value={formData.agentType}
              onChange={handleInputChange}
              style={{
                backgroundColor: "#4c4d62", // Assuming this is the desired background color
                color: "white", // Text color
                borderColor: "white", // Border color
              }}
              tabIndex="7"
            >
              <option value="" disabled>
                Select Agent Type
              </option>
              <option value="CustomerService">Customer Service</option>
              <option value="SalesAgents">Sales</option>
            </select>
            <label htmlFor="agentType" className="form__label_onboard">
              Agent Type
            </label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form__group_onboard field mb-3 position-relative">
            <input
              type="text"
              className="form__field_onboard"
              placeholder="Tone of Voice"
              name="toneOfVoice"
              value={formData.toneOfVoice}
              onChange={handleInputChange}
              tabIndex="6"
              onFocus={() => setShowTooltip(true)} // Show tooltip on focus
              onBlur={() => setShowTooltip(false)} // Hide tooltip on blur
            />
            <label htmlFor="toneOfVoice" className="form__label_onboard">
              Tone of Voice
            </label>
            {showTooltip && (
              <div className="tooltip">
                <strong>Examples of Tone of Voice:</strong>
                <ul>
                  <li>
                    <strong>Professional and Formal:</strong> "We want the
                    chatbot to sound like a corporate representative, using
                    formal language and avoiding slang or colloquialisms."
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
                    <strong>Humorous and Playful:</strong> "We'd like our
                    chatbot to have a sense of humor, maybe even cracking jokes
                    or using puns when appropriate."
                  </li>
                  <li>
                    <strong>Educational and Informative:</strong> "The chatbot
                    should sound knowledgeable, providing detailed answers and
                    guiding users with additional information."
                  </li>
                  <li>
                    <strong>Youthful and Trendy:</strong> "We're targeting a
                    younger audience, so we want the chatbot to use current
                    slang and maybe even emojis."
                  </li>
                  <li>
                    <strong>Calm and Reassuring:</strong> "Given the nature of
                    our services, it's important that the chatbot provides
                    answers in a calm and soothing manner."
                  </li>
                  <li>
                    <strong>Neutral and Objective:</strong> "We prefer a chatbot
                    that remains neutral, avoiding any kind of emotional
                    language."
                  </li>
                </ul>
                <p>
                  Remember, the tone of voice for the chatbot should align with
                  the company's brand identity and the expectations of its
                  target audience.
                </p>
              </div>
            )}
          </div>

          {/* Service Industry */}
          <div className="form__group_onboard field mb-3">
            <label htmlFor="serviceIndustry" className="form__label_onboard">
              Service Industry
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
            {formData.serviceIndustry === "Other" && (
              <input
                type="text"
                className="form__field_onboard mt-2 form__field_onboard_other"
                placeholder="Specify Industry"
                name="otherServiceIndustry"
                value={formData.otherServiceIndustry}
                onChange={handleInputChange}
                style={{
                  backgroundColor: "#4c4d62",
                  color: "white",
                  borderColor: "white",
                }}
                tabIndex="9"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetails;
