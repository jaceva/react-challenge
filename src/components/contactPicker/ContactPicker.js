import React from "react";

export const ContactPicker = ({ name, onChange, contacts }) => {
  return (
    <>
      <select name={name} onChange={onChange}>
        {contacts.map((contact, index) => {
          return (
            <option value={contact} key={index}>
              {contact}
            </option>
          );
        })}
      </select>
    </>
  );
};
