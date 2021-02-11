import React from 'react';

export const LoginForm = ({
  setUsername,
  setPassword,
  submit}) => {
  return (
    <div>
      Log In<br/>
      <input 
        type="text" 
        id="username" 
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
      /><br/>
      
      <input 
        type="password" 
        id="password" 
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      /><br/>
      
      <button onClick={() => submit()}>Log In</button>
    </div>
  )
}