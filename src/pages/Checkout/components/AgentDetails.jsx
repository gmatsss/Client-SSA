import React from "react";

const AgentDetails = ({
  formData,
  handleInputChange,
  showTooltip,
  setShowTooltip,
}) => {
  return (
    <div className="row">
      {" "}
      <div className="col-md-6">
        {/* Number of Agents */}
        <div className="form__group_onboard field mb-3">
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
            </div>
          )}
        </div>

        {/* Service Industry */}
        <div className="form__group_onboard field mb-3">
          <select
            className="form__field_onboard"
            name="serviceIndustry"
            value={formData.serviceIndustry}
            onChange={handleInputChange}
            style={{
              backgroundColor: "#4c4d62",
              color: "white",
              borderColor: "white",
            }}
            tabIndex="8"
          >
            <option value="" disabled>
              Select Service Industry
            </option>
            <option value="Web Development & Marketing Agencies">
              Web Development & Marketing Agencies
            </option>
            <option value="E-commerce & Retail">E-commerce & Retail</option>
            <option value="Banking & Finance">Banking & Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Travel & Hospitality">Travel & Hospitality</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Customer Support">Customer Support</option>
            <option value="Education">Education</option>
            <option value="Entertainment">Entertainment</option>
            <option value="News and Media">News and Media</option>
            <option value="Other">Other </option>
          </select>
          <label htmlFor="serviceIndustry" className="form__label_onboard">
            Service Industry
          </label>
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
  );
};

export default AgentDetails;
