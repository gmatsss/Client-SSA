import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Monthlytext from "./Choose/Monthly-text";
import YearlyPlan from "./Choose/Yearly-text";
import Monthly from "./plan/Monthly";
import Yearly from "./plan/Yearly";
import { useState } from "react";
import logo from "../../img/Logo.png";
import "./Payments.css";

const Payments = () => {
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
            {isYearly ? <YearlyPlan /> : <Monthlytext />}
          </div>
        </div>

        <div className="payments-column">
          {isYearly ? <Yearly /> : <Monthly />}
        </div>
      </div>
    </div>
  );
};

export default Payments;
