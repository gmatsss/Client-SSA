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
import MoonclerkEmbed from "../test/MoonclerkEmbed ";
import TestChannel from "../test/testchannel";
import { fetchData } from "../../api/FetchData";
import { toast } from "react-toastify";
import AdditionalCharge from "./Choose/AdditionalCharge";

const Payments = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const agentCount = String(location.state?.agentCount); // Convert to string
  const formData = location.state?.formData; // Access the completeFormData
  const botChannelValue =
    formData?.botChannel && formData.botChannel.length > 0
      ? formData.botChannel.length
      : 0;

  const [isVerificationMatched, setIsVerificationMatched] = useState(false);
  const [paymentVerified, setPaymentVerified] = useState(false);

  const [currentFormId, setCurrentFormId] = useState(null);
  const [currentChannelFormId, setChannelCurrentFormId] = useState(0);
  const [loading, setLoading] = useState(false);

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
  useEffect(() => {
    if (isYearly) {
      // Yearly plans
      switch (agentCount) {
        case "1":
          setCurrentFormId(474438); // Yearly
          break;
        case "2":
          setCurrentFormId(475039); // YearlyDiscount1
          break;
        case "3":
          setCurrentFormId(475040); // YearlyDiscount2
          break;
        case "4":
        default:
          if (parseInt(agentCount) > 4) {
            setCurrentFormId(475044); // YearlyDiscount3
          }
          break;
      }
    } else {
      // Monthly plans
      switch (agentCount) {
        case "1":
          setCurrentFormId(474911);
          break;
        case "2":
          setCurrentFormId(475045);
          break;
        case "3":
          setCurrentFormId(475046);
          break;
        case "4":
        default:
          if (parseInt(agentCount) > 4) {
            setCurrentFormId(475047);
          }
          break;
      }
    }
  }, [agentCount, isYearly]);

  useEffect(() => {
    switch (agentCount) {
      case "1":
        setChannelCurrentFormId(475469); // Yearly
        break;
      case "2":
        //setCurrentFormId(475039); // YearlyDiscount1
        break;
      case "3":
        //setCurrentFormId(475040); // YearlyDiscount2
        break;
      case "4":
      default:
        if (parseInt(agentCount) > 4) {
          //setCurrentFormId(475044); // YearlyDiscount3
        }
        break;
    }
  }, [botChannelValue]);

  const navigateToThankYou = () => {
    navigate("/Thank");
  };

  const fetchPaymentData = async () => {
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

      if (matchingPaymentDataArray.length > 0) {
        console.log(
          "Found matching payment data records:",
          matchingPaymentDataArray
        );

        // Flag to determine if there's a successful verification code match
        let isVerificationCodeMatched = false;

        // Iterate over each matching record to check the verification code
        matchingPaymentDataArray.forEach((paymentData) => {
          // Ensure custom_fields.verification_code exists before accessing its properties
          if (
            paymentData.custom_fields &&
            paymentData.custom_fields.verification_code &&
            paymentData.custom_fields.verification_code.response ===
              formData?.verificationCode
          ) {
            setIsVerificationMatched(true);
            isVerificationCodeMatched = true;

            if (isVerificationCodeMatched) {
              if (botChannelValue === 0) {
                setLoading(false);
                toast.success("Payment Success", {
                  onClose: () => navigateToThankYou(),
                });
              } else {
                setLoading(false);
                toast.success("Payment Success");
                setPaymentVerified(true);
              }
            }
          }
        });

        if (!isVerificationCodeMatched) {
          setLoading(false);
          toast.warning("Please pay your balance first.");
        }
      } else {
        setLoading(false);
        toast.error("No payment data found");
      }
    } catch (error) {
      console.error("Error fetching payment data:", error);
    }
  };

  const checkFormData = async () => {
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

      console.log("All payment data:", result);

      const matchingPaymentDataArray = result.payments.filter(
        (payment) => payment.form_id === currentChannelFormId
      );

      console.log(matchingPaymentDataArray);

      if (matchingPaymentDataArray.length > 0) {
        console.log(
          "Found matching payment data records:",
          matchingPaymentDataArray
        );

        let isVerificationSuccessful = false;

        matchingPaymentDataArray.forEach((paymentData) => {
          if (
            paymentData.custom_fields &&
            paymentData.custom_fields.verification_code &&
            paymentData.custom_fields.verification_code.response ===
              formData?.verificationCode
          ) {
            isVerificationSuccessful = true;
          }
        });

        if (isVerificationSuccessful) {
          setLoading(false);
          toast.success("Payment Success", {
            onClose: () => navigateToThankYou(),
          });
        } else {
          setLoading(false);
          toast.warning("Please pay your balance first.");
        }
      } else {
        console.log(`No payment data found `);
      }
    } catch (error) {
      console.error("Error fetching payment data:", error);
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
            <h1>Your Verification Code is</h1>
            <h3>{formData?.verificationCode}</h3>
          </div>

          {(!isVerificationMatched || botChannelValue === 0) &&
            botChannelValue <= 6 && (
              <div className="d-flex justify-content-center mt-5">
                <button
                  type="submit"
                  className="btn-validate"
                  disabled={loading}
                  onClick={fetchPaymentData}
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
                onClick={checkFormData}
              >
                {loading ? (
                  <div className="lds-dual-ring1validate"></div> // Show loading spinner if loading
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
                  {agentCount === "1" && <MoonclerkEmbed />}
                  {agentCount === "2" && <MonthlyPlanDiscount2 />}
                  {agentCount === "3" && <MonthlyPlanDiscount3 />}
                  {(agentCount === "4" || parseInt(agentCount) > 4) && (
                    <MonthlyPlanDiscount4 />
                  )}
                </>
              )}
            </>
          ) : null}

          {botChannelValue >= 1 &&
            botChannelValue <= 6 &&
            isVerificationMatched && <TestChannel />}
        </div>
      </div>
    </div>
  );
};

export default Payments;
