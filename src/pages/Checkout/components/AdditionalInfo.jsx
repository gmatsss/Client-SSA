import React, { useState } from "react";
import { toast } from "react-toastify";

const AdditionalInfo = ({
  formData,
  handleInputChange,
  uploadedFiles,
  setUploadedFiles,
  setFormData,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleTooltipToggle = () => {
    setShowTooltip(!showTooltip);
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

    const validFiles = files.filter((file) => file.size <= 25 * 1024 * 1024);

    if (validFiles.length !== files.length) {
      toast.warning("Please ensure each file is under 25MB.");
      return;
    }

    setUploadedFiles((prevFiles) => [
      ...prevFiles,
      ...validFiles.map((file) => file.name),
    ]);
  };

  const handleFileDelete = (fileName) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((file) => file !== fileName)
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
    <>
      <div className="form__group_onboard field ">
        <textarea
          className="form__field_onboard non-resizable-textarea"
          placeholder="Additional Restrictions or Guidelines"
          name="additionalGuidelines"
          value={formData.additionalGuidelines}
          onChange={handleInputChange}
          rows={2}
          tabIndex="9"
        ></textarea>
        <label htmlFor="additionalGuidelines" className="form__label_onboard">
          Provide Restrictions or Guidelines
        </label>
        <style jsx>{`
          .non-resizable-textarea {
            resize: none;
          }
        `}</style>
      </div>

      <div className="form__group_onboard field mb-5">
        <label
          onMouseEnter={handleTooltipToggle}
          onMouseLeave={handleTooltipToggle}
          style={{ position: "relative" }}
        >
          Bot Channels: ?
          {showTooltip && (
            <span className="tooltipchannel">
              Choose where you'd like to add the bot. Options are:{" "}
              {channels.join(", ")}
            </span>
          )}
        </label>
        <div className="channel-container">
          {channels.map((channel, index) => (
            <label key={index} className="channel-item">
              <input
                type="checkbox"
                name="botChannel"
                value={channel}
                id={channel}
                onChange={handleCheckboxChange}
                className="channel-checkbox"
              />
              <span className="channel-label">{channel}</span>
            </label>
          ))}
        </div>
      </div>

      <label className="custom-file-upload">
        Upload up to 3 Company-Related PDFs (Max 25MB each):
        <input
          type="file"
          name="uploadedFiles"
          onChange={handleFileChange}
          multiple
          id="uploadedFiles"
          accept=".pdf" // This attribute ensures only PDF files can be selected
          style={{ display: "none" }}
        />
        <span id="file-name">Choose files...</span>
      </label>
      <div>
        <ul>
          {uploadedFiles.map((fileName, index) => (
            <li key={index}>
              File {index + 1}: {fileName}
              <span
                style={{ cursor: "pointer", marginLeft: "10px", color: "red" }}
                onClick={() => handleFileDelete(fileName)}
              >
                X
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AdditionalInfo;
