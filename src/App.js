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
import Header from "./pages/Home/Header/Header";
import CheckOut from "./pages/Checkout/checkOut";
import MoonclerkEmbed from "./pages/test/MoonclerkEmbed ";
import ThankYouPage from "./pages/Thankyou/Thankyou";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <FooterAll />
    </>
  );
}

function RenderRoute(path, Component) {
  return (
    <Route
      path={path}
      element={
        <Layout>
          <Component />
        </Layout>
      }
    />
  );
}

function MainContent() {
  return (
    <Routes>
      {RenderRoute("/", Home)}
      {RenderRoute("/Payments", Payments)}
      {RenderRoute("/onboarding", CheckOut)}
      {RenderRoute("/termsofservice", TermsOfService)}
      {RenderRoute("/RefundPolicy", RefundPolicy)}
      {RenderRoute("/PrivacyPolicy", PrivacyPolicy)}
      {RenderRoute("/test", MoonclerkEmbed)}
      {RenderRoute("/Thank", ThankYouPage)}
      <Route path="/Appointment" element={<Appointment />} />
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
    </Router>
  );
}

export default App;
