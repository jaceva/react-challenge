import React, { useState } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments([
      ...appointments,
      {
        title: title,
        contact: contact,
        date: date,
        time: time,
      },
    ]);
  };

  const addContact = (name, phone, email) => {
    setContacts([
      ...contacts,
      {
        name: name,
        phone: phone,
        email: email,
      },
    ]);
  };

  return (
    <>
      <nav>
        <Link to={ROUTES.CONTACTS}>Contacts</Link>
        <Link to={ROUTES.APPOINTMENTS}>Appointments</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Redirect to={ROUTES.CONTACTS} />
        </Route>
        <Route path={ROUTES.CONTACTS}>
          <ContactsPage contacts={contacts} addContact={addContact} />
        </Route>
        <Route path={ROUTES.APPOINTMENTS}>
          <AppointmentsPage
            appointments={appointments}
            addAppointment={addAppointment}
            contacts={contacts}
          />
        </Route>
      </Switch>
    </>
  );
}

export default App;
