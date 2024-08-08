import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";

const fields = [
  {
    id: "customKnowledge",
    name: "customKnowledge",
    label: "Agent Knowledge",
    type: "textarea",
    tooltip: "Enter the knowledge base of the agent",
  },
  {
    id: "limitations",
    name: "limitations",
    label: "Limitations",
    type: "textarea",
    tooltip: "Enter any limitations of the agent",
  },
  {
    id: "agentPrompt",
    name: "agentPrompt",
    label: "Agent Prompt",
    type: "textarea",
    tooltip:
      "Provide the prompt for the agent, Give instructions to your AI about how it should behave and interact with others in conversation.",
  },
  {
    id: "agentGreeting",
    name: "agentGreeting",
    label: "Agent Greeting",
    type: "textarea",
    tooltip:
      "Provide the greeting message for the agent Your agent will say this message to start every conversation.",
  },
  {
    id: "agentBehavior",
    name: "agentBehavior",
    label: "Agent Behavior",
    type: "select",
    options: [
      { value: "", label: "Select behavior" },
      { value: "Professional Use Case", label: "Professional Use Case" },
      { value: "Character Use Case", label: "Character Use Case" },
      { value: "Super Chatty", label: "Super Chatty" },
    ],
    tooltip: "Describe the expected behavior of the agent",
  },
  {
    id: "voiceoftheagent",
    name: "voiceoftheagent",
    label: "Voice of the Agent",
    type: "select",
    options: [
      { value: "", label: "Select voice" },
      { value: "Aaliyah", label: "Aaliyah" },
      { value: "Ada", label: "Ada" },
      { value: "Adelaide", label: "Adelaide" },
      { value: "Alessandro", label: "Alessandro" },
      { value: "Amelia", label: "Amelia" },
      { value: "Archie", label: "Archie" },
      { value: "Baptiste", label: "Baptiste" },
      { value: "Calvin", label: "Calvin" },
    ],
    tooltip: "Describe the voice characteristics of the agent",
  },
];

const VoiceAgentDetailsStep = ({
  currentDetailVAagent,
  handleAgentDetailChange,
  errors,
  addVoiceAgentDetail,
  validateCurrentDetail,
  setErrors,
  voiceAgentDetails,
}) => {
  const inputRefs = useRef([]);
  const eventListeners = useRef(new Map());

  useEffect(() => {
    const inputRefsCopy = [...inputRefs.current];
    const eventListenersCopy = new Map(eventListeners.current);

    inputRefsCopy.forEach((input, index) => {
      if (input) {
        const updateBorderColor = (e) => {
          if (e.target.value) {
            e.target.style.borderLeftColor = "#00aeef";
          } else {
            e.target.style.borderLeftColor = "#ff0077";
          }
        };

        updateBorderColor({ target: input });
        input.addEventListener("input", updateBorderColor);
        eventListenersCopy.set(index, updateBorderColor);
      }
    });

    return () => {
      inputRefsCopy.forEach((input, index) => {
        if (input) {
          const listener = eventListenersCopy.get(index);
          if (listener) {
            input.removeEventListener("input", listener);
          }
        }
      });
    };
  }, [currentDetailVAagent]);

  const handleAddVoiceAgentDetail = () => {
    const currentErrors = validateCurrentDetail(currentDetailVAagent);
    if (Object.keys(currentErrors).length === 0) {
      addVoiceAgentDetail(currentDetailVAagent);
      handleReset();
    } else {
      setErrors(currentErrors);
    }
  };

  const handleReset = () => {
    fields.forEach((field) => {
      handleAgentDetailChange({ target: { name: field.name, value: "" } });
    });
  };

  return (
    <div>
      <div className="input-group single-column">
        {fields.map((field, index) => (
          <div key={field.id} className="input-item">
            <label htmlFor={field.id} className="vaonboarding-label">
              {field.label}
              <FontAwesomeIcon
                icon={faInfoCircle}
                data-tooltip-id={`${field.id}Tip`}
                style={{ marginLeft: "8px" }}
              />
              <Tooltip id={`${field.id}Tip`} content={field.tooltip} />
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.id}
                name={field.name}
                className="vaonboarding-textarea"
                placeholder={`Enter ${field.label.toLowerCase()}`}
                value={currentDetailVAagent[field.name]}
                onChange={handleAgentDetailChange}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ) : (
              <select
                id={field.id}
                name={field.name}
                className="vaonboarding-select"
                value={currentDetailVAagent[field.name]}
                onChange={handleAgentDetailChange}
                ref={(el) => (inputRefs.current[index] = el)}
              >
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
            {errors[field.name] && (
              <span className="error-text">{errors[field.name]}</span>
            )}
          </div>
        ))}
      </div>
      <div className="agent-count">
        Number of agents added: {voiceAgentDetails.length + 1}
      </div>
      <button
        type="button"
        className="vaonboarding-add-Agent"
        onClick={handleAddVoiceAgentDetail}
      >
        Add Voice Agent
      </button>
    </div>
  );
};

export default VoiceAgentDetailsStep;
