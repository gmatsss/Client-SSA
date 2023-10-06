import React from "react";
import "./RefundPolicy.css";
import Header from "../../Home/Header/Header";

const RefundPolicy = () => {
  return (
    <div>
      <Header />
      <div className="refund-container">
        <h1 className="refund-title">Refund Policy for Super Smart Agents</h1>
        <hr className="refund-divider" />
        <section className="refund-section">
          {/* Product/Service Nature */}
          <h2 className="refund-subtitle">1. Product/Service Nature:</h2>
          <div className="refund-content">
            <p>
              Product/Service Type: Super Smart Agents offers a digital product.
            </p>
            <p>Service Nature: We provide a monthly subscription service.</p>
            <p>
              Pricing Model: Customers can choose between a pay-as-you-go or a
              yearly subscription model.
            </p>
            <p>
              Subscription Intervals: We offer both monthly and yearly
              subscription intervals.
            </p>
            <p>
              Promotional Deals: We occasionally run promotions at our
              discretion. These promotions may affect subscription intervals and
              the general pricing model.
            </p>
          </div>

          {/* Refund Request Process */}
          <h2 className="refund-subtitle">2. Refund Request Process:</h2>
          <div className="refund-content">
            <p>
              Initiation: If you wish to request a refund, please contact our
              Support Department by emailing support@supersmartagents.com.
            </p>
            <p>
              Information Required: When requesting a refund, please provide
              your full name, email address, order number, and the reason for
              your refund request.
            </p>
            <p>
              Support Agent Role: Our support representative will handle your
              refund request, gather the necessary information, and guide you
              through the process.
            </p>
          </div>

          {/* Criteria for Refund */}
          <h2 className="refund-subtitle">3. Criteria for Refund:</h2>
          <div className="refund-content">
            <p>
              Timelines: Refunds can be requested within 30 days of your initial
              purchase. For clients on our subscription billing, refunds are not
              permitted, but you may cancel your subscription at any time.
            </p>
            <p>
              Service Usage: Charges are based on access to our product, not on
              usage. Therefore, even if you haven't used our product, charges
              will still apply if you have access.
            </p>
          </div>

          {/* Refund Details */}
          <h2 className="refund-subtitle">4. Refund Details:</h2>
          <div className="refund-content">
            <p>
              Processing Time: If your refund request is approved, the refund
              will be processed within 5-7 business days. The refund will be
              issued to the same billing method you used for your transaction.
            </p>
            <p>
              Fees: Any transaction fees or service charges that were incurred
              will be deducted from the refund amount.
            </p>
            <p>
              Nonrefundable Aspects: Please note that any setup fees,
              customization charges, or special service charges are
              non-refundable.
            </p>
          </div>
        </section>
        <hr className="refund-divider" />
        <footer className="refund-footer">
          <p className="refund-footer-text">
            By subscribing to or purchasing from Super Smart Agents, you agree
            to this refund policy. We recommend reviewing this policy
            periodically for any updates or changes. If you have any questions
            or concerns regarding our refund policy, please contact our Support
            Department.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default RefundPolicy;
