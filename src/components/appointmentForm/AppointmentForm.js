import React, { useState, useEffect } from 'react';

import { ContactPicker } from '../contactPicker/ContactPicker';
import DatePicker from "react-datepicker";

export const AppointmentForm = ({
  contacts,
  addAppointment
}) => {
    const initContact = (contacts.length > 0) ? contacts[0].name : '';
    const [title, setTitle] = useState('');
    const [contact, setContact] = useState(initContact);
    const [date, setDate] = useState(new Date());
    const [submitValid, setSubmitValid] = useState(false);

    const handleSubmit = e => {
      e.preventDefault();
      addAppointment(title, contact, date);
    };

    const getContactNames = () => {
      if (contacts.length === 0){
        return ['No Contacts'];
      }
      return contacts.map(contact => contact.name);
    };

    useEffect(() => {
      setSubmitValid(title !== '' && contact !== '');
    }, [title, contact]);

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
            contacts={getContactNames()}
            onChange={e => setContact(e.target.value)}
          />
        </label><br/>
        <label>
          Appointment Date:
          <DatePicker 
            name="date"
            selected={date}
            onChange={date => setDate(date)}
            minDate={new Date()}
          />
        </label><br/>
        <input 
          type="submit" 
          disabled={!submitValid}
          value="Add Appointment"/>
      </form>
    </>
  );
};