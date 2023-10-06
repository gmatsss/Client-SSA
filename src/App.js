import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Payments from "./pages/Payments/Payment";
import Appointment from "./pages/Appointment/Appointment";
import FooterAll from "./pages/Footer/Footer";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TermsOfService from "./pages/policy/TOS/TermsOfService";
import RefundPolicy from "./pages/policy/refund/RefundPolicy";
import PrivacyPolicy from "./pages/policy/Privacy/PrivacyPolicy";

function MainContent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Payments" element={<Payments />} />
      <Route path="/Appointment" element={<Appointment />} />
      <Route path="/termsofservice" element={<TermsOfService />} />
      <Route path="/RefundPolicy" element={<RefundPolicy />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Zoom}
      />
      <MainContent />
      <FooterAll />
    </Router>
  );
}

export default App;
