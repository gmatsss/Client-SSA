import React from "react";

const PersonalDetails = ({ formData, handleInputChange }) => {
  return (
    <div className="row">
      {/* First Name and Last Name */}
      <div className="col-md-6">
        <div className="form__group_onboard field mb-3">
          <input
            type="text"
            className="form__field_onboard"
            placeholder="First Name"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            tabIndex="1"
          />
          <label htmlFor="firstname" className="form__label_onboard">
            First name
          </label>
        </div>
        <div className="form__group_onboard field mb-3">
          <input
            type="tel"
            className="form__field_onboard"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            tabIndex="3"
          />
          <label htmlFor="phone" className="form__label_onboard">
            Phone
          </label>
        </div>
      </div>

      {/* Phone and Email */}
      <div className="col-md-6">
        <div className="form__group_onboard field mb-3">
          <input
            type="text"
            className="form__field_onboard"
            placeholder="Last Name"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            tabIndex="2"
          />
          <label htmlFor="lastname" className="form__label_onboard">
            Last name
          </label>
        </div>

        <div className="form__group_onboard field mb-3">
          <input
            type="text"
            className="form__field_onboard"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            tabIndex="4"
          />
          <label htmlFor="email" className="form__label_onboard">
            Email
          </label>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
