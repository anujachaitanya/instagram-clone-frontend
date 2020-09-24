import React, { useContext } from 'react';
import Logo from './Logo';
import Menus from './Menus';
import '../../styles/Menubar.css';
import UserContext from '../../UserContext';

const Header = (props) => {
  const user = useContext(UserContext);
  const menubar = user ? <Menus setUser={props.setUser} /> : '';
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
