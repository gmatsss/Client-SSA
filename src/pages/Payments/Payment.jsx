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

const Payments = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const agentCount = String(location.state?.agentCount); // Convert to string
  const formData = location.state?.formData; // Access the completeFormData

  const [currentFormId, setCurrentFormId] = useState(null);

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

  console.log("Received Form Data in Payments:", formData);
  console.log("Formid", currentFormId);
  useEffect(() => {
    if (!isYearly) {
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
  return (
    <div className="">
      <div className="payments-container ">
        <div className="payments-column">
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

            <h1>Your Verification Code is</h1>
            <h3>{formData.verificationCode}</h3>
          </div>
        </div>

        <div className="payments-column moonclerkholder">
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
              {agentCount === "1" && (
                <>
                  <MoonclerkEmbed />
                </>
              )}
              {agentCount === "2" && (
                <>
                  <MonthlyPlanDiscount2 />
                </>
              )}
              {agentCount === "3" && (
                <>
                  <MonthlyPlanDiscount3 />
                </>
              )}
              {(agentCount === "4" || parseInt(agentCount) > 4) && (
                <>
                  <MonthlyPlanDiscount4 />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payments;
