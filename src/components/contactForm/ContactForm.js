import React, { useState } from 'react';

export const ContactForm = ({
  addContact}) => {
  
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = e => {
      e.preventDefault();
      addContact(name, phone, email)
    }

    return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Contact Name:
          <input 
            type="text" 
            name="name" 
            onChange={e => setName(e.target.value)}
          />
        </label><br/>
        <label>
        Contact Phone:
        <input 
            type="text" 
            name="phone" 
            onChange={e => setPhone(e.target.value)}
          />
        </label><br/>
        <label>
        Contact Email:
          <input 
            type="text" 
            name="email" 
            onChange={e => setEmail(e.target.value)}
          />
        </label><br/>
        <input type="submit" value="Add Contact"/>
      </form>
    </>
  )
}