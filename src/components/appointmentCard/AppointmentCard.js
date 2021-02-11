import React from 'react';

export const AppointmentCard = ({userType, appointment}) => {
  let name;
  if (userType === 'Patient') {
    name = appointment.provider;
  } else if (userType === 'Provider') {
    name = `${appointment.lastname}, ${appointment.firstname}`;
  }
  return (
    <div>
      {name}<br/>
      {(new Date(appointment.date).toLocaleDateString('en-US'))}<br/>
      {appointment.time}<br/>
      <br/>
    </div>
  )
}