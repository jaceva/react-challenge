import React, { useState } from 'react';

import { LoginForm } from '../../components/loginForm/LoginForm';
import { checkCredentials, getUser } from '../../data';

export const Login = ({
  setLoggedIn,
  setUser,
  newPatient
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitCredentials = () => {
    if(checkCredentials(username, password)){
      setUser(getUser(username));
      setLoggedIn(true);
    }
  }

  return (
    <div>
      <LoginForm 
        setUsername={setUsername}
        setPassword={setPassword}
        submit={submitCredentials}
      />
      <br/>
      <button onClick={newPatient}>Create New Patient Account</button>
    </div>
  );
}