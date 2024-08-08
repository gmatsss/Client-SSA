import React from "react";

const Info = ({ currentStep, currentBotCount }) => {
  let content;
  console.log(currentBotCount);
  switch (currentStep) {
    case 1:
      content = (
        <ul className="list-unstyled text-white fs-md-1 mt-3">
          <li>
            <span className="highlighted-text">First Name:</span> Provide your
            given name, as it appears on official documents. This ensures we
            address you correctly in all communications.
          </li>
          <li>
            <span className="highlighted-text">Last Name:</span> Input your
            family or surname, ensuring it matches with official records. This
            is crucial for identification purposes.
          </li>
          <li>
            <span className="highlighted-text">Email:</span> Enter a valid email
            address that you frequently check. All system notifications,
            updates, and essential communications will be sent to this address.
          </li>
          <li>
            <span className="highlighted-text">Phone:</span> Provide a
            functional phone number, preferably with country and area codes.
            This may be used for direct communications or urgent updates.
          </li>
        </ul>
      );
      break;
    case 2:
      content = (
        <ul className="list-unstyled text-white fs-md-1 mt-3">
          <li>
            <span className="highlighted-text">Choose the Agent Type:</span> Opt
            between Customer Service or Sales Agents. Your selection aids in
            customizing the training and orientation for the agents dedicated to
            your account.
          </li>
          <li>
            <span className="highlighted-text">
              Select Your Service Industry:
            </span>{" "}
            Choose from a diverse list of industries. This step ensures that our
            services are contextually optimized for your business field.
          </li>
          <li>
            <span className="highlighted-text">Number of Agents (Bot):</span>{" "}
            The "Add More Bot" button you see is for you to determine the number
            of bots you want. Each click will request an additional bot for your
            services. As of now, you have {currentBotCount} bot set up.
          </li>
        </ul>
      );
      break;
    case 3:
      content = (
        <ul className="list-unstyled text-white fs-md-1 mt-3">
          <li>
            <span className="highlighted-text">Select Your Channels:</span>{" "}
            Please specify where you'd like your bot to be published: Twilio, FB
            Messenger, Telegram, WhatsApp, Web Chat, or Custom API. Note:
            Choosing each channel will incur a cost of $19 per channel.
          </li>
          <li>
            <span className="highlighted-text">
              Provide Restrictions or Guidelines:
            </span>{" "}
            Offer any specific instructions for the agents to follow while
            representing your company.
          </li>
          <li>
            <span className="highlighted-text">Upload Company Documents:</span>{" "}
            Enhance our bots' understanding of your business by uploading
            relevant company PDFs. You can upload up to 3 documents now for us
            to build your initial bot but you'll be able to upload as many
            documents you'd like once we provide you access to our builder.
          </li>
        </ul>
      );
      break;
    default:
      content = null; // This ensures we don't show anything if an unexpected step number is received.
  }

  return (
    <div className="px-md-5">
      <h1 className="text-white fs-md-2">Onboarding Guide</h1>
      {content}
    </div>
  );
};

export default Info;
