import React from 'react';
import logo from '../../icons/instagram.png';
import '../../styles/Menubar.css';

const Logo = () => {
  return (
    <a href="/">
      <img src={logo} className="logo" alt="Instagram" />
    </a>
  );
};

export default Logo;
