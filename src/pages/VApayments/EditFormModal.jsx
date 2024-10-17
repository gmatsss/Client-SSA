import React, { useState } from "react";
import "./EditFormModal.css";

const EditFormModal = ({ formData, setFormData, onClose }) => {
  const [agents, setAgents] = useState(formData.voiceAgentDetails);
  const [formValues, setFormValues] = useState({
    fname: formData.fname,
    lname: formData.lname,
    email: formData.email,
    phone: formData.phone,
    additionalBehavior: formData.additionalBehavior || "",
    languageProficiency: formData.languageProficiency || "",
  });

  const handleAddAgent = () => {
    setAgents([
      ...agents,
      {
        agentGreeting: "",
        agentPrompt: "",
        customKnowledge: "",
        limitations: "",
        voiceoftheagent: "",
        agentBehavior: "",
      },
    ]);
  };

  const handleRemoveAgent = (index) => {
    if (agents.length > 1) {
      setAgents(agents.filter((_, i) => i !== index));
    } else {
      alert("At least one agent is required.");
    }
  };

  const handleAgentInputChange = (index, field, value) => {
    const newAgents = [...agents];
    newAgents[index][field] = value;
    setAgents(newAgents);
  };

  const handleFormInputChange = (field, value) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agents.length < 1) {
      alert("You must have at least one agent.");
      return;
    }
    const updatedFormData = {
      ...formValues,
      voiceAgentDetails: agents,
    };
    setFormData(updatedFormData); // Update the formData in VApayments
    console.log("Form submitted:", updatedFormData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button-form" onClick={onClose}>
          &times;
        </button>
        <div className="modal-header">
          <h2>Onboarding Data Summary</h2>
        </div>
        <form className="form-submitted" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                value={formValues.fname}
                onChange={(e) => handleFormInputChange("fname", e.target.value)}
                className="vaonboarding-input"
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                value={formValues.lname}
                onChange={(e) => handleFormInputChange("lname", e.target.value)}
                className="vaonboarding-input"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={formValues.email}
                onChange={(e) => handleFormInputChange("email", e.target.value)}
                className="vaonboarding-input"
              />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="tel"
                value={formValues.phone}
                onChange={(e) => handleFormInputChange("phone", e.target.value)}
                className="vaonboarding-input"
              />
            </div>
          </div>

          <div className="form-row">
            <h3 className="section-title">
              Below fields apply to all Voice agents
            </h3>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Additional Behavior:</label>
              <textarea
                value={formValues.additionalBehavior}
                onChange={(e) =>
                  handleFormInputChange("additionalBehavior", e.target.value)
                }
                className="vaonboarding-input"
              ></textarea>
            </div>
            <div className="form-group">
              <label>Language Proficiency:</label>
              <textarea
                value={formValues.languageProficiency}
                onChange={(e) =>
                  handleFormInputChange("languageProficiency", e.target.value)
                }
                className="vaonboarding-input"
              ></textarea>
            </div>
          </div>

          {agents.map((detail, index) => (
            <div key={index} className="agent-details">
              <div className="form-row">
                <div className="form-group">
                  <label>Agent Greeting:</label>
                  <textarea
                    value={detail.agentGreeting}
                    onChange={(e) =>
                      handleAgentInputChange(
                        index,
                        "agentGreeting",
                        e.target.value
                      )
                    }
                    className="vaonboarding-input"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Agent Prompt:</label>
                  <textarea
                    value={detail.agentPrompt}
                    onChange={(e) =>
                      handleAgentInputChange(
                        index,
                        "agentPrompt",
                        e.target.value
                      )
                    }
                    className="vaonboarding-input"
                  ></textarea>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Custom Knowledge:</label>
                  <textarea
                    value={detail.customKnowledge}
                    onChange={(e) =>
                      handleAgentInputChange(
                        index,
                        "customKnowledge",
                        e.target.value
                      )
                    }
                    className="vaonboarding-input"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Limitations:</label>
                  <textarea
                    value={detail.limitations}
                    onChange={(e) =>
                      handleAgentInputChange(
                        index,
                        "limitations",
                        e.target.value
                      )
                    }
                    className="vaonboarding-input"
                  ></textarea>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Voice of the Agent:</label>
                  <select
                    value={detail.voiceoftheagent}
                    onChange={(e) =>
                      handleAgentInputChange(
                        index,
                        "voiceoftheagent",
                        e.target.value
                      )
                    }
                    className="vaonboarding-input"
                  >
                    <option value="">Select voice</option>
                    <option value="Aaliyah">Aaliyah</option>
                    <option value="Ada">Ada</option>
                    <option value="Adelaide">Adelaide</option>
                    <option value="Alessandro">Alessandro</option>
                    <option value="Amelia">Amelia</option>
                    <option value="Archie">Archie</option>
                    <option value="Baptiste">Baptiste</option>
                    <option value="Calvin">Calvin</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Agent Behavior:</label>
                  <select
                    value={detail.agentBehavior}
                    onChange={(e) =>
                      handleAgentInputChange(
                        index,
                        "agentBehavior",
                        e.target.value
                      )
                    }
                    className="vaonboarding-input"
                  >
                    <option value="">Select behavior</option>
                    <option value="Professional Use Case">
                      Professional Use Case
                    </option>
                    <option value="Character Use Case">
                      Character Use Case
                    </option>
                    <option value="Super Chatty">Super Chatty</option>
                  </select>
                </div>
              </div>
              <button
                type="button"
                className="remove-agent-button"
                onClick={() => handleRemoveAgent(index)}
              >
                Remove Agent
              </button>
            </div>
          ))}

          <div className="button-row">
            <button
              type="button"
              className="add-agent-button"
              onClick={handleAddAgent}
            >
              Add Agent
            </button>
          </div>

          <div className="button-row">
            <button type="submit" className="save-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFormModal;
