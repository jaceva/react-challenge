import React from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker';
import { DatePicker } from '../datePicker/DatePicker';
import { TimePicker } from '../timePicker/TimePicker';

export const AppointmentMaker = () => {
  return (
    <form>
      <ContactPicker />
      <DatePicker />
      <TimePicker />
      <button>Submit Appointment</button>
    </form>
  )
}