import moment from "moment-timezone";
import React, { useEffect, useState } from "react";

const TimeZoneSelect = ({ timeZones, selectedTimeZone, handleInputChange }) => {
  const [currentUserTimeZone, setCurrentUserTimeZone] = useState("");

  useEffect(() => {
    const detectedTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setCurrentUserTimeZone(detectedTimeZone);
  }, []);

  const formatTimeZoneOption = (zone) => {
    const currentTime = moment.tz(zone).format("HH:mm");
    const gmtOffset = moment.tz(zone).format("Z");
    return `${zone} (GMT${gmtOffset}) - ${currentTime}`;
  };

  return (
    <div className="form__group_book field">
      <select
        className="form__field_book"
        name="selectedTimezone"
        value={selectedTimeZone || currentUserTimeZone}
        onChange={handleInputChange}
        style={{ color: "white" }}
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
  );
};

export default TimeZoneSelect;
