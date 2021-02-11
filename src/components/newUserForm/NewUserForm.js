import React from 'react';

export const NewUserForm = ({
  setFirstname,
  setLastname,
  setUsername,
  usernameCheck,
  setPassword,
  setConfirm,
  passwordCheck
  }) => {
  return (
    <div>
      Add Patient Account<br />
      <br/>
      <label>First Name</label><br/>
      <input 
        type="text" 
        id="firstname"
        onChange={e => setFirstname(e.target.value)}>
      </input><br/>

      <label>Last Name</label><br/>
      <input 
        type="text" 
        id="lastname"
        onChange={e => setLastname(e.target.value)}>
      </input><br/>
      <br/>

      <label>Username</label><br/>
      <input 
        type="text" 
        id="username"
        onChange={e => setUsername(e.target.value)}>
      </input><br/>
      Username At Least 8 Characters: {usernameCheck}<br/>
      <br/>

      <label>Password</label><br/>
      <input 
        type="password" 
        id="password" 
        placeholder="Password" 
        onChange={e => setPassword(e.target.value)}>
      </input><br/>
      <input 
        type="password" 
        id="confirm" 
        placeholder="Confirm Password"  
        onChange={e => setConfirm(e.target.value)}
      ></input><br/>
      Passwords {passwordCheck}Match<br/>
      <br/>
    </div>
  )
}