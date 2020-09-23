import React from 'react';
import Logo from './Logo';
import MenuBar from './Menubar';
import '../../styles/Menubar.css';

const Header = (props) => {
  const menubar = props.user ? (
    <MenuBar avatarUrl={props.user.avatarUrl} />
  ) : (
    ''
  );
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
