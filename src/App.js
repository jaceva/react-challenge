import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { UserMain } from './containers/userMain/UserMain';
import { Login } from './containers/login/Login';
import { Appointments } from './containers/appointments/Appointments';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <p>App State: NavbarInfo (App Logo or Patient Info or Provider Info)</p>
      <Navbar />
      <Switch>
        <Route exact path="/"><UserMain /></Route>
        <Route path="/login"><Login /></Route>
        <Route exact path="/provider"><Appointments userType="Provider"/></Route>
        <Route exact path="/patient"><Appointments userType="Patient"/></Route>
      </Switch>
    </div>
  );
}

export default App;
