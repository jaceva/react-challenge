import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  appointments,
  addAppointment,
  contacts,
}) => {
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState(
    contacts.length > 0 ? contacts[0].name : ""
  );
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time);
  };

  return (
    <>
      <h2>Add Appointment</h2>
      <AppointmentForm
        contacts={contacts}
        setTitle={setTitle}
        setContact={setContact}
        setDate={setDate}
        setTime={setTime}
        handleSubmit={handleSubmit}
      />
      <br />
      <h2>Appointments</h2>
      <TileList tiles={appointments} />
    </>
  );
};
