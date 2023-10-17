import React, { useEffect } from "react";

const TestChannel = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement("script");
    script.src = "https://d2l7e0y6ygya2s.cloudfront.net/assets/embed.js";
    script.type = "text/javascript";
    script.async = true;

    // Define the onload function for the script
    script.onload = script.onreadystatechange = function () {
      var rs = this.readyState;
      if (rs && rs !== "complete" && rs !== "loaded") return;
      try {
        var opts = {
          checkoutToken: "1s7hlcjtz3ny",
          width: "100%",
        };
        window.mc1s7hlcjtz3ny = new window.MoonclerkEmbed(opts);
        window.mc1s7hlcjtz3ny.display();
      } catch (e) {
        console.error("[MC]", e);
      }
    };

    // Append the script to the document
    const scr = document.getElementsByTagName("script")[0];
    scr.parentNode.insertBefore(script, scr);

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      scr.parentNode.removeChild(script);
    };
  }, []);

  return (
    <div id="mc1s7hlcjtz3ny">
      <a href="https://app.moonclerk.com/pay/1s7hlcjtz3ny">channel test</a>
    </div>
  );
};

export default TestChannel;
