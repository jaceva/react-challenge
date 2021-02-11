import React from 'react';

import {
  getProviderAppointments } from '../../data';

import { AppointmentCard } from '../../components/appointmentCard/AppointmentCard';

export const Provider = ({provider}) => {  
  const appointments = getProviderAppointments(provider.username);

  return (
    <div>
      <h4>Appointment List</h4>
      {appointments.map(appointment => 
        <AppointmentCard
          key={appointment.id}
          userType={'Provider'}
          appointment={appointment}
        />)}
    </div>
  )
}