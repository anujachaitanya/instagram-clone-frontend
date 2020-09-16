import React from 'react';
import Post from './Post/Post';
import './Post/Post.css';

const Posts = (props) => {
  return (
    <div className="container">
      <Post />;
      <Post />;
      <Post />;
    </div>
  );
};

export default Posts;
