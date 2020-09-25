import React, { useContext, useEffect, useState } from 'react';
import Comments from '../../icons/Comments.svg';
import { Link, useHistory } from 'react-router-dom';
import Comment from './Comment';
import Like from './Like';
import instaApi from '../../instaApi';
import '../../styles/Post.css';
import UserContext from '../../UserContext';

const Post = (props) => {
  const currentUser = useContext(UserContext);
  const history = useHistory();

  const { caption, path, user, likes, postId } = props.details;
  const [noOfLikes, setLikes] = useState(likes.length);
  const comment = function (input) {
    instaApi.addComment(input, postId).then(() => {
      history.push(`/post/${postId}`);
    });
  };

  const toggleLike = function () {
    instaApi.toggleLike(postId).then(({ likes }) => setLikes(likes.length));
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
      <div className="actions">
        <Like
          isLiked={likes.includes(currentUser.id)}
          toggleLike={toggleLike}
        />
        <Link to={`/post/${postId}`}>
          <img className="comment-icon" src={Comments} />
        </Link>
      </div>
      <div className="likes">{noOfLikes} likes</div>
      <div className="post-caption">
        <span className="username">{user.username}</span> {caption}
      </div>
      <Comment onClick={comment} />
    </div>
  );
};
Post.defaultProps = {
  details: {
    likes: [],
  },
};
export default Post;
