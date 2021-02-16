import React, {useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Appointments } from './containers/appointments/Appointments';
import { Contacts } from './containers/contacts/Contacts';

function App() {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);
  
 
  return (
    <div>
      <Switch>
        <Route path="/contacts"><Appointments /></Route>
        <Route path="/appointments"><Contacts /></Route>
      </Switch>
    </div>
  );
}

export default App;
