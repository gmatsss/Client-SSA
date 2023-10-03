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
          <strong>Specify the Number of Agents:</strong> Clearly indicate the
          number of agents you need. This helps in the efficient allocation of
          resources tailored to your service requirements.
        </li>
        <li>
          <strong>Choose the Agent Type:</strong> Opt between Customer Service
          or Sales Agents. Your selection aids in customizing the training and
          orientation for the agents dedicated to your account.
        </li>
        <li>
          <strong>Select Your Service Industry:</strong> Choose from a diverse
          list of industries. This step ensures that our services are
          contextually optimized for your business field.
        </li>
      </ul>

      <ul className="list-unstyled text-white fs-md-1">
        <li>
          <strong>Upload Company Documents:</strong> Enhance our bots'
          understanding of your business by uploading relevant company PDFs.
        </li>
        <li>
          <strong>State Desired Tone of Voice:</strong> Specify the tone (e.g.,
          enthusiastic, professional) for your agents to ensure effective
          communication.
        </li>
        <li>
          <strong>Provide Restrictions or Guidelines:</strong> Offer any
          specific instructions for the agents to follow while representing your
          company.
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