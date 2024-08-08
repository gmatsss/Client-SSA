import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Monthlytext from "./Choose/Monthly-text";
import YearlyPlan from "./Choose/Yearly-text";
import Monthly from "./plan/Monthly/Monthly";
import Yearly from "./plan/Yearly/Yearly";
import { useEffect, useState } from "react";
import "./Payments.css";
import { useLocation, useNavigate } from "react-router-dom";
import YearlyDiscount1 from "./plan/Yearly/YearlyDiscount1";
import YearlyDiscount2 from "./plan/Yearly/YearlyDiscount2";
import YearlyDiscount3 from "./plan/Yearly/YearlyDiscount3";
import MonthlyPlanDiscount2 from "./plan/Monthly/MonthlyPlanDiscount2";
import MonthlyPlanDiscount3 from "./plan/Monthly/MonthlyPlanDiscount3";
import MonthlyPlanDiscount4 from "./plan/Monthly/MonthlyPlanDiscount4";
import { fetchData } from "../../api/FetchData";
import { toast } from "react-toastify";
import AdditionalCharge from "./Choose/AdditionalCharge";
import ChannelOne from "./plan/Channel/ChannelOne";
import ChannelTwo from "./plan/Channel/ChannelTwo";
import ChannelThree from "./plan/Channel/ChannelThree";
import ChannelSix from "./plan/Channel/ChannelSix";
import ChannelFive from "./plan/Channel/ChannelFive";
import ChannelFour from "./plan/Channel/ChannelFour";
import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Payments = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const agentCount = String(location.state?.agentCount);
  const formData = location.state?.formData;
  const botChannelValue =
    formData?.botChannel && formData.botChannel.length > 0
      ? formData.botChannel.length
      : 0;

  const [isVerificationMatched, setIsVerificationMatched] = useState(false);
  const [paymentVerified, setPaymentVerified] = useState(false);
  const [currentFormId, setCurrentFormId] = useState(null);
  const [currentChannelFormId, setChannelCurrentFormId] = useState(0);
  const [loading, setLoading] = useState(false);
  const [newVerificationCode, setNewVerificationCode] = useState();
  const [ammountref, setAmountref] = useState();

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.info("Verification code copied!");
      },
      (err) => {
        console.error("Failed to copy: ", err);
        toast.error("Failed to copy the code.");
      }
    );
  };

  useEffect(() => {
    if (!formData || !agentCount) {
      navigate("/onboarding"); // Redirect to onboarding if data is missing
    }
  }, [formData, agentCount, navigate]);

  const [isYearly, setIsYearly] = useState(false);

  // 2. Handle Toggle Change
  const handleToggleChange = (event) => {
    setIsYearly(event.target.checked);
  };
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 95,
    height: 22,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 18,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(73px)", // Adjusted to maximize the width when turned on
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(73px)", // Adjusted to maximize the width when turned on
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "transparent",
        },
        "& .MuiSwitch-thumb": {
          backgroundColor: "#27B3DF",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: "#E03F6D",
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
      border: "1px solid white",
    },
  }));

  const [paymentidplan, setPaymentidplan] = useState();

  useEffect(() => {
    let formId;

    if (isYearly) {
      // Yearly plans
      switch (agentCount) {
        case "1":
          formId = 474438; // Yearly
          break;
        case "2":
          formId = 475039; // YearlyDiscount1
          break;
        case "3":
          formId = 475040; // YearlyDiscount2
          break;
        default:
          if (parseInt(agentCount) >= 4) {
            formId = 475044; // YearlyDiscount3
          }
          break;
      }
    } else {
      // Monthly plans
      switch (agentCount) {
        case "1":
          // 474911 test
          formId = 474170; // Monthly
          // formId = 474911; // test
          break;
        case "2":
          formId = 475045; // MonthlyDiscount
          // formId = 474911; // test
          break;
        case "3":
          formId = 475046; // MonthlyDiscount2
          break;
        default:
          if (parseInt(agentCount) >= 4) {
            formId = 475047; // MonthlyDiscount3
          }
          break;
      }
    }

    setCurrentFormId(formId);
  }, [agentCount, isYearly]);

  const channelFormIdMapping = {
    // 475469 test for channel
    1: 475832,
    2: 475833,
    // 2: 475469, // test
    3: 475834,
    4: 475835,
    5: 475836,
    6: 475837,
  };

  useEffect(() => {
    if (channelFormIdMapping[botChannelValue]) {
      setChannelCurrentFormId(channelFormIdMapping[botChannelValue]);
    }
  }, [botChannelValue]);

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  const navigateToThankYou = async (customerID, paymentPlanID) => {
    try {
      setLoading(true); // Control UI loading state
      const { firstname, lastname, email, phone } = formData;

      const registrationPayload = {
        name: `${firstname} ${lastname}`,
        email: email,
        phone: phone,
        password: firstname, // Use a more secure way to generate passwords
        role: "user",
      };

      const registrationResponse = await fetchData(
        "User/register",
        "POST",
        registrationPayload
      );

      if (registrationResponse.data.userId) {
        // User registration was successful, proceed with onboarding

        const onboardingPayload = new FormData();

        // Append simple key-value pairs to the FormData
        onboardingPayload.append("numberOfAgents", formData.numberOfAgents);
        onboardingPayload.append(
          "additionalGuidelines",
          formData.additionalGuidelines
        );
        onboardingPayload.append(
          "verificationCodebotplan",
          formData.verificationCode
        );

        onboardingPayload.append("userId", registrationResponse.data.userId);

        if (newVerificationCode) {
          onboardingPayload.append("verifchannelcode", newVerificationCode);
        }

        if (customerID) {
          onboardingPayload.append("customerID", customerID);
        }

        //monthly plan
        if (paymentPlanID) {
          onboardingPayload.append("paymentPlanID", paymentPlanID);
        }

        // For arrays or objects, convert them to string using JSON.stringify
        onboardingPayload.append("agents", JSON.stringify(formData.agents));
        onboardingPayload.append(
          "botChannel",
          JSON.stringify(formData.botChannel)
        );

        // Append each file to the FormData. Ensure that 'uploadedFiles' is an array of File objects.
        formData.uploadedFiles.forEach((file, index) => {
          onboardingPayload.append(`uploadedFiles[${index}]`, file, file.name);
        });

        const onboardingResponse = await fetchData(
          "bot/postinfo",
          "POST",
          onboardingPayload
        );

        // Check if the onboarding response was successful
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
                (payment) => payment.form_id === currentFormId
              );

              const successfulPaymentData = matchingPaymentDataArray.find(
                (paymentData) =>
                  paymentData.custom_fields &&
                  paymentData.custom_fields.verification_code &&
                  paymentData.custom_fields.verification_code.response ===
                    formData?.verificationCode
              );

              const fpromTid = getCookie("_fprom_tid");
              const fpromRef = getCookie("_fprom_ref");

              // First Promoter sale tracking API call
              const saleTrackingPayload = {
                email: formData.email,
                uid: `${firstname}_${lastname}`,
                currency: "USD",
                event_id: customerID,
                plan: customerID,
                amount: successfulPaymentData.amount,
                ref_id: fpromRef,
                tid: fpromTid,
              };

              console.log(saleTrackingPayload);

              const response = await fetch(
                "https://firstpromoter.com/api/v1/track/sale",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "x-api-key": "4450bd7ad1136ceebcd94195f7cd6787",
                  },
                  body: JSON.stringify(saleTrackingPayload),
                }
              );

              window.fpr("referral", { email: formData.email });
              console.log(response);

              // Your code for handling successful response
            } catch (error) {
              if (error instanceof Error) {
                console.error(
                  "Error during First Promoter tracking:",
                  error.message
                );
              } else if (error.response) {
                console.error(
                  "API response error:",
                  await error.response.text()
                );
              } else {
                console.error("Unknown error during First Promoter tracking.");
              }
              toast.error("Error in tracking referral. Please check logs.");
            }
          }

          toast.success("Payment Success");
          navigate("/Thank");
        } else {
          // Handle onboarding errors
          const errorMessage = onboardingResponse.error || "Onboarding Failed";
          toast.error(errorMessage);
        }
      } else {
        // If there's no userId, handle it as an error
        const errorMessage = "Registration failed, please try again.";
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error("Error during registration or onboarding:", error);
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false); // Ensure loading state is reset
    }
  };

  const fetchPaymentDataBot = async () => {
    try {
      setLoading(true);
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
        if (botChannelValue === 0) {
          console.log(
            "Navigating to Thank You page with Customer ID:",
            successfulPaymentData.customer_id
          );
          await navigateToThankYou(successfulPaymentData.customer_id);
        } else {
          let newVerificationCode = null;
          if (botChannelValue > 0) {
            newVerificationCode = generateNewVerificationCode();
            setNewVerificationCode(newVerificationCode);
            console.log(
              "Generated new verification code:",
              newVerificationCode
            );
          }

          setPaymentidplan(successfulPaymentData.customer_id);
          console.log(
            "Set payment ID plan:",
            successfulPaymentData.customer_id
          );

          setLoading(false);
          toast.success("Payment Success");
          setPaymentVerified(true);
          setIsVerificationMatched(true);
        }
      } else {
        setLoading(false);
        toast.warning("Please pay your balance first.");
      }
    } catch (error) {
      console.error("Error fetching payment data:", error);
      setLoading(false);
    }
  };

  function generateNewVerificationCode() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 30; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  const checkFormDataChannel = async () => {
    try {
      setLoading(true);
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
        (payment) => payment.form_id === currentChannelFormId
      );

      const successfulPaymentData = matchingPaymentDataArray.find(
        (paymentData) =>
          paymentData.custom_fields &&
          paymentData.custom_fields.verification_code &&
          paymentData.custom_fields.verification_code.response ===
            (newVerificationCode || formData?.verificationCode)
      );

      if (successfulPaymentData) {
        navigateToThankYou(successfulPaymentData.customer_id, paymentidplan);
      } else {
        setLoading(false);
        toast.warning("Please pay your balance first.");
      }
    } catch (error) {
      console.error("Error fetching payment data:", error);
      setLoading(false);
    }
  };

  return (
    <div className="">
      <div className="payments-container ">
        <div className="payments-column">
          <div className="toggle-container">
            {!isVerificationMatched || botChannelValue === 0 ? (
              <div className="toggle-container">
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography
                    style={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "rgb(224, 63, 109)",
                    }}
                  >
                    Monthly
                  </Typography>
                  <AntSwitch
                    checked={isYearly}
                    onChange={handleToggleChange}
                    inputProps={{ "aria-label": "ant design" }}
                  />
                  <Typography
                    style={{
                      fontWeight: "700",
                      fontSize: "20px",
                      color: "#27B3DF",
                    }}
                  >
                    Yearly
                  </Typography>
                </Stack>
                {isYearly ? (
                  <YearlyPlan numberOfBots={agentCount} />
                ) : (
                  <Monthlytext numberOfBots={agentCount} />
                )}
              </div>
            ) : (
              <div className="toggle-channel">
                {botChannelValue > 0 && (
                  <AdditionalCharge botChannelValue={botChannelValue} />
                )}
              </div>
            )}

            {newVerificationCode ? (
              <>
                <h1>
                  Your New Verification Code is{" "}
                  <Tooltip title="Click to copy">
                    <InfoOutlinedIcon
                      style={{ marginLeft: "10px", cursor: "pointer" }}
                    />
                  </Tooltip>
                </h1>
                <div className="verification-code-tooltip">
                  <Tooltip title="Click to copy">
                    <h3
                      onClick={() => copyToClipboard(newVerificationCode)}
                      style={{ cursor: "pointer" }}
                    >
                      {newVerificationCode}
                    </h3>
                  </Tooltip>
                </div>
              </>
            ) : (
              <>
                <h1>
                  Your Verification Code is{" "}
                  <Tooltip title="Click to copy">
                    <InfoOutlinedIcon style={{ cursor: "pointer" }} />
                  </Tooltip>
                </h1>
                <div className="verification-code-tooltip">
                  <Tooltip title="Click to copy">
                    <h3
                      onClick={() =>
                        copyToClipboard(formData?.verificationCode)
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {formData?.verificationCode}
                    </h3>
                  </Tooltip>
                </div>
              </>
            )}
          </div>

          {(!isVerificationMatched || botChannelValue === 0) &&
            botChannelValue <= 6 && (
              <div className="d-flex justify-content-center mt-5">
                <button
                  type="submit"
                  className="btn-validate"
                  disabled={loading}
                  onClick={fetchPaymentDataBot}
                >
                  {loading ? (
                    <div className="lds-dual-ring1validate"></div> // Show loading spinner if loading
                  ) : (
                    "Validate Payment"
                  )}
                </button>
              </div>
            )}

          {botChannelValue >= 1 && botChannelValue <= 6 && paymentVerified && (
            <div className="d-flex justify-content-center mt-5">
              <button
                type="submit"
                className="btn-validate"
                disabled={loading}
                onClick={checkFormDataChannel}
              >
                {loading ? (
                  <div className="lds-dual-ring1validate"></div>
                ) : (
                  "Validate Payment"
                )}
              </button>
            </div>
          )}
        </div>

        <div className="payments-column moonclerkholder">
          {!isVerificationMatched || botChannelValue === 0 ? (
            <>
              {isYearly ? (
                <>
                  {agentCount === "1" && <Yearly />}
                  {agentCount === "2" && <YearlyDiscount1 />}
                  {agentCount === "3" && <YearlyDiscount2 />}
                  {(agentCount === "4" || parseInt(agentCount) > 4) && (
                    <YearlyDiscount3 />
                  )}
                </>
              ) : (
                <>
                  {agentCount === "1" && <Monthly />}
                  {agentCount === "2" && <MonthlyPlanDiscount2 />}
                  {agentCount === "3" && <MonthlyPlanDiscount3 />}
                  {(agentCount === "4" || parseInt(agentCount) > 4) && (
                    <MonthlyPlanDiscount4 />
                  )}
                </>
              )}
            </>
          ) : null}

          {isVerificationMatched && (
            <>
              {botChannelValue === 1 && <ChannelOne />}
              {botChannelValue === 2 && <ChannelTwo />}
              {botChannelValue === 3 && <ChannelThree />}
              {botChannelValue === 4 && <ChannelFour />}
              {botChannelValue === 5 && <ChannelFive />}
              {botChannelValue === 6 && <ChannelSix />}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payments;
