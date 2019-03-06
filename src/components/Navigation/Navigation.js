import React from 'react';
import './Navigation.css';
import Login from './Login/Login';

function Navigation() {
  return (
    <div className='Navigation'>
      <span className="logo">Nuke control panel</span>
      <Login />
    </div>
  );
}

export default Navigation;