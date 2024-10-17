import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./VApayments.css";
import YearlyVAPlan from "./Plan/Yearly/YearlyVAPlan";
import MonthlyVAPlan from "./Plan/Monthly/MonthlyVAPlan";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import EditFormModal from "./EditFormModal";
import { toast } from "react-toastify";
import { fetchData } from "../../api/FetchData";

const VApayments = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(location.state?.formData || {});
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const [agentCount, setAgentCount] = useState(
    String(location.state?.agentCount || formData.agents?.length || 0)
  );

  useEffect(() => {
    if (!formData || Object.keys(formData).length === 0) {
      navigate("/VAonboarding");
    }
  }, [formData, navigate]);

  console.log(formData);

  const updateFormData = (updatedData) => {
    const updatedAgentCount = updatedData.agents?.length || 0;

    setFormData({
      ...updatedData,
      numberOfAgents: updatedAgentCount,
    });

    setAgentCount(String(updatedAgentCount));
    navigate(location.pathname, {
      state: {
        ...location.state,
        formData: {
          ...updatedData,
          numberOfAgents: updatedAgentCount,
        },
        agentCount: String(updatedAgentCount),
      },
    });
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);

    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let verificationCode = "";
    for (let i = 0; i < 30; i++) {
      verificationCode += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    const planId = plan === "monthly" ? 506510 : 506619;

    // wgE639mYPrj3CAiLkQL6mvcO9J0dga
    setFormData((prevData) => ({
      ...prevData,
      verificationCode: verificationCode,
      // verificationCode: "wgE639mYPrj3CAiLkQL6mvcO9J0dga",
      planId: planId,
    }));
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(formData.verificationCode)
      .then(() => {
        toast.success("Verification code copied to clipboard!"); // Optional: show a toast notification
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
        toast.error("Failed to copy verification code."); // Optional: show a toast notification
      });
  };

  const handleBack = () => {
    const confirmed = window.confirm(
      "Are you sure you want to go back? Make sure you don't process any payment as we can't retrieve lost payments."
    );
    if (confirmed) {
      setSelectedPlan(null);
    }
  };

  const handleEditForm = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const verifyPayment = async () => {
    setIsVerifying(true); // Disable the button at the start of the process

    try {
      const currentFormId = formData.planId;

      const headers = {
        Authorization: "Token 08bf9295738475d4afc3362ba53678df",
        Accept: "application/vnd.moonclerk+json;version=1",
      };

      const result = await fetchData(
        "moonclerk/api/payments",
        "GET",
        null,
        headers
      );

      console.log(result);

      const matchingPaymentDataArray = result.payments.filter(
        (payment) => payment.form_id === currentFormId
      );

      const successfulPaymentData = matchingPaymentDataArray.find(
        (paymentData) =>
          paymentData.custom_fields &&
          paymentData.custom_fields.verification_code &&
          paymentData.custom_fields.verification_code.response ===
            formData?.verificationCode
      );

      if (successfulPaymentData) {
        navigateToThankYou(successfulPaymentData.customer_id);
      } else {
        toast.warning(
          "Payment verification failed. Ensure the payment has been made."
        );
      }
    } catch (error) {
      console.error("Error verifying payment: ", error);
      toast.error("An error occurred during payment verification.");
    } finally {
      setIsVerifying(false); // Re-enable the button after the process completes
    }
  };

  const navigateToThankYou = async (customer_id) => {
    try {
      const {
        fname,
        lname,
        email,
        phone,
        verificationCode,
        planId,
        voiceAgentDetails,
      } = formData;

      const registrationPayload = {
        name: `${fname} ${lname}`,
        email: email,
        phone: phone,
        password: fname,
        role: "user",
      };

      const registrationResponse = await fetchData(
        "User/register",
        "POST",
        registrationPayload
      );

      if (registrationResponse.data.userId) {
        const agents = voiceAgentDetails.map((detail) => ({
          botStatus: "In Progress",
          lifetimeAccess: false,
          offerValidityDays: 30,
          offerStartDate: new Date(),
          offerEndDate: new Date(
            new Date().getTime() + 30 * 24 * 60 * 60 * 1000
          ),

          agentGreeting: detail.agentGreeting,
          agentPrompt: detail.agentPrompt,
          customKnowledge: detail.customKnowledge,
          limitations: detail.limitations,
          voiceOfTheAgent: detail.voiceoftheagent,
          agentBehavior: detail.agentBehavior,
        }));

        const VAagentsGroup = [
          {
            verificationCodebotplan: verificationCode,
            agents: agents,
          },
        ];

        const onboardingPayload = {
          numberOfAgents: agents.length.toString(),
          VAagentsGroup: VAagentsGroup,
          paymentPlan: {
            customer_id: customer_id,
          },
          userId: registrationResponse.data.userId,
        };

        console.log(onboardingPayload);

        const onboardingResponse = await fetchData(
          "bot/createVoiceAgentSSA",
          "POST",
          onboardingPayload
        );

        if (onboardingResponse.data) {
          if (window.location.origin === "https://www.supersmartagents.com") {
            try {
              const headers = {
                Authorization: "Token 08bf9295738475d4afc3362ba53678df",
                Accept: "application/vnd.moonclerk+json;version=1",
              };

              const result = await fetchData(
                "moonclerk/api/payments",
                "GET",
                null,
                headers
              );

              const matchingPaymentDataArray = result.payments.filter(
                (payment) => payment.form_id === planId
              );

              const successfulPaymentData = matchingPaymentDataArray.find(
                (paymentData) =>
                  paymentData.custom_fields &&
                  paymentData.custom_fields.verification_code &&
                  paymentData.custom_fields.verification_code.response ===
                    verificationCode
              );

              const fpromTid = getCookie("_fprom_tid");
              const fpromRef = getCookie("_fprom_ref");

              const saleTrackingPayload = {
                email: formData.email,
                uid: `${fname}_${lname}`,
                currency: "USD",
                event_id: planId,
                plan: planId,
                amount: successfulPaymentData.amount,
                ref_id: fpromRef,
                tid: fpromTid,
              };

              await fetch("https://firstpromoter.com/api/v1/track/sale", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "x-api-key": "4450bd7ad1136ceebcd94195f7cd6787",
                },
                body: JSON.stringify(saleTrackingPayload),
              });

              window.fpr("referral", { email: formData.email });
            } catch (error) {
              console.error("Error during First Promoter tracking:", error);
              toast.error("Error in tracking referral. Please check logs.");
            }
          }

          toast.success("Payment Success");
          navigate("/Thank");
        } else {
          const errorMessage = onboardingResponse.error || "Onboarding Failed";
          toast.error(errorMessage);
        }
      } else {
        const errorMessage = "Registration failed, please try again.";
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error("Error during registration or onboarding:", error);
      toast.error("An unexpected error occurred.");
    } finally {
    }
  };

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  const persuasiveParagraph =
    "Experience high-speed AI for smooth operations and deploy anywhere for unmatched flexibility, unlocking time savings and improving customer service. Increase revenue and reduce costs with optimized interactions. Enhance service accuracy and discover insights on customer preferences with seamless integration.";

  return (
    <div className="vapayments-container">
      <div className="centered-container">
        <h1>SSA Voice Agents</h1>
        <p onClick={handleEditForm}>Edit Form Submitted</p>
      </div>

      <div className="pricing-grid">
        <div
          className={`pricing-item ${
            selectedPlan === "yearly" ? "no-background" : ""
          }`}
        >
          {selectedPlan !== "yearly" ? (
            <>
              <h2>Monthly</h2>
              <p>$599/Month per inbound agent</p>
              <p>🌟 Best for short-term needs</p>
              <p>👍 Flexible and no long-term commitment</p>
              <p>📈 Perfect for scaling your support quickly</p>
              <p>{persuasiveParagraph}</p>
              {selectedPlan !== "monthly" ? (
                <button
                  className="pricing-button monthly-button"
                  onClick={() => handleSelectPlan("monthly")}
                >
                  Choose Monthly
                </button>
              ) : (
                <>
                  <div className="verification-container">
                    <p>
                      Verification Code:{" "}
                      <span
                        className="verification-code"
                        onClick={handleCopyToClipboard}
                      >
                        {formData.verificationCode || "asdasdad"}
                      </span>
                    </p>
                    <button
                      className="verification-button"
                      onClick={verifyPayment}
                      disabled={isVerifying} // Disable when verifying
                    >
                      {isVerifying ? (
                        <>Verifying Payment... Please wait</> // Show this message during verification
                      ) : (
                        <>
                          <FontAwesomeIcon icon={faCheck} /> Verify Payment
                        </>
                      )}
                    </button>
                  </div>

                  <button className="pricing-button" onClick={handleBack}>
                    Back
                  </button>
                </>
              )}
            </>
          ) : (
            <div className="plan-content">
              <YearlyVAPlan />
            </div>
          )}
        </div>

        <div
          className={`pricing-item ${
            selectedPlan === "monthly" ? "no-background" : ""
          }`}
        >
          {selectedPlan !== "monthly" ? (
            <>
              <h2 style={{ color: "#007bff" }}>Yearly</h2>
              <p>$6000/Year per inbound agent</p>
              <p>💰 Save more with annual billing</p>
              <p>🚀 Ideal for long-term growth</p>
              <p>🔒 Lock in the best rates for the year</p>
              <p>{persuasiveParagraph}</p>
              {selectedPlan !== "yearly" ? (
                <button
                  className="pricing-button"
                  onClick={() => handleSelectPlan("yearly")}
                >
                  Choose Yearly
                </button>
              ) : (
                <>
                  <div className="verification-container">
                    <p>
                      Verification Code:{" "}
                      <span
                        className="verification-code"
                        onClick={handleCopyToClipboard}
                      >
                        {formData.verificationCode || "asdasdad"}
                      </span>
                    </p>
                    <button
                      className="verification-button"
                      onClick={verifyPayment}
                      disabled={isVerifying} // Disable when verifying
                    >
                      {isVerifying ? (
                        <>Verifying Payment... Please wait</> // Show this message during verification
                      ) : (
                        <>
                          <FontAwesomeIcon icon={faCheck} /> Verify Payment
                        </>
                      )}
                    </button>
                  </div>
                  <button className="pricing-button" onClick={handleBack}>
                    Back
                  </button>
                </>
              )}
            </>
          ) : (
            <div className="plan-content">
              <MonthlyVAPlan />
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <EditFormModal
          formData={formData}
          setFormData={updateFormData}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default VApayments;
