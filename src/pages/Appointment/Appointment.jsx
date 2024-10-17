import React, { useEffect, useState } from "react";
import "./Appointment.css";
import "./bookingresponsive.css";
import calendar from "../../img/calendar.png";

import { Link as RouterLink } from "react-router-dom";
import moment from "moment-timezone";
import BookingForm from "./Component/BookingForm";
import Info from "./Component/Info";

const initialAppointmentData = {
  calendarId: "tYBftnzoLm0YUHCGfGfD",
  selectedTimezone: moment.tz.guess(),
  selectedDate: "",
  selectedTime: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const Appointment = () => {
  const [timeZones, setTimeZones] = useState(moment.tz.names()); // Get all time zones

  return (
    <div className="appointment appointment-container ">
      <RouterLink to="/">
        <button className="cta  m-2">
          <svg
            viewBox="0 0 46 16"
            height="10"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            id="arrow-horizontal"
          >
            <path
              transform="scale(-1, 1) translate(-30)"
              d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
              data-name="Path 10"
              id="Path_10"
            ></path>
          </svg>
          <span class="hover-underline-animation"> Home </span>
        </button>
      </RouterLink>

      <div className="column info">
        <Info />
      </div>

      <div className="column book-col">
        <div className="book-holder">
          <div className="">
            <img
              src={calendar}
              alt="Appointment illustration"
              className="info-image-book"
            />
            <h1 className="title-book">Appointment Details</h1>
          </div>

          <BookingForm
            initialData={initialAppointmentData}
            timeZones={timeZones}
          />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
