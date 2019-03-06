import React from 'react';

const AuthContext = React.createContext({
  auth: false,
  toggleHandler: () => {}
});

export default AuthContext;