import React, { useState } from 'react';

import { getPatientAppointments, addAppointment } from '../../data';

import { AppointmentPicker } from '../appointmentPicker/AppointmentPicker';
import { AppointmentCard } from '../../components/appointmentCard/AppointmentCard';

export const Patient = ({patient, providers}) => {
  const [appointments, setAppointments] = useState(getPatientAppointments(patient.username))

  const addAppointmentHandler = (provider, date, time) => {
    addAppointment(patient.username, provider, date, time);
    setAppointments(getPatientAppointments(patient.username));
  }

  return (
    <div>
      <AppointmentPicker
        providers={providers}
        addAppointment={addAppointmentHandler}
      />
      <h4>Appointment List</h4>
      {appointments.map(appointment => 
        <AppointmentCard
          key={appointment.id}
          userType={'Patient'}
          appointment={appointment}
        />)}
    </div>
  );
}