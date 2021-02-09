import React from 'react';
import { ProviderPicker } from '../providerPicker/ProviderPicker';
import { DatePicker } from '../datePicker/DatePicker';
import { TimePicker } from '../timePicker/TimePicker';

export const ApptsSubmitter = () => {
  return (
    <div style={{border: "1px solid black"}}>
      <h3>Provider Appontment Submitter Component</h3>
      <h4>Appointment Range Start</h4>
      <DatePicker />
      <TimePicker />
      <h4>Appointment Range End</h4>
      <DatePicker />
      <TimePicker />
      <button>Submit Availability</button>
    </div>
  )
}