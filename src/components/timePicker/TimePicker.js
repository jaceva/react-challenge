import React from 'react';

export const TimePicker = ({contacts}) => {
  return (
    <>
      <select name="contacts" id="contacts">
      {contacts.map((contact, index) => {
      return <option value={contact} key={index}>{contact}</option>
      })}
      </select>
    </>
  )
}