import React from 'react';

import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const Contacts = ({
  contacts,
  addContact
}) => {
  
  return (
    <div>
      <h2>Add Contact</h2>
      <ContactForm 
        addContact={addContact}  
      />
      <h2>Contacts</h2>
      <TileList tiles={contacts}/>
    </div>
  );
};