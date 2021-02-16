import React from 'react';

import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const Appointments = () => {
  return (
    <div>
      <AppointmentForm 
        handleSubmit={() => {}}  
      />
      <TileList />
    </div>
  )
}