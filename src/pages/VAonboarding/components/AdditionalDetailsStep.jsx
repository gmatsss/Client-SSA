import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";

const AdditionalDetailsStep = ({ formData, handleChange, errors }) => {
  const inputRefs = useRef([]);
  const eventListeners = useRef(new Map());

  useEffect(() => {
    const inputRefsCopy = [...inputRefs.current];
    const eventListenersCopy = new Map(eventListeners.current);

    inputRefsCopy.forEach((input, index) => {
      if (input) {
        const updateBorderColor = (e) => {
          if (e.target.value) {
            e.target.style.borderLeftColor = "#00aeef"; // Blue
          } else {
            e.target.style.borderLeftColor = "#ff0077"; // Red
          }
        };

        updateBorderColor({ target: input }); // Initial check
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
  }, [formData]);

  return (
    <div className="input-group">
      <div className="input-item">
        <label htmlFor="additionalBehavior" className="vaonboarding-label">
          Additional Behavior (Optional)
          <FontAwesomeIcon
            icon={faInfoCircle}
            data-tooltip-id="additionalBehaviorTip"
            style={{ marginLeft: "8px" }}
          />
          <Tooltip
            id="additionalBehaviorTip"
            content="Enter any additional behaviors for the agent"
          />
        </label>
        <input
          type="text"
          id="additionalBehavior"
          name="additionalBehavior"
          className="vaonboarding-input"
          placeholder="Enter additional behavior"
          value={formData.additionalBehavior}
          onChange={handleChange}
          ref={(el) => (inputRefs.current[0] = el)}
        />
        {errors.additionalBehavior && (
          <span className="error-text">{errors.additionalBehavior}</span>
        )}
      </div>

      <div className="input-item">
        <label htmlFor="languageProficiency" className="vaonboarding-label">
          Language Proficiency (Optional)
          <FontAwesomeIcon
            icon={faInfoCircle}
            data-tooltip-id="languageProficiencyTip"
            style={{ marginLeft: "8px" }}
          />
          <Tooltip
            id="languageProficiencyTip"
            content="Enter the languages the agent can handle"
          />
        </label>
        <input
          type="text"
          id="languageProficiency"
          name="languageProficiency"
          className="vaonboarding-input"
          placeholder="Enter languages"
          value={formData.languageProficiency}
          onChange={handleChange}
          ref={(el) => (inputRefs.current[2] = el)}
        />
        {errors.languageProficiency && (
          <span className="error-text">{errors.languageProficiency}</span>
        )}
      </div>
    </div>
  );
};

export default AdditionalDetailsStep;
