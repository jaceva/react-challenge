import React, { useState } from 'react';

import { ProviderPicker } from '../../components/providerPicker/ProviderPicker';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { TimePicker } from '../../components/timePicker/TimePicker';

import { getAvialableTimes } from '../../data';


export const AppointmentPicker = ({addAppointment, providers}) => {
  const [selectedProvider, setSelectedProvider] = useState(providers[0].username);
  const [selectedDate, setSelectedDate] = useState(new Date());

  //const [times, setTimes] = useState(getAvialableTimes(selectedProvider, selectedDate));
  let times = getAvialableTimes(selectedProvider, selectedDate)
  const [selectedTime, setSelectedTime] = useState(times[0]);

  const setTimes = () => {
    times = getAvialableTimes(selectedProvider, selectedDate)
  }

  const setProviderHandler = value => {
    setSelectedProvider(value);
    setTimes();
  }

  const addAppointmentHandler = () => {
    addAppointment(selectedProvider, selectedDate, selectedTime)
    setTimes();
  }

  return (
    <div>
      <ProviderPicker 
        providers={providers}
        setProvider={setProviderHandler}
      /><br/>
      <br/>
      Select The Date<br/>
      <DatePicker 
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
      /><br/>
      <br/>
      <TimePicker 
        times={times}
        setTime={setSelectedTime}
      /><br/>
      <br/>
      <button onClick={addAppointmentHandler}>Submit Appointment</button>
    </div>
  )
}