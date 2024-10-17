// BookingFormFields.js
import React from "react";
import TimeSlotSelect from "./TimeSlotSelect";
import TimeZoneSelect from "./TimeZoneSelect";
import "./BookingFormFields.css";

const BookingFormFields = ({
  appointmentData,
  handleInputChange,
  timeSlots,
  isFetching,
  timeZones,
  loading,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="booking-form-ismobile">
      <div className="form-row-ismobile">
        <div className="form__group_book-ismobile field ">
          <input
            className="form__field_book-ismobile"
            placeholder="First name"
            type="text"
            name="firstName"
            value={appointmentData.firstName}
            onChange={handleInputChange}
          />
          <label htmlFor="firstName" className="form__label_book-ismobile">
            First Name
          </label>
        </div>

        <div className="form__group_book-ismobile field ">
          <input
            className="form__field_book-ismobile"
            placeholder="Last name"
            type="text"
            name="lastName"
            value={appointmentData.lastName}
            onChange={handleInputChange}
          />
          <label htmlFor="lastName" className="form__label_book-ismobile">
            Last Name
          </label>
        </div>

        <div className="form__group_book-ismobile field ">
          <input
            className="form__field_book-ismobile"
            placeholder="Email"
            type="email"
            name="email"
            value={appointmentData.email}
            onChange={handleInputChange}
          />
          <label htmlFor="email" className="form__label_book-ismobile">
            Email
          </label>
        </div>

        <div className="form__group_book-ismobile field ">
          <input
            className="form__field_book-ismobile"
            placeholder="Phone"
            type="tel"
            name="phone"
            value={appointmentData.phone}
            onChange={handleInputChange}
          />
          <label htmlFor="phone" className="form__label_book-ismobile">
            Phone
          </label>
        </div>

        <div className="form__group_book-ismobile field ">
          <input
            className="form__field_book-ismobile"
            type="date"
            name="selectedDate"
            value={appointmentData.selectedDate}
            onChange={handleInputChange}
          />
          <label htmlFor="selectedDate" className="form__label_book-ismobile">
            Date
          </label>
        </div>

        <TimeSlotSelect
          selectedTime={appointmentData.selectedTime}
          handleInputChange={handleInputChange}
          timeSlots={timeSlots}
          isFetching={isFetching}
          selectedTimeZone={appointmentData.selectedTimezone}
        />

        <TimeZoneSelect
          timeZones={timeZones}
          selectedTimeZone={appointmentData.selectedTimezone}
          handleInputChange={handleInputChange}
        />

        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn-book-ismobile"
            disabled={loading}
          >
            {loading ? (
              <div className="lds-dual-ring1book-ismobile"></div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default BookingFormFields;
