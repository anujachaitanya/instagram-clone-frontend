import React from 'react';
import Logo from './Logo';
import MenuBar from './Menubar';
import './Menubar.css';

const Header = (props) => {
  const menubar = props.isLoggedIn ? <MenuBar /> : '';
  return (
    <nav className="Nav">
      <div className="menus">
        <Logo />
        {menubar}
      </div>
    </nav>
  );
};

export default Header;
