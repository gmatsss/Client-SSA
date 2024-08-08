import React, { useEffect } from "react";

const MonthlyVAPlan = () => {
  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://d2l7e0y6ygya2s.cloudfront.net/assets/embed.js";
      script.type = "text/javascript";
      script.onload = script.onreadystatechange = function () {
        var rs = this.readyState;
        if (rs && rs !== "complete" && rs !== "loaded") return;
        try {
          var opts = { checkoutToken: "44c4s6sfgjs", width: "100%" };
          window.mc44c4s6sfgjs = new window.MoonclerkEmbed(opts);
          window.mc44c4s6sfgjs.display();
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
    <div id="mc44c4s6sfgjs">
      <a href="https://app.moonclerk.com/pay/44c4s6sfgjs">
        Monthly Plan Voice Agent
      </a>
    </div>
  );
};

export default MonthlyVAPlan;
