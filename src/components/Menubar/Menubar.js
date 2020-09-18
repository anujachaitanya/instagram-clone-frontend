import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../../icons/HomeInActive.svg';
import NewPost from '../../icons/NewPostInActive.svg';
import './Menubar.css';

const MenuBar = () => {
  return (
    <div>
      <NavLink to="/" activeClassName="active-home" exact>
        <img src={Home} />
      </NavLink>
      <NavLink to="/newPost" activeClassName="active-newPost" exact>
        <img src={NewPost} />
      </NavLink>
    </div>
  );
};
export default MenuBar;
