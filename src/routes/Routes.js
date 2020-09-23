import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Posts from '../components/Posts';
import InputPicture from '../components/NewPost/InputPicture';
import Login from '../components/Login/Login';
import UserProfile from '../components/UserProfile/Profile';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Posts} exact />
      <Route path="/newPost" component={InputPicture} exact />
      <Route path="/user/:id" component={UserProfile} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
