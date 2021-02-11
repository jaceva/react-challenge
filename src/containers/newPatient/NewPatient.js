import React, { useState, useEffect } from 'react';

import { NewUserForm } from '../../components/newUserForm/NewUserForm';

export const NewPatient = ({addPatient}) => {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [usernameCheck, setUsernameCheck] = useState('No');
  const [passwordCheck, setPasswordCheck] = useState('Do Not ');
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    (username.length >= 8) ?
      setUsernameCheck('Yes') :
      setUsernameCheck('No');

    (password !== '' && password === confirm) ?
      setPasswordCheck('') :
      setPasswordCheck('Do Not ');

    (usernameCheck === 'Yes' && passwordCheck === '') ?
      setSubmitDisabled(false) :
      setSubmitDisabled(true);
  }, [username.length, 
      password, 
      confirm,
      usernameCheck,
      passwordCheck])

  return (
    <div>  
      <NewUserForm
        setFirstname={setFirstname}
        setLastname={setLastname} 
        setUsername={setUsername}
        usernameCheck={usernameCheck}
        setPassword={setPassword}
        setConfirm={setConfirm}
        passwordCheck={passwordCheck}
      />
      <button 
        disabled={submitDisabled}
        onClick={() => addPatient(firstname, lastname, username, password)}>Submit</button>
    </div>
  )
}