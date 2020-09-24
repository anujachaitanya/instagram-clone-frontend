import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Comment from './Comment';
import Like from './Like';
import instaApi from '../../instaApi';
import '../../styles/Post.css';
import UserContext from '../../UserContext';

const Post = (props) => {
  const currentUser = useContext(UserContext);

  const { caption, path, user, likes, postId } = props.details;
  const toggleLike = function () {
    instaApi.toggleLike(postId);
  };
  return (
    <div className="Post">
      <div className="user-details">
        <img className="user-avatar" src={user.avatarUrl} alt={user.username} />
        <Link to={`/user/${user.id}`} className="link-text">
          <span className="username">{user.username}</span>
        </Link>
      </div>

      <div>
        <img className="post-image" src={path} alt="image" />
      </div>
      <div>
        <Like
          isLiked={likes.includes(currentUser.id)}
          toggleLike={toggleLike}
        />
      </div>
      <div className="post-caption">
        <span className="username">{user.username}</span> {caption}
      </div>
      <Comment postId={postId} />
    </div>
  );
};
export default Post;
