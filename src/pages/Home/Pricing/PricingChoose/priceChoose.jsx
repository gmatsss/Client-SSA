import check from "../../../../img/check.svg";
import logo_small from "../../../../img/logo_small.png";
import logo from "../../../../img/Logo.png";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import "./priceChoose.css";

import Aos from "aos";
import { useEffect } from "react";

const PriceChoose = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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
    <div>
      <div className="pricing_choose">
        <div className="">
          <div
            style={{
              display: "inline-block",
              marginBottom: "20px",
              marginTop: "50px",
            }}
          >
            <img src={logo_small} alt="" />
            <h1 style={{ fontWeight: "600" }}>Pricing</h1>
          </div>

          <div>
            <h3 style={{ fontWeight: "600" }}>
              <span style={{ color: "#27B3DF" }}>
                Unlock the future of Sales and Customer Service
              </span>
              <span> with Super Smart Agent</span>
            </h3>
            <p className="mt-4">
              Imagine a virtual assistant that's available around the clock,
              fluent in 106 languages, and doesn't require <br /> overtime pay
              or benefits. Sounds too good to be true? Meet the Super Smart
              Agent.
            </p>
          </div>
        </div>

        <h3>Why Choose Super Smart Agent</h3>
        <div className="d-flex flex-column mt-5">
          <div
            data-aos="fade-up"
            className="CardInfo d-flex mx-auto mb-4"
            style={{
              backgroundColor: "#4C4D62",
              padding: "13px",
              width: "50%",
            }}
          >
            <div
              style={{
                marginRight: "20px",
              }}
            >
              <img src={check} className="CheckImg " alt="" />
            </div>
            <div className="text-start">
              <h3 style={{ color: "white" }}>Always Available</h3>
              <h5 style={{ color: "white" }}>
                Operates 24/7, ensuring your customer are always attended to.
              </h5>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="CardInfo d-flex mx-auto mb-4"
            style={{
              backgroundColor: "#4C4D62",
              padding: "13px",
              width: "50%",
            }}
          >
            <div
              style={{
                marginRight: "20px",
              }}
            >
              <img src={check} className="CheckImg " alt="" />
            </div>

            <div className="text-start">
              <h3 style={{ color: "white" }}>Multilingual Mastery</h3>
              <h5 style={{ color: "white" }}>
                Communicates fluently in 106 languages, catering to a global
                audience
              </h5>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="CardInfo d-flex mx-auto mb-4"
            style={{
              backgroundColor: "#4C4D62",
              padding: "13px",
              width: "50%",
            }}
          >
            <div
              style={{
                marginRight: "20px",
              }}
            >
              <img src={check} className="CheckImg " alt="" />
            </div>

            <div className="text-start">
              <h3 style={{ color: "white" }}>Cost-Efficient</h3>
              <h5 style={{ color: "white" }}>
                No overtime, no benefit, and absolutely no complains
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="TailoredOffer_BG">
        <div
          data-aos="fade-up"
          className="CardInfo d-flex mx-auto mb-4"
          style={{
            backgroundColor: "#4C4D62",
            padding: "13px",
            width: "50%",
          }}
        >
          <div
            style={{
              marginRight: "20px",
            }}
          >
            <img src={check} className="CheckImg " alt="" />
          </div>

          <div className="text-start">
            <h3 style={{ color: "white" }}>Custom-Tailored</h3>
            <h5 style={{ color: "white" }}>
              Trained specifically on your data for optimal performance
            </h5>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="CardInfo d-flex mx-auto mb-4"
          style={{
            backgroundColor: "#4C4D62",
            padding: "13px",
            width: "50%",
          }}
        >
          <div
            style={{
              marginRight: "20px",
            }}
          >
            <img src={check} className="CheckImg " alt="" />
          </div>

          <div className="text-start">
            <h3 style={{ color: "white" }}>Limitless Scalability</h3>
            <h5 style={{ color: "white" }}>
              Limitless Scalability: Ready to grow with your business, no matter
              the scale
            </h5>
          </div>
        </div>
        {/* offer section */}
        <div
          data-aos="zoom-in"
          className="Offer d-flex justify-content-center "
        >
          <div className="offer-box">
            <h1 className="offer-title">🔥Exclusive Offer🔥</h1>
            <p className="mt-5">
              Get started with your very own Super Smart Agent for just a
              one-time fee of $495 and a monthly charge of $100. This includes
              access to one communication channel of your choice, be it Website,
              FB Messenger, Twilio, Telegram, or WhatsApp. Need more channels?
              Add as many as you like for just $19/mo each
            </p>
          </div>
        </div>
        {/* Average Cost */}
        <div className="Cost d-flex flex-column justify-content-center align-items-center mt-5">
          <h3 style={{ fontWeight: "700" }}>
            Average Cost of a Customer Service Agent
          </h3>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            className="mt-4"
          >
            <Typography style={{ fontSize: "20px", fontWeight: "700" }}>
              Monthly
            </Typography>
            <AntSwitch
              defaultChecked={false}
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
        </div>
      </div>
    </div>
  );
};

export default PriceChoose;
