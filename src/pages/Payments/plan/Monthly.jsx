import React, { useEffect } from "react";

const Monthly = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://d2l7e0y6ygya2s.cloudfront.net/assets/embed.js";
    script.async = true;

    // Set onload function to initialize the MoonclerkEmbed
    script.onload = script.onreadystatechange = function () {
      var rs = this.readyState;
      if (rs) if (rs !== "complete") if (rs !== "loaded") return;
      try {
        // eslint-disable-next-line no-undef
        new MoonclerkEmbed({
          checkoutToken: "4fxlmtbqlrn4",
          width: "100%",
        }).display();
      } catch (e) {
        console.error("[MC]", e);
      }
    };

    // Append the script to the document
    document.getElementsByTagName("head")[0].appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.getElementsByTagName("head")[0].removeChild(script);
    };
  }, []); // Empty dependency array means this useEffect runs once when component mounts

  return (
    <div id="mc4fxlmtbqlrn4">
      <a href="https://app.moonclerk.com/pay/4fxlmtbqlrn4">Monthly payment</a>
    </div>
  );
};

export default Monthly;
