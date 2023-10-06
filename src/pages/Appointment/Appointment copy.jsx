import React, { useEffect, useState } from "react";
import "./Appointment.css";
import calendar from "../../img/calendar.png";
import { toast } from "react-toastify";
import logo from "../../img/Logo.png";
import { Link as RouterLink } from "react-router-dom";
import moment from "moment-timezone";

const initialAppointmentData = {
  calendarId: "TXKejgrJJ5krHkzJlykP",
  selectedTimezone: "US/Central",
  selectedDate: "",
  selectedTime: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const timeSlots = [
  "08:00:00",
  "08:30:00",
  "09:00:00",
  "09:30:00",
  "10:00:00",
  "10:30:00",
  "11:00:00",
  "11:30:00",
  "12:00:00",
  "12:30:00",
  "13:00:00",
  "13:30:00",
  "14:00:00",
  "14:30:00",
  "15:00:00",
  "15:30:00",
  "16:00:00",
  "16:30:00",
  "17:00:00",
];

const Appointment = () => {
  const [loading, setLoading] = useState(false);
  const [timeZones, setTimeZones] = useState(moment.tz.names()); // Get all time zones
  const [currentTimeZone, setCurrentTimeZone] = useState("");
  const [appointmentData, setAppointmentData] = useState(
    initialAppointmentData
  );
  useEffect(() => {
    getCurrentTimeZone();
  }, []);

  const getCurrentTimeZone = () => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setCurrentTimeZone(timeZone);
    setAppointmentData((prevState) => ({
      ...prevState,
      selectedTimezone: timeZone,
    }));
  };

  const formatTimeZoneOption = (zone) => {
    const currentTime = moment.tz(zone).format("HH:mm");
    const gmtOffset = moment.tz(zone).format("Z");
    return `${zone} (GMT${gmtOffset}) - ${currentTime}`;
  };

  const resetFields = () => {
    setAppointmentData(initialAppointmentData);
  };

  const formatTimeDisplay = (time) => {
    const [hour, minute] = time.split(":");
    const h = parseInt(hour, 10);
    const suffix = h >= 12 ? "PM" : "AM";
    const formattedHour = h > 12 ? h - 12 : h === 0 ? 12 : h;
    return `${formattedHour}:${minute} ${suffix}`;
  };

  useEffect(() => {
    // Get today's date
    const today = new Date();
    const startDate = today.getTime();

    // Get the date 3 years from today
    const endDate = new Date(today);
    endDate.setFullYear(today.getFullYear() + 3);

    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6Inc4aHVUREQ1QzhxQVB0RmJZNW5rIiwiY29tcGFueV9pZCI6IkkxTFUyYW1aSHpQWWo2YUdXMlRCIiwidmVyc2lvbiI6MSwiaWF0IjoxNjk1ODk0NzA2ODMwLCJzdWIiOiJ1c2VyX2lkIn0.wtUxGmmuzSI4V8V3ofam4fWatNsa_0HitDUcE-GSUbM"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://rest.gohighlevel.com/v1/appointments/slots?calendarId=TXKejgrJJ5krHkzJlykP&startDate=${startDate}&endDate=${endDate.getTime()}&timezone=US/Central`,
      requestOptions
    )
      .then((response) => response.json()) // Convert the response to JSON
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  // Handler to update state when input values change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prevState) => ({ ...prevState, [name]: value }));
  };

  const getOffsetForTimeZone = (zone) => {
    const offsetMinutes = moment.tz(zone).utcOffset();
    const hours = Math.abs(Math.floor(offsetMinutes / 60));
    const minutes = Math.abs(offsetMinutes % 60);
    return `${offsetMinutes >= 0 ? "+" : "-"}${String(hours).padStart(
      2,
      "0"
    )}:${String(minutes).padStart(2, "0")}`;
  };

  const validateFields = () => {
    const fields = [
      "selectedDate",
      "selectedTime",
      "firstName",
      "lastName",
      "email",
      "phone",
    ];
    for (let field of fields) {
      if (!appointmentData[field]) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) {
      toast.warning("Please fill in all fields.");
      return;
    }

    // Ensure that both selectedDate and selectedTime have values
    if (!appointmentData.selectedDate || !appointmentData.selectedTime) {
      toast.warning("Please select both date and time.");
      return;
    }

    // Get the offset for the selected timezone
    const timeZoneOffset = getOffsetForTimeZone(
      appointmentData.selectedTimezone
    );

    // Combine the selectedDate, selectedTime, and append the timezone offset
    const selectedSlotWithOffset = `${appointmentData.selectedDate}T${appointmentData.selectedTime}${timeZoneOffset}`;

    console.log(selectedSlotWithOffset);
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6Inc4aHVUREQ1QzhxQVB0RmJZNW5rIiwiY29tcGFueV9pZCI6IkkxTFUyYW1aSHpQWWo2YUdXMlRCIiwidmVyc2lvbiI6MSwiaWF0IjoxNjk1ODk0NzA2ODMwLCJzdWIiOiJ1c2VyX2lkIn0.wtUxGmmuzSI4V8V3ofam4fWatNsa_0HitDUcE-GSUbM"
    );
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        ...appointmentData,
        selectedSlot: selectedSlotWithOffset,
      }),
      redirect: "follow",
    };

    setLoading(true);
    try {
      const response = await fetch(
        "https://rest.gohighlevel.com/v1/appointments/",
        requestOptions
      );
      const data = await response.json();

      // Check if the response was successful
      if (!response.ok) {
        // console.log(data.selectedSlot.message);
        throw new Error(data.selectedSlot.message || "An error occurred.");
      }

      setLoading(false);
      toast.success("Book Success! You will be emailed by our team.");
      resetFields();
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      toast.error(error.message);
    }
  };

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
        <RouterLink to="/" className="router-img-holder">
          <img
            src={logo}
            alt="Appointment illustration"
            className="info-image"
          />
        </RouterLink>

        <h1>
          Grab an Appointment with Us! Dive into a seamless experience with our{" "}
          <span className="glowing-text" style={{ fontWeight: "600" }}>
            Super Smart Agents
          </span>
        </h1>
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

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-col-left">
                <div className="form__group_book field mb-5">
                  <input
                    className="form__field_book"
                    placeholder="first name"
                    type="text"
                    name="firstName"
                    value={appointmentData.firstName}
                    onChange={handleInputChange}
                  />

                  <label htmlFor="name" className="form__label_book">
                    First name
                  </label>
                </div>

                <div className="form__group_book field mb-5">
                  <input
                    type="tel"
                    name="phone"
                    className="form__field_book"
                    placeholder="phone"
                    value={appointmentData.phone}
                    onChange={handleInputChange}
                  />

                  <label htmlFor="name" className="form__label_book">
                    Phone No
                  </label>
                </div>

                <div className="form__group_book field mb-5">
                  <input
                    type="date"
                    className="form__field_book"
                    placeholder="date"
                    name="selectedDate"
                    value={appointmentData.selectedDate}
                    onChange={handleInputChange}
                  />

                  <label htmlFor="name" className="form__label_book">
                    Date
                  </label>
                </div>
              </div>
              <div className="form-col-right">
                <div className="form__group_book field mb-5">
                  <input
                    className="form__field_book"
                    placeholder="last name"
                    type="text"
                    name="lastName"
                    value={appointmentData.lastName}
                    onChange={handleInputChange}
                  />

                  <label htmlFor="name" className="form__label_book">
                    Last name
                  </label>
                </div>

                <div className="form__group_book field mb-5">
                  <input
                    type="email"
                    name="email"
                    className="form__field_book"
                    placeholder="phone"
                    value={appointmentData.email}
                    onChange={handleInputChange}
                  />

                  <label htmlFor="name" className="form__label_book">
                    Email
                  </label>
                </div>

                <div className="form__group_book field mb-5">
                  <select
                    className="form__field_book"
                    name="selectedTime"
                    value={appointmentData.selectedTime}
                    onChange={handleInputChange}
                    style={{
                      color: "white",
                    }} // Set the text color based on selection
                  >
                    <option value="" style={{ color: "black" }}>
                      Select Time
                    </option>
                    {timeSlots.map((time, index) => {
                      if (index === timeSlots.length - 1) return null; // Skip the last time slot to avoid undefined for the next slot
                      return (
                        <option
                          key={index}
                          value={time}
                          style={{ color: "black" }}
                        >
                          {formatTimeDisplay(time)} -{" "}
                          {formatTimeDisplay(timeSlots[index + 1])}
                        </option>
                      );
                    })}
                  </select>

                  <label htmlFor="name" className="form__label_book">
                    Time
                  </label>
                </div>
              </div>
            </div>
            <div className="form__group_book field  ">
              <select
                className="form__field_book"
                name="selectedTimezone"
                value={appointmentData.selectedTimezone}
                onChange={handleInputChange}
                style={{
                  color: "white",
                }}
              >
                {timeZones.map((zone) => (
                  <option key={zone} value={zone} style={{ color: "black" }}>
                    {formatTimeZoneOption(zone)}
                  </option>
                ))}
              </select>
              <label htmlFor="name" className="form__label_book">
                Current Timezone
              </label>
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn-login" disabled={loading}>
                {loading ? (
                  <div className="lds-dual-ring1"></div> // Show loading spinner if loading
                ) : (
                  "  Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
