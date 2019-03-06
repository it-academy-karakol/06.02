import React, { useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import AuthContext from '../../../contexts/AuthContext';

function Login() {
  // Context example for function
  const context = useContext(AuthContext);
  const buttonLabel = context.auth ? "Logout" : "Login";

  // Ref example for function
  const name = useRef(null);
  useEffect(() => {
    name.current.innerHTML = context.auth ? 'Trump' : '';
  });

  return (
    <div className='Login'>
      <span ref={name} className="name"></span>
      <button onClick={context.toggleHandler}>
        {buttonLabel}
      </button>
    </div>
  );
}

Login.propTypes = {
  auth: PropTypes.bool,
  toggleHandler: PropTypes.func
}

export default Login;