import React, { useState, useEffect } from 'react';
import { useHistory, Switch, Route, Redirect } from 'react-router-dom';

import { Protected } from './components/protected/Protected';
import { Login } from './containers/login/Login';
import { NewPatient } from './containers/newPatient/NewPatient';
import { Provider } from './containers/provider/Provider';
import { Patient } from './containers/patient/Patient';
import { Navbar } from './components/navbar/Navbar';
import { getProviders, addPatient } from './data';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [navName, setNavName] = useState('Appointments App');
  const history = useHistory();
  const providers = getProviders();

  useEffect(() => {
    if(loggedIn){
      history.push(`/${user.type}`);
      const lastname = (user.lastname === '') ? '' : `${user.lastname}, `
      setNavName(`${lastname}${user.firstname}`);
    }
  },[loggedIn, history, user]);
  
  // logs out of patient or provider page
  const logOut = () => {
    setLoggedIn(false);
    setNavName('Appointments App');
    history.push('/login')
  }

  // handler for new patient button click
  const newPatient = () =>
    history.push('/newpatient');

  // handler for new patient form
  const addNewPatient = (firstname, lastname, username, password) => {
    addPatient(firstname, lastname, username, password);
    history.push('/login');
  }

  return (
    <div>
      <Navbar 
        name={navName}
        loggedIn={loggedIn}
        logout={logOut}
      />
      <br/>
      <Switch>
        <Route exact path="/"><Redirect to="/login" /></Route>
        <Route path="/login">
          <Login 
            setLoggedIn={setLoggedIn}
            setUser={setUser}
            newPatient={newPatient}
          />
        </Route>
        <Route path="/newpatient">
          <NewPatient 
            addPatient={addNewPatient}
          />
        </Route>

        <Route path="/provider">
          <Protected loggedIn={loggedIn}>
            <Provider provider={user}/>
          </Protected>
        </Route>
        
        <Route path="/patient">
          <Protected loggedIn={loggedIn}>
            <Patient patient={user} providers={providers}/>
          </Protected>
        </Route>
        

      </Switch>
    </div>
  );
}

export default App;
