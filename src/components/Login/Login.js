import React from 'react';
import instaApi from '../../instaApi';

const Login = () => {
  return <button onClick={() => instaApi.login()}>Sign In</button>;
};

export default Login;
