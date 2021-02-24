import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage';
import { ContactsPage } from './containers/contactsPage/ContactsPage';

function App() {
  const ROUTES = {
    CONTACTS: '/contacts',
    APPOINTMENTS: '/appointments'
  };

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
          <ContactsPage />
        </Route>
        <Route path={ROUTES.APPOINTMENTS}>
          <AppointmentsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
