import React, { useState } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import { Appointments } from './containers/appointments/Appointments';
import { Contacts } from './containers/contacts/Contacts';

function App() {
  console.log("hi")
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  const addAppointment = (title, contact, date) => {
    setAppointments([...appointments, {title: title, contact: contact, date: date.toLocaleDateString('en-US')}])
  }

  const addContact = (name, phone, email) => {
    setContacts([...contacts, {name: name, phone: phone, email: email}])
  }

  const getContactNames = () => contacts.map(
    contact => contact.name
  )

  return (
    <div>
      <nav>
        <Link to="/appointments">Appointments</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
      <Switch>
        <Route exact path="/"><Redirect to="/appointments" /></Route>
        <Route path="/contacts"><Contacts 
          contacts={contacts} 
          addContact={addContact} 
        /></Route>
        <Route path="/appointments"><Appointments 
          appointments={appointments} 
          addAppointment={addAppointment}
          contacts={getContactNames()} 
        /></Route>
      </Switch>
    </div>
  );
}

export default App;
