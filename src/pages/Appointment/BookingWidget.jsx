import React from "react";

const BookingWidget = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        border: "none",
        overflow: "hidden",
      }}
    >
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/TXKejgrJJ5krHkzJlykP"
        style={{
          height: "100%",
          width: "100%",
          border: "none",
        }}
        // scrolling="no"
        id="JDRB84imVd8Apw2Qy7DK_1696402050955"
        title="Booking Widget"
      ></iframe>
      <br />
      <script src="https://link.msgsndr.com/js/form_embed.js"></script>
    </div>
  );
};

export default BookingWidget;
