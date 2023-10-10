import React, { useState } from "react";
import "./OnBoard.css";
import { toast } from "react-toastify";

const Onboarding = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    numberOfAgents: "",
    agentType: "",
    serviceIndustry: "",
    uploadedFiles: [],
    toneOfVoice: "",
    additionalGuidelines: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      uploadedFiles: e.target.files,
    });

    const fileNameLabel = document.getElementById("file-name");
    if (e.target.files.length > 1) {
      fileNameLabel.textContent = `${e.target.files.length} files selected`;
    } else if (e.target.files.length === 1) {
      fileNameLabel.textContent = e.target.files[0].name;
    } else {
      fileNameLabel.textContent = "Choose files...";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const Fields = [
      "firstname",
      "lastname",
      "email",
      "phone",
      "additionalGuidelines",
      "numberOfAgents",
      "agentType",
      "serviceIndustry",
      "uploadedFiles",
      "toneOfVoice",
      "additionalGuidelines",
    ];
    let isValid = true;

    Fields.forEach((field) => {
      if (!formData[field]) {
        isValid = false;
        toast.error(`Please fill out the ${field} field.`);
      }
    });

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (formData.email && !emailPattern.test(formData.email)) {
      isValid = false;
      toast.error("Please enter a valid email address.");
    }

    // Phone validation (only numbers)
    const phonePattern = /^[0-9]+$/;
    if (formData.phone && !phonePattern.test(formData.phone)) {
      isValid = false;
      toast.error("Phone number can contain numbers only.");
    }

    if (!isValid) return;

    setLoading(true);
    // Check the number of agents
    const numAgents = parseInt(formData.numberOfAgents, 10);
    switch (numAgents) {
      case 1:
        console.log("Redirecting to link for 1 agent...");
        // window.location.href = "https://link-for-1-agent.com";
        return;
      case 2:
        console.log("Redirecting to link for 2 agents...");
        // window.location.href = "https://link-for-2-agents.com";
        return;
      case 3:
        console.log("Redirecting to link for 3 agents...");
        // window.location.href = "https://link-for-3-agents.com";
        return;
      default:
        if (numAgents >= 4) {
          console.log("Redirecting to link for 4 or more agents...");
          // window.location.href = "https://link-for-4-or-more-agents.com";
          return;
        }
    }
  };

  return (
    <div
      className="onBoard rounded container-fluid"
      style={{ backgroundColor: "#4c4d62" }}
    >
      <h1 className="fs-1" style={{ color: "rgb(39, 179, 223)" }}>
        Onboarding Questions
      </h1>

      <form onSubmit={handleSubmit} className="p-4">
        <div className="row g-3">
          {/* Right col*/}
          <div className="col-xl-6 col-12">
            {/* First Name */}
            <div className="form__group_onboard field mb-3">
              <input
                type="text"
                className="form__field_onboard"
                placeholder="First Name"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
              />
              <label htmlFor="firstname" className="form__label_onboard">
                First name
              </label>
            </div>
            {/* Phone */}
            <div className="form__group_onboard field mb-3">
              <input
                type="tel"
                className="form__field_onboard"
                placeholder="Last Name"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <label htmlFor="phone" className="form__label_onboard">
                Phone
              </label>
            </div>
            {/* Number of Agents */}
            <div className="form__group_onboard field mb-3">
              <input
                type="number"
                className="form__field_onboard"
                placeholder="Number of Agents"
                name="numberOfAgents"
                value={formData.numberOfAgents}
                onChange={handleInputChange}
              />
              <label htmlFor="numberOfAgents" className="form__label_onboard">
                Number of Agents
              </label>
            </div>
            {/* Tone of Voice */}
            <div className="form__group_onboard field mb-3">
              <input
                type="text"
                className="form__field_onboard"
                placeholder="Tone of Voice"
                name="toneOfVoice"
                value={formData.toneOfVoice}
                onChange={handleInputChange}
              />
              <label htmlFor="toneOfVoice" className="form__label_onboard">
                Tone of Voice
              </label>
            </div>
            <div className="form__group_onboard field mb-3">
              <textarea
                className="form__field_onboard"
                placeholder="Additional Restrictions or Guidelines"
                name="additionalGuidelines"
                value={formData.additionalGuidelines}
                onChange={handleInputChange}
                rows={2}
                style={{
                  width: "100%",
                  borderColor: "white",
                  color: "white",
                  borderRadius: "5px",
                }}
              ></textarea>
              <label
                htmlFor="additionalGuidelines"
                className="form__label_onboard"
              >
                Additional Information
              </label>
            </div>
          </div>

          {/* Left col */}
          <div className="col-xl-6 col-12">
            {/* Last Name */}
            <div className="form__group_onboard field mb-3">
              <input
                type="text"
                className="form__field_onboard"
                placeholder="Last Name"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
              />
              <label htmlFor="lastname" className="form__label_onboard">
                Last name
              </label>
            </div>
            {/* Email */}
            <div className="form__group_onboard field mb-3">
              <input
                type="text"
                className="form__field_onboard"
                placeholder="Last Name"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <label htmlFor="email" className="form__label_onboard">
                Email
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
              >
                <option value="" disabled>
                  Select Agent Type
                </option>
                <option value="CustomerService">Customer Service</option>
                <option value="SalesAgents">Sales Agents</option>
                {/* Add more options as needed */}
              </select>
              <label htmlFor="agentType" className="form__label_onboard">
                Agent Type
              </label>
            </div>
            {/* Service Industry */}
            <div className="form__group_onboard field mb-3">
              <select
                className="form__field_onboard"
                name="serviceIndustry"
                value={formData.serviceIndustry}
                onChange={handleInputChange}
                style={{
                  backgroundColor: "#4c4d62", // Assuming this is the desired background color
                  color: "white", // Text color
                  borderColor: "white", // Border color
                }}
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
                <option value="Travel & Hospitality">
                  Travel & Hospitality
                </option>
                <option value="Real Estate">Real Estate</option>
                <option value="Customer Support">Customer Support</option>
                <option value="Education">Education</option>
                <option value="Entertainment">Entertainment</option>
                <option value="News and Media">News and Media</option>
              </select>
              <label htmlFor="serviceIndustry" className="form__label_onboard">
                Service Industry
              </label>
            </div>
            <label className="custom-file-upload">
              Upload Company-Related PDFs:
              <input
                type="file"
                name="uploadedFiles"
                onChange={handleFileChange}
                multiple
                id="uploadedFiles"
                style={{ display: "none" }} // Hide the default input
              />
              <span id="file-name">Choose files...</span>
            </label>
          </div>
        </div>

        {/* Proceed to Checkout Button */}
        <div className="mt-5 btn-onboard-holder">
          <button type="submit" className="btn-onboard" disabled={loading}>
            {loading ? (
              <div className="lds-dual-ring-onboard"></div> // Show loading spinner if loading
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Onboarding;
