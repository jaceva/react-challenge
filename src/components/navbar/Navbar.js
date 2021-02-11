import React from 'react';

export const Navbar = ({name, loggedIn, logout}) => {
  return (
    <div>
      {name}
      <button disabled={!loggedIn} onClick={logout}>Log Out</button>
    </div>
  )
}