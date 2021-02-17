import React, { useState, useEffect } from "react";

import { ContactPicker } from "../contactPicker/ContactPicker";
import DatePicker from "react-datepicker";

export const AppointmentForm = ({ contacts, addAppointment }) => {
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState(
    contacts.length > 0 ? contacts[0].name : ""
  );
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const today = new Date();
  const month = (today.getMonth() + 1 < 10 ? "0" : "") + (today.getMonth() + 1);
  const day = (today.getDate() < 10 ? "0" : "") + today.getDate();
  const todayString = `${today.getFullYear()}-${month}-${day}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time);
  };

  const getContactNames = () => {
    if (contacts.length === 0) {
      return ["No Contacts"];
    }
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Appointment Title:
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Appointment With:
        <ContactPicker
          name="contact"
          contacts={getContactNames()}
          onChange={(e) => setContact(e.target.value)}
        />
      </label>
      <br />
      <label>
        Appointment Date:
        <input
          type="date"
          name="date"
          min={todayString}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Appointment Time:
        <input
          type="time"
          name="time"
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </label>
      <br />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
