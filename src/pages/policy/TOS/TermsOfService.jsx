// TermsOfService.js
import React from "react";
import "./TermsOfService.css";
import Header from "../../Home/Header/Header";

const TermsOfService = () => {
  return (
    <div>
      <Header />
      <div className="tos-container">
        <h1 className="tos-title ">Terms of Service (TOS)</h1>

        <hr className="divider" />
        <section className="tos-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to www.supersmartagents.com, a website owned and operated by
            Murphy Web Services Inc. This website offers users AI-operated
            customer service and sales bots. By accessing and using our website,
            you agree to comply with and be bound by the following terms and
            conditions.
          </p>

          <h2>2. User Responsibilities</h2>
          <p>
            Users are responsible for providing accurate and current information
            when interacting with our services. Any misuse or misrepresentation
            can lead to suspension or termination of access to our website.
          </p>

          <h2>3. Usage Limitations</h2>
          <p>Users are prohibited from:</p>
          <ul>
            <li>Using the website for any illegal or unauthorized purpose.</li>
            <li>
              Attempting to hack, disrupt, or compromise the security of our
              website.
            </li>
            <li>
              Reproducing, duplicating, or copying any part of our website
              without express written permission.
            </li>
            <li>
              Using our website to transmit viruses, malware, or other harmful
              code.
            </li>
          </ul>

          <h2>4. Data Privacy and Information Handling</h2>
          <p>
            We value your privacy and are committed to protecting your personal
            data. Any information collected by our website will be stored
            securely and will not be sold, rented, or shared with third parties
            without your explicit consent. For more detailed information, please
            refer to our Privacy Policy.
          </p>

          <h2>5. Disclaimer</h2>
          <p>
            While we strive to provide accurate and up-to-date information, we
            cannot guarantee that our website is free from errors or
            inaccuracies. Murphy Web Services Inc. will not be liable for any
            damages arising from the use of our website or any information
            contained therein.
          </p>

          <h2>6. Changes to Terms of Service</h2>
          <p>
            Murphy Web Services Inc. reserves the right to modify or replace
            these Terms of Service at any time. It is the user's responsibility
            to review these terms periodically for changes.
          </p>

          <h2>7. Contact Information</h2>
          <address>
            <div className="tos-address">
              Murphy Web Services Inc.
              <br />
              1219-3A Commerce Drive,
              <br />
              Mountain Home, Arkansas 72653
              <br />
              Phone: 888-985-6854
              <br />
              Email for General Inquiries:{" "}
              <a href="mailto:sales@supersmartagents.com">
                sales@supersmartagents.com
              </a>
              <br />
              Support Email:{" "}
              <a href="mailto:support@supersmartagents.com">
                support@supersmartagents.com
              </a>
              <br />
            </div>
          </address>
        </section>
        <hr className="tos-divider" />
        <footer className="tos-footer">
          <p>
            By accessing and using www.supersmartagents.com, you signify your
            acceptance of these Terms of Service. If you do not agree to these
            terms, please refrain from using our website.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TermsOfService;
