import React from 'react';

import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const Appointments = ({
  appointments, 
  addAppointment,
  contacts
}) => {
  return (
    <>
      <h2>Add Appointment</h2>
      <AppointmentForm 
        contacts={contacts}
        addAppointment={addAppointment}  
      /><br/>
      <h2>Appointments</h2>
      <TileList tiles={appointments}/>
    </>
  );
};