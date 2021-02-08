import React from 'react';
import { ApptCard } from '../../components/apptCard/ApptCard';
import { ApptPicker } from '../../components/apptPicker/ApptPicker';
import { ApptsSubmitter } from '../../components/apptsSubmitter/ApptsSubmitter';

export const Appointments = ({userType}) => {
  let picker = <ApptPicker />
  if (userType == 'Provider'){
    picker = <ApptsSubmitter />
  } 
  
  return (
    <div>
      <p>Appointments State: appointments </p>
      <h1>{userType} Main Page</h1>
      <p>This page is the appointments page for patients and providers.</p>
      <p>Patients can create an appointment by selecting a provider a date and a time. Appointments made by the patient are listed with the provider, date and time for each.</p>
      <p>Providers create appointment ranges by picking a start date and time and an end date and time. Appointments made with the current provider are listed with patient name, date and time.</p>
      {picker}
      <h2>Appointment List</h2>
      <ApptCard />
    </div>
  )
}