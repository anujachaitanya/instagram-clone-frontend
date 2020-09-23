import React from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment';
import '../../styles/Post.css';

const Post = (props) => {
  const { caption, path, user } = props.details;
  return (
    <div className="Post">
      <div className="user-details">
        <img className="user-avatar" src={user.avatarUrl} alt={user.username} />
        <Link to={`/user/${user.id}`} className="link-text">
          <span className="username">{user.username}</span>{' '}
        </Link>
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
