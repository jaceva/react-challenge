import React, { useState } from 'react';

import { ContactPicker } from '../contactPicker/ContactPicker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const AppointmentForm = ({
  contacts,
  addAppointment}) => {
  
    const [title, setTitle] = useState('')
    const [contact, setContact] = useState(contacts[0])
    const [date, setDate] = useState(new Date());

    const handleSubmit = e => {
      e.preventDefault();
      addAppointment(title, contact, date)
    }

    return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Appointment Title:
          <input 
            type="text" 
            name="title" 
            onChange={e => setTitle(e.target.value)}
          />
        </label><br/>
        <label>
          Appointment With:
          <ContactPicker
            name="contact"
            contacts={contacts}
            selected={contact}
            onChange={e => setContact(e.target.value)}
          />
        </label><br/>
        <label>
          Appointment Date:
          <DatePicker 
            name="date"
            selected={date}
            onChange={date => setDate(date)}
          />
        </label><br/>
        <input type="submit" value="Add Appointment"/>
      </form>
    </>
  )
}