import React from 'react';

import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';


export const Contacts = () => {
  return (
    <div>
      <ContactForm 
        handleSubmit={() => {}}  
      />
      <TileList />
    </div>
  )
}