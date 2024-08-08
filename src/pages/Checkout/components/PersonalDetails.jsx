import React from "react";

const PersonalDetails = ({ formData, handleInputChange }) => {
  return (
    <div className="my-onboarding-container">
      <div className="my-input-group">
        <div className="my-input-item">
          <label className="my-onboarding-label" htmlFor="firstname">
            First Name
          </label>
          <input
            type="text"
            className="my-onboarding-input"
            placeholder="First Name"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            tabIndex="1"
          />
        </div>
        <div className="my-input-item">
          <label className="my-onboarding-label" htmlFor="lastname">
            Last Name
          </label>
          <input
            type="text"
            className="my-onboarding-input"
            placeholder="Last Name"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            tabIndex="2"
          />
        </div>
      </div>

      <div className="my-input-group">
        <div className="my-input-item">
          <label className="my-onboarding-label" htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            className="my-onboarding-input"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            tabIndex="3"
          />
        </div>
        <div className="my-input-item">
          <label className="my-onboarding-label" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            className="my-onboarding-input"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            tabIndex="4"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
