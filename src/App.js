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

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

function MainContent() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/Payments"
        element={
          <Layout>
            <Payments />
          </Layout>
        }
      />
      <Route
        path="/onboarding"
        element={
          <Layout>
            <CheckOut />
          </Layout>
        }
      />
      <Route path="/Appointment" element={<Appointment />} />
      <Route
        path="/termsofservice"
        element={
          <Layout>
            <TermsOfService />
          </Layout>
        }
      />
      <Route
        path="/RefundPolicy"
        element={
          <Layout>
            <RefundPolicy />
          </Layout>
        }
      />
      <Route
        path="/PrivacyPolicy"
        element={
          <Layout>
            <PrivacyPolicy />
          </Layout>
        }
      />
      <Route
        path="/test"
        element={
          <Layout>
            <MoonclerkEmbed />
          </Layout>
        }
      />
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
