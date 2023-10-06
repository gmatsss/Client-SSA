import logo from "../../../../img/Logo.png";
import "./Savings.css";
import Aos from "aos";
import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

const Savings = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="savings">
      <div className="intro-text">
        <p>
          Let's say you have 3 agents in the Philippines all doing the same job
        </p>
        <p>
          Check out your average savings with us over{" "}
          <span class="fire">ONE</span>
          <span class="burn"> YEAR</span>
        </p>
      </div>
      <table className="savings-table">
        <tbody>
          <tr className="header-row">
            <td className="border-right">Item/Service</td>
            <td className="border-right">Cost</td>
            <td>Total Yearly Cost</td>
          </tr>
          <tr className="data-row">
            <td className="border-right">3 Agents in the Philippines</td>
            <td className="border-right">$7,000/agent</td>
            <td>$21,000</td>
          </tr>
          <tr className="data-row">
            <td className="border-right">1 Super Smart Agent</td>
            <td className="border-right">$1,695/year</td>
            <td>$1,695</td>
          </tr>
          <tr className="">
            <td className="border-right">
              <div className="logo-cell ">
                <p>Yearly Savings With</p>
                <img src={logo} alt="" />
              </div>
            </td>
            <td></td>
            <td className="border-left">
              <div className="savings-amount">
                <span className="h1" data-text="$19,305">
                  $19,305
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <RouterLink to="/Appointment">
        <button className="banner-button fw-bold" data-aos="flip-up">
          HIRE AGENT NOW!
        </button>
      </RouterLink>
    </div>
  );
};

export default Savings;
