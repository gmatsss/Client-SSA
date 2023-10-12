import { useState } from "react";
import Info from "./info";
import Onboarding from "./onBoarding";

const CheckOut = () => {
  const [currentStep, setCurrentStep] = useState(1); // Moved currentStep state up to CheckOut

  return (
    <div className="container-fluid mt-3 p-5 Onboarding Onboarding-hold">
      <div className="row align-items-center">
        <div className="col-lg-6 col-sm-12 order-2 order-lg-1">
          <Onboarding
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </div>
        <div className="col-lg-6 col-sm-12 order-1 order-lg-2 mb-sm-4">
          <Info currentStep={currentStep} />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
