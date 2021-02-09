import React from 'react';

import { LoginForm } from '../../components/loginForm/LoginForm';
import { NewUserForm } from '../../components/newUserForm/NewUserForm';

export const Login = ({userType}) => {
  return (
    <div>
      <p>Login State: usernameField (for validation)</p>
      <h1>Login Page</h1>
      <p>This page is used to login and or to add a new user. Both forms redirect back to the Main page to confirm login, or to add a new user using the fake API.</p> 
      <p>The new user form will need visual validation on the username field, for example if it is not long enough or the name is already taken.</p>
      <LoginForm userType={userType} />
      <NewUserForm userType={userType} />
    </div>
  )
}