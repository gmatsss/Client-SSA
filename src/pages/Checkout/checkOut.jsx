import Info from "./info";
import Onboarding from "./onBoarding";

const CheckOut = () => {
  return (
    <div
      className="container-fluid mt-3 p-5 Onboarding"
      style={{ height: "87.5vh", overflow: "auto" }} // Set the height to 100vh
    >
      <div className="row align-items-center">
        <div className="col-12 col-xl-6 d-flex flex-column align-items-center">
          <Onboarding />
        </div>
        <div className="col-12 col-xl-6">
          <Info />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
