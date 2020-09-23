import React from 'react';
import Comment from './Comment';
import '../../styles/Post.css';

const Post = (props) => {
  const { caption, path, user } = props.details;
  return (
    <div className="Post">
      <div className="user-details">
        <img className="user-avatar" src={user.avatarUrl} alt={user.username} />
        <span className="username">{user.username}</span>
      </div>
      <img className="post-image" src={path} alt="image" />
      <div className="post-caption">
        <span className="username">{user.username}</span> {caption}
      </div>
      <Comment />
    </div>
  );
};
export default Post;
