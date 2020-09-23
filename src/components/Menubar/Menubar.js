import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../../icons/HomeInActive.svg';
import NewPost from '../../icons/NewPostInActive.svg';
import '../../styles/Menubar.css';

const MenuBar = (props) => {
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
      <NavLink
        to={`/user/${props.user.id}`}
        className="action"
        activeClassName="active-avatar"
        exact
      >
        <img src={props.user.avatarUrl} className="avatar" />
      </NavLink>
    </div>
  );
};
export default MenuBar;
