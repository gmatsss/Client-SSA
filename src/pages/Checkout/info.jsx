import React from "react";

const Info = () => {
  return (
    <div className="px-md-5">
      <h2 className="text-white fs-md-2">Onboarding Guide</h2>
      <p className="text-white fs-md-1">
        Your journey to setting up your super smart agents begins here. This
        guide is designed to ensure a seamless and personalized onboarding
        experience for you. Your active participation in providing essential
        information is crucial as it enables us to refine our services to align
        with your unique needs.
      </p>

      <ul className="list-unstyled text-white fs-md-1">
        <li>
          <span className="highlighted-text">
            Specify the Number of Agents:
          </span>
          Clearly indicate the number of agents you need. This helps in the
          efficient allocation of resources tailored to your service
          requirements.
        </li>
        <li>
          <span className="highlighted-text">Choose the Agent Type:</span> Opt
          between Customer Service or Sales Agents. Your selection aids in
          customizing the training and orientation for the agents dedicated to
          your account.
        </li>
        <li>
          <span className="highlighted-text">
            Select Your Service Industry:
          </span>
          Choose from a diverse list of industries. This step ensures that our
          services are contextually optimized for your business field.
        </li>
      </ul>

      <ul className="list-unstyled text-white fs-md-1">
        <li>
          <span className="highlighted-text">Upload Company Documents:</span>
          Enhance our bots' understanding of your business by uploading relevant
          company PDFs.
        </li>
        <li>
          <span className="highlighted-text">State Desired Tone of Voice:</span>
          Specify the tone (e.g., enthusiastic, professional) for your agents to
          ensure effective communication.
        </li>
        <li>
          <span className="highlighted-text">
            Provide Restrictions or Guidelines:
          </span>
          Offer any specific instructions for the agents to follow while
          representing your company.
        </li>
      </ul>

      <p className="text-white fs-md-1">
        Thank you for choosing us. Your cooperation is invaluable, and we
        eagerly look forward to serving you with excellence.
      </p>
    </div>
  );
};

export default Info;
