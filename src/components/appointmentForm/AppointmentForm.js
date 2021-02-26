import React from 'react';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const today = new Date();
    const month =
      (today.getMonth() + 1 < 10 ? '0' : '') + (today.getMonth() + 1);
    const day = (today.getDate() < 10 ? '0' : '') + today.getDate();
    return `${today.getFullYear()}-${month}-${day}`;
  };

  return (
    <div>
      AppointmentForm
    </div>
  );
};
