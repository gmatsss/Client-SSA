import logo from "../../../../img/Logo.png";
import "./priceTable.css";

const PriceTable = () => {
  return (
    <div className="price_table">
      <table className="price-table">
        <tbody>
          <tr className="header-row  ">
            <td className="country-service">Country/Service</td>
            <td className="average-cost">Average Annual Cost</td>
          </tr>
          <tr className="data-row">
            <td className="country-service">United States</td>
            <td className="average-cost">$30,000 - $40,000</td>
          </tr>
          <tr className="data-row">
            <td className="country-service">Philippines</td>
            <td className="average-cost">$5,000 - $9,000</td>
          </tr>
          <tr className="">
            <td className="final-row logo-cell">
              <img src={logo} alt="" className="logo" />
            </td>
            <td className="final-cost">
              <span className="h1">$1,695</span>
              <br />
              <span className="fee-note">(one-time + fee for a year)</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
