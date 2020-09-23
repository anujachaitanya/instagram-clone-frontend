import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../../icons/HomeInActive.svg';
import NewPost from '../../icons/NewPostInActive.svg';
import Logout from '../../icons/Logout.svg';
import instaApi from '../../instaApi';
import '../../styles/Menubar.css';

const Menus = (props) => {
  const logout = () => {
    instaApi.logout().then(() => props.setUser(null));
  };
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
        <img src={NewPost} alt="new post " />
      </NavLink>
      <NavLink
        to={`/user/${props.user.id}`}
        className="action"
        activeClassName="active-avatar"
        exact
      >
        <img src={props.user.avatarUrl} className="avatar" alt="user" />
      </NavLink>
      <NavLink to="/" className="action" activeClassName="active-avatar" exact>
        <img src={Logout} onClick={logout} className="action" />
      </NavLink>
    </div>
  );
};
export default Menus;
