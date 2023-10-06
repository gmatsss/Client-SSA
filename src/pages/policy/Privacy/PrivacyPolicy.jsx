import React from "react";
import "./PrivacyPolicy.css";
import Header from "../../Home/Header/Header";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <div className="tos-container">
        <h1 className="tos-title">Privacy Policy for Super Smart Agents</h1>
        <hr className="tos-divider" />
        <section className="tos-section">
          <h2 className="refund-subtitle">1. Introduction</h2>
          <div className="refund-content">
            <p>
              Welcome to www.supersmartagents.com, owned and operated by Murphy
              Web Services Inc. This Privacy Policy outlines how we collect,
              use, store, and protect your personal information. By using our
              website, you agree to the terms outlined in this policy.
            </p>
          </div>

          <h2 className="refund-subtitle">2. Data Collection</h2>
          <div className="refund-content">
            <p>
              Personal Data: We collect names, email addresses, phone numbers,
              and physical addresses based on users' billing information.
            </p>
            <p>
              Technical Data: We collect technical data such as IP addresses,
              browser types, device types, and location data.
            </p>
            <p>
              Cookies: Our website uses session cookies and third-party scripts
              to improve the performance of our website.
            </p>
            <p>
              Usage Data: We collect information about how users interact with
              our website, such as pages visited, time spent on pages, and links
              clicked.
            </p>
          </div>

          <h2 className="refund-subtitle">3. Data Usage</h2>
          <div className="refund-content">
            <p>
              Purpose: The data is collected to improve the marketing experience
              on our website.
            </p>
            <p>
              Sharing: We do not share this information with third parties.
              However, we will only share your information with law enforcement
              if the proper subpoenas are issued by a judge.
            </p>
          </div>

          <h2 className="refund-subtitle">4. Data Storage and Processing</h2>
          <div className="refund-content">
            <p>
              Storage Location: All user data is stored on our Amazon Cloud
              Servers.
            </p>
            <p>
              Data Retention: We retain your data for as long as we see fit.
            </p>
          </div>

          <h2 className="refund-subtitle">5. Security Measure</h2>
          <div className="refund-content">
            <p>
              We employ robust security measures to protect user data. However,
              no method of transmission over the Internet or electronic storage
              is 100% secure. While we strive to protect your personal
              information, we cannot guarantee its absolute security.
            </p>
          </div>

          <h2 className="refund-subtitle">
            6. Third-Party Cookies and Trackers
          </h2>
          <div className="refund-content">
            <p>
              We use third-party analytics and advertising trackers on our
              website, such as Google Ads and Meta trackers, to enhance user
              experience and gather insights.
            </p>
          </div>

          <h2 className="refund-subtitle">7. User Rights</h2>
          <div className="refund-content">
            <p>
              Users have the right to contact us to request the deletion of
              their data. To exercise this right, users can contact us through
              our general support email at support@supersmartagents.com.
            </p>
          </div>

          <h2 className="refund-subtitle">8. Updates and Changes</h2>
          <div className="refund-content">
            <p>
              Whenever we update our privacy policy, we will notify users with a
              pop-up in our application. Users are advised to review our Privacy
              Policy periodically for any changes.
            </p>
          </div>

          <h2 className="refund-subtitle">9. Contact Information</h2>
          <div className="refund-content">
            <p>
              For any questions or concerns regarding this Privacy Policy,
              please contact:
            </p>
            <p>Murphy Web Services Inc.</p>
            <p>1219-3A Commerce Drive,</p>
            <p>Mountain Home, Arkansas 72653</p>
            <p>Phone: 888-985-6854</p>
            <p>Email: support@supersmartagents.com</p>
          </div>
        </section>
        <hr className="tos-divider" />
        <footer className="tos-footer">
          <p className="tos-footer-text">
            By using www.supersmartagents.com, you signify your acceptance of
            this Privacy Policy. If you do not agree to this policy, please
            refrain from using our website.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
