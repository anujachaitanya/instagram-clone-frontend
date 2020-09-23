import React from 'react';
import Logo from './Logo';
import Menus from './Menus';
import '../../styles/Menubar.css';

const Header = (props) => {
  const menubar = props.user ? <Menus user={props.user} /> : '';
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
