import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage';
import { ContactsPage } from './containers/contactsPage/ContactsPage';

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const ROUTES = {
    CONTACTS: '/contacts',
    APPOINTMENTS: '/appointments'
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <div>
      <nav>
        <Link to={ROUTES.CONTACTS}>Contacts</Link>
        <Link to={ROUTES.APPOINTMENTS}>Appointments</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Redirect to={ROUTES.CONTACTS} />
        </Route>
        <Route path={ROUTES.CONTACTS}>
          {/* 
          Add props to ContactsPage 
          */}
          <ContactsPage />
        </Route>
        <Route path={ROUTES.APPOINTMENTS}>
          {/* 
          Add props to AppointmentsPage
          */}
          <AppointmentsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
