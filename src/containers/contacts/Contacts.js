import React from 'react';

import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';


export const Contacts = ({
  contacts,
  addContact
}) => {
  
  return (
    <div>
      <ContactForm 
        addContact={addContact}  
      />
      <TileList tiles={contacts}/>
    </div>
  )
}