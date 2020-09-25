import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import instaApi from '../../instaApi';
import Comment from './Comment';
import '../../styles/PostPage.css';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({ user: {} });
  const [refresh, toggleRefresh] = useState(true);
  useEffect(() => {
    instaApi.getPost(id).then(setPost);
  }, [refresh]);

  const postComment = function (input) {
    instaApi.addComment(input, id).then(() => toggleRefresh(!refresh));
  };

  const allComments =
    post.comments &&
    post.comments.map((comment, index) => (
      <div className="caption-details" key={index}>
        <span className="username">{comment.user}</span>
        {comment.comment}
      </div>
    ));
  return (
    <div className="page">
      <div className="image-div">
        <img className="post-image" src={post.path} alt="image" />
      </div>

      <div className="post-details">
        <div className="user-details">
          <img
            className="user-avatar"
            src={post.user.avatarUrl}
            alt={post.user.username}
          />
          <Link to={`/user/${post.user.id}`} className="link-text">
            <span className="username">{post.user.username}</span>
          </Link>
        </div>
        <div className="allComments">{allComments}</div>
        <div className="comments-section">
          <div className="caption-details">
            <span className="username">{post.user.username}</span>
            {post.caption}
          </div>
          <Comment onClick={postComment} />
        </div>
      </div>
    </div>
  );
};

export default PostPage;
