import React, { useEffect, useRef } from "react";

const CustomerNameStep = ({ formData, handleChange, errors }) => {
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
        <label htmlFor="fname" className="vaonboarding-label">
          First Name
        </label>
        <input
          type="text"
          id="fname"
          name="fname"
          className="vaonboarding-input"
          placeholder="Enter your first name"
          value={formData.fname}
          onChange={handleChange}
          ref={(el) => (inputRefs.current[0] = el)}
        />
        {errors.fname && <span className="error-text">{errors.fname}</span>}
      </div>
      <div className="input-item">
        <label htmlFor="lname" className="vaonboarding-label">
          Last Name
        </label>
        <input
          type="text"
          id="lname"
          name="lname"
          className="vaonboarding-input"
          placeholder="Enter your last name"
          value={formData.lname}
          onChange={handleChange}
          ref={(el) => (inputRefs.current[1] = el)}
        />
        {errors.lname && <span className="error-text">{errors.lname}</span>}
      </div>
      <div className="input-item">
        <label htmlFor="email" className="vaonboarding-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="vaonboarding-input"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          ref={(el) => (inputRefs.current[2] = el)}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>
      <div className="input-item">
        <label htmlFor="phone" className="vaonboarding-label">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="vaonboarding-input"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          ref={(el) => (inputRefs.current[3] = el)}
        />
        {errors.phone && <span className="error-text">{errors.phone}</span>}
      </div>
    </div>
  );
};

export default CustomerNameStep;
