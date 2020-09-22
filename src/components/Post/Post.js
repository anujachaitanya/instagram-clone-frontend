import React from 'react';
import Comment from './Comment';
import '../../styles/Post.css';

const Post = () => {
  return (
    <div className="Post">
      <div className="user-details">
        <img
          className="user-avatar"
          src="https://pbs.twimg.com/media/EKItK1CU4AIG-sY?format=jpg&name=medium"
          alt="hruta12"
        />
        <span className="username">Hruta12</span>
      </div>
      <img
        className="post-image"
        src="https://pbs.twimg.com/media/EZkbIHiWsAIr-Vx?format=jpg&name=medium"
        alt="hruta12 riding bicycle"
      />
      <div className="post-caption">
        <span className="username">Hruta12</span> Being Ananya !!
      </div>
      <Comment />
    </div>
  );
};
export default Post;
