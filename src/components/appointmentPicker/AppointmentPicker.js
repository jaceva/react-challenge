import React from 'react';
import { ProviderPicker } from '../providerPicker/ProviderPicker';
import { DatePicker } from '../datePicker/DatePicker';
import { TimePicker } from '../timePicker/TimePicker';

export const AppointmentPicker = () => {
  return (
    <div style={{border: "1px solid black"}}>
      <h3>Patient Appontment Picker Component</h3>
      <ProviderPicker />
      <DatePicker />
      <TimePicker />
      <button>Submit Appointment</button>
    </div>
  )
}