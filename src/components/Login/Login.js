import React from 'react';
import instaApi from '../../instaApi';
import '../../styles/Login.css';
const Login = () => {
  return (
    <div className="log-in">
      <div className="tag-line">
        Because every picture tells a story, let me help you tell yours.
      </div>
      <span className="sign-in" onClick={() => instaApi.login()}>
        Sign In
      </span>
    </div>
  );
};

export default Login;
