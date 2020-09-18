import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Posts from '../components/Posts';
import InputPicture from '../components/NewPost/InputPicture';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Posts} exact />
      <Route path="/newPost" component={InputPicture} />
    </Switch>
  );
};

export default Routes;
