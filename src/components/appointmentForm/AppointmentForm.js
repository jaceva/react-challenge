import React from 'react';

<<<<<<< HEAD
=======
import { ContactPicker } from '../contactPicker/ContactPicker';

>>>>>>> 7d26f885e3cdb223e4e835db93f8a05179816ceb
export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date().toLocaleDateString('en-US').split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2,'0')}`;
<<<<<<< HEAD
=======
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
>>>>>>> 7d26f885e3cdb223e4e835db93f8a05179816ceb
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Appointment Title:
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Appointment With:
        <ContactPicker
          name="contact"
          value={contact}
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
          min={getTodayString()}
          value={date}
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
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </label>
      <br />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
