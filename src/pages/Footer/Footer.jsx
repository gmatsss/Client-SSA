import "./Footer.css";
import { Link } from "react-router-dom";

const FooterAll = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-bottom">
      <hr />
      <div className="policy-holder">
        <div className="policy">
          <Link to="/termsofservice">Terms of Service</Link>
          <Link to="/RefundPolicy">Refund Policy</Link>
          <Link to="/PrivacyPolicy">Privacy Policy</Link>
        </div>
      </div>

      <div className="credit">
        <p>© {currentYear} Super Smart Agents. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default FooterAll;
