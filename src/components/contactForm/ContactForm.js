import React from 'react';

export const ContactForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      Contact Form
      <input type="submit" value="Add Contact"/>
    </form>
  )
}