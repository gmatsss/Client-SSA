import React from "react";
import moment from "moment-timezone";

const TimeSlotSelect = ({
  selectedTime,
  handleInputChange,
  timeSlots,
  isFetching,
  selectedTimeZone, // Add selectedTimeZone as a prop
}) => {
  const formatTimeDisplay = (isoTime) => {
    const date = moment.tz(isoTime, selectedTimeZone); // Convert the isoTime to the selected timezone
    let hour = date.hours();
    const minute = String(date.minutes()).padStart(2, "0");
    const suffix = hour >= 12 ? "PM" : "AM";
    hour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${hour}:${minute} ${suffix}`;
  };

  return (
    <div className="form__group_book field">
      <select
        className="form__field_book"
        name="selectedTime"
        value={selectedTime}
        onChange={handleInputChange}
        style={{ color: "white" }}
      >
        <option value="" style={{ color: "black" }}>
          {isFetching ? "Finding slot..." : "Select Time"}
        </option>
        {!isFetching &&
          timeSlots.map((time) => (
            <option key={time} value={time} style={{ color: "black" }}>
              {formatTimeDisplay(time)}
            </option>
          ))}
      </select>
      <label htmlFor="name" className="form__label_book">
        Time
      </label>
    </div>
  );
};

export default TimeSlotSelect;
