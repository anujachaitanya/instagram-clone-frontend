import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../../icons/HomeInActive.svg';
import NewPost from '../../icons/NewPostInActive.svg';
import '../../styles/Menubar.css';

const MenuBar = () => {
  return (
    <div>
      <NavLink to="/" activeClassName="active-home" className="action" exact>
        <img src={Home} />
      </NavLink>
      <NavLink
        to="/newPost"
        activeClassName="active-newPost"
        className="action"
        exact
      >
        <img src={NewPost} />
      </NavLink>
    </div>
  );
};
export default MenuBar;
