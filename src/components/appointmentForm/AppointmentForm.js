import React from 'react';

import { ContactPicker } from '../contactPicker/ContactPicker';
import { TimePicker } from '../timePicker/TimePicker';

export const AppointmentForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <ContactPicker />
      
      <TimePicker />
      <input type="submit" value="Add Appointment"/>
    </form>
  )
}