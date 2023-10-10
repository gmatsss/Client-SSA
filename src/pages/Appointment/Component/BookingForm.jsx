import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment-timezone";
import TimeZoneSelect from "./TimeZoneSelect";
import TimeSlotSelect from "./TimeSlotSelect";

const BookingForm = ({ initialData, timeZones }) => {
  const [timeSlots, setTimeSlots] = useState([]);
  const [isFetching, setIsFetching] = useState(false); // State to track fetching status

  const [appointmentData, setAppointmentData] = useState({
    ...initialData,
    selectedDate: moment().format("YYYY-MM-DD"), // Set today's date as default
  });
  // Define the initial state for appointmentData
  const initialAppointmentData = {
    ...initialData,
    selectedDate: moment().format("YYYY-MM-DD"),
  };
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prevState) => ({ ...prevState, [name]: value }));
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

  const getOffsetForTimeZone = (zone) => {
    const offsetMinutes = moment.tz(zone).utcOffset();
    const hours = Math.abs(Math.floor(offsetMinutes / 60));
    const minutes = Math.abs(offsetMinutes % 60);
    return `${offsetMinutes >= 0 ? "+" : "-"}${String(hours).padStart(
      2,
      "0"
    )}:${String(minutes).padStart(2, "0")}`;
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

    const timeZoneOffset = getOffsetForTimeZone(
      appointmentData.selectedTimezone
    );

    // Extract only the date and time from selectedTime without the timezone offset
    const dateTimeOnly =
      appointmentData.selectedTime.split(/[-+]\d{2}:\d{2}/)[0];

    // Use only the dateTimeOnly as the selectedSlot and append the timeZoneOffset
    const selectedSlot = `${dateTimeOnly}${timeZoneOffset}`;

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
        selectedSlot: selectedSlot, // Use the combined value here
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
        throw new Error(data.selectedSlot.message || "An error occurred.");
      }

      setLoading(false);
      toast.success("Book Success! You will be emailed by our team.");
      setAppointmentData(initialAppointmentData);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    setIsFetching(true); // Set fetching status to true at the start of the effect

    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6Inc4aHVUREQ1QzhxQVB0RmJZNW5rIiwiY29tcGFueV9pZCI6IkkxTFUyYW1aSHpQWWo2YUdXMlRCIiwidmVyc2lvbiI6MSwiaWF0IjoxNjk1ODk0NzA2ODMwLCJzdWIiOiJ1c2VyX2lkIn0.wtUxGmmuzSI4V8V3ofam4fWatNsa_0HitDUcE-GSUbM"
    );

    const startDate = new Date().getTime(); // Today's date in milliseconds

    const endDate = new Date();
    endDate.setFullYear(endDate.getFullYear() + 3); // Set the date 3 years from now

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://rest.gohighlevel.com/v1/appointments/slots?calendarId=tYBftnzoLm0YUHCGfGfD&startDate=${startDate}&endDate=${endDate.getTime()}&timezone=${
        appointmentData.selectedTimezone
      }`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // Access the slots using the selected date as the key
        const selectedDateSlots = result[appointmentData.selectedDate];

        setIsFetching(false); // Set fetching status to false once fetch is complete

        // If found, set the time slots for that date
        if (selectedDateSlots) {
          setTimeSlots(selectedDateSlots.slots);
        }
      })
      .catch((error) => console.log("error", error));
  }, [appointmentData.selectedTimezone, appointmentData.selectedDate]); // Added dependency on selectedTimezone

  return (
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
          <TimeSlotSelect
            selectedTime={appointmentData.selectedTime}
            handleInputChange={handleInputChange}
            timeSlots={timeSlots}
            isFetching={isFetching}
            selectedTimeZone={appointmentData.selectedTimezone} // Pass the selectedTimeZone prop
          />
        </div>
      </div>

      <TimeZoneSelect
        timeZones={timeZones}
        selectedTimeZone={appointmentData.selectedTimezone}
        handleInputChange={handleInputChange}
      />

      <div className="d-flex justify-content-center">
        <button type="submit" className="btn-book" disabled={loading}>
          {loading ? (
            <div className="lds-dual-ring1book"></div> // Show loading spinner if loading
          ) : (
            "  Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
