import React from 'react';
import Logo from './Logo';
import MenuBar from './Menubar';
import './Menubar.css';

const Header = () => {
  return (
    <nav className="Nav">
      <div className="menus">
        <Logo />
        <MenuBar />
      </div>
    </nav>
  );
};

export default Header;
