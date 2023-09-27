import React from "react";
import "./comp.css";

function ButtonComponent({ text = "Button 49", color = "#FF013C" }) {
  return (
    <div>
      <button
        className="button-49"
        role="button"
        style={{
          background: `linear-gradient(45deg, transparent 5%, ${color} 5%)`,
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default ButtonComponent;
