import React, { useEffect } from "react";

const YearlyVAPlan = () => {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://d2l7e0y6ygya2s.cloudfront.net/assets/embed.js";
      script.type = "text/javascript";
      script.onload = script.onreadystatechange = function () {
        var rs = this.readyState;
        if (rs && rs !== "complete" && rs !== "loaded") return;
        try {
          var opts = { checkoutToken: "1dvtccioq5f", width: "100%" };
          window.mc1dvtccioq5f = new window.MoonclerkEmbed(opts);
          window.mc1dvtccioq5f.display();
        } catch (e) {
          console.error("[MC]", e);
        }
      };
      const scriptTag = document.getElementsByTagName("script")[0];
      scriptTag.parentNode.insertBefore(script, scriptTag);
    };

    loadScript();
  }, []);

  return (
    <div id="mc1dvtccioq5f">
      <a href="https://app.moonclerk.com/pay/1dvtccioq5f">
        Yearly Plan Voice Agent
      </a>
    </div>
  );
};

export default YearlyVAPlan;
