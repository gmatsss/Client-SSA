import React, { useState } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const AdditionalInfo = ({
  formData,
  handleInputChange,
  uploadedFiles,
  setUploadedFiles,
  setFormData,
}) => {
  const [tooltip, setTooltip] = useState({});

  const handleMouseEnter = (tooltipId) => {
    setTooltip((prev) => ({ ...prev, [tooltipId]: true }));
  };

  const handleMouseLeave = (tooltipId) => {
    setTooltip((prev) => ({ ...prev, [tooltipId]: false }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const totalFiles = uploadedFiles.length + files.length;

    if (totalFiles > 3) {
      toast.warning("You can only upload up to 3 files.");
      return;
    }

    const nonPdfFiles = files.filter((file) => file.type !== "application/pdf");
    if (nonPdfFiles.length > 0) {
      toast.warning("Only PDF files are allowed.");
      return;
    }

    const totalSize = files.reduce(
      (acc, file) => acc + file.size,
      uploadedFiles.reduce((acc, file) => acc + file.size, 0)
    );

    if (totalSize > 25 * 1024 * 1024) {
      toast.warning("The total size of all files must be under 25MB.");
      return;
    }

    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleFileDelete = (fileToDelete) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((file) => file !== fileToDelete)
    );
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        botChannel: [...prevData.botChannel, value],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        botChannel: prevData.botChannel.filter((channel) => channel !== value),
      }));
    }
  };

  const channels = [
    "Twilio",
    "FB Messenger",
    "Telegram",
    "WhatsApp",
    "Web Chat",
    "Custom API",
  ];

  return (
    <div className="additional-info-container">
      <div className="my-input-item">
        <label className="my-onboarding-label" htmlFor="additionalGuidelines">
          Provide Restrictions or Guidelines
          <span className="tooltip-container">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="tooltip-icon"
              onMouseEnter={() => handleMouseEnter("additionalGuidelines")}
              onMouseLeave={() => handleMouseLeave("additionalGuidelines")}
            />
            {tooltip.additionalGuidelines && (
              <span className="tooltip">
                Provide any specific restrictions or guidelines for the bot.
              </span>
            )}
          </span>
        </label>
        <textarea
          className="my-onboarding-input my-onboarding-textarea"
          placeholder="Additional Restrictions or Guidelines"
          name="additionalGuidelines"
          value={formData.additionalGuidelines}
          onChange={handleInputChange}
          rows={2}
          tabIndex="9"
        ></textarea>
      </div>

      <div className="my-input-item">
        <label className="my-onboarding-label">
          Bot Channels
          <span className="tooltip-container">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="tooltip-icon"
              onMouseEnter={() => handleMouseEnter("botChannels")}
              onMouseLeave={() => handleMouseLeave("botChannels")}
            />
            {tooltip.botChannels && (
              <span className="tooltip">
                Choose where you'd like to add the bot. Options are:{" "}
                {channels.join(", ")}
              </span>
            )}
          </span>
        </label>
        <div className="bot-channels">
          {channels.map((channel, index) => (
            <label key={index} className="bot-channel">
              <input
                type="checkbox"
                name="botChannel"
                value={channel}
                id={channel}
                onChange={handleCheckboxChange}
              />
              <span>{channel}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="my-input-item">
        <label className="my-onboarding-label">
          Upload up to 3 Company-Related PDFs (Max 25MB each)
          <span className="tooltip-container">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="tooltip-icon"
              onMouseEnter={() => handleMouseEnter("uploadedFiles")}
              onMouseLeave={() => handleMouseLeave("uploadedFiles")}
            />
            {tooltip.uploadedFiles && (
              <span className="tooltip">
                Upload PDF files related to your company. The total size of all
                files must be under 25MB.
              </span>
            )}
          </span>
          <input
            type="file"
            name="uploadedFiles"
            onChange={handleFileChange}
            multiple
            id="uploadedFiles"
            accept=".pdf"
            style={{ display: "none" }}
          />
          <span className="file-upload">Choose files...</span>
        </label>
        <div>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>
                File {index + 1}: {file.name}
                <span
                  className="file-delete"
                  onClick={() => handleFileDelete(file)}
                >
                  X
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
