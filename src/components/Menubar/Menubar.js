import React from 'react';
import logo from './instagram.png';
import './Menubar.css';

const Menubar = () => {
  return (
    <nav className="Nav">
      <div className="menus">
        <a href="/">
          <img src={logo} className="logo" alt="Instagram" />
        </a>
      </div>
    </nav>
  );
};
export default Menubar;
