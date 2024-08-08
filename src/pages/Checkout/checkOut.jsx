import { useState } from "react";
import Info from "./info";
import Onboarding from "./onBoarding";

const CheckOut = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentBotCount, setCurrentBotCount] = useState(1);

  return (
    <div className="">
      <div className="">
        <div className="">
          <Onboarding
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            currentBotCount={currentBotCount}
            setCurrentBotCount={setCurrentBotCount}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
