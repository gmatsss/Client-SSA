import React from "react";
import "./AdditionalCharge.css";

const AdditionalCharge = ({ botChannelValue }) => {
  const totalCost = botChannelValue * 19;

  return (
    <div className="yearly-container">
      <div className="yearly-title">Additional Channel Charges</div>
      <div className="yearly-description">
        By selecting additional channels, you're ensuring a wider reach and a
        better user experience for your audience. These channels are optimized
        for performance and reliability, ensuring your bot delivers the best
        results.
      </div>
      <div className="yearly-details">
        <span className="yearly-subtitle">Total Additional Cost:</span>
        <span className="total-cost-value"> ${totalCost}.00</span>
      </div>

      <div className="yearly-footer">
        Each additional channel is priced at $19. Currently, you've selected{" "}
        {botChannelValue} channels, which is a testament to your commitment to
        providing top-notch service. Remember, investing in the right channels
        today can lead to increased user engagement and satisfaction in the
        future.
      </div>
    </div>
  );
};

export default AdditionalCharge;
