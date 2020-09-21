import React from 'react';
import instaApi from '../../instaApi';

const Login = () => {
  return (
    <div className="login-box">
      <p>Because every picture tells a story, let me help you tell yours.</p>
      <button onClick={() => instaApi.login()}>Sign In</button>;
    </div>
  );
};

export default Login;
