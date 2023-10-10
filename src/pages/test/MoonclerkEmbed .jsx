import React, { useEffect } from "react";

const MoonclerkEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://d2l7e0y6ygya2s.cloudfront.net/assets/embed.js";
    script.async = true;

    script.onload = script.onreadystatechange = function () {
      var rs = this.readyState;
      if (rs) if (rs !== "complete") if (rs !== "loaded") return;
      try {
        var opts = { checkoutToken: "32pbl2zrwij9", width: "100%" };
        window.mc32pbl2zrwij9 = new window.MoonclerkEmbed(opts);
        window.mc32pbl2zrwij9.display();
      } catch (e) {
        console.error("[MC]", e);
      }
    };

    document.body.appendChild(script);

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="mc32pbl2zrwij9">
      <a href="https://app.moonclerk.com/pay/32pbl2zrwij9">test</a>
    </div>
  );
};

export default MoonclerkEmbed;
