import React from 'react';

import { Redirect } from 'react-router-dom';

export const Protected = ({loggedIn=false, children}) => {
  if (!loggedIn){
    return <Redirect to='/' />
  }
  return (
    <>
      {children}
    </>
  );
}