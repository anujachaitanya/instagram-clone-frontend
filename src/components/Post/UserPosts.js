import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import instaApi from '../../instaApi';
import '../../styles/UserPosts.css';

const UserPosts = (props) => {
  const [postsData, setPosts] = useState([]);
  useEffect(() => {
    instaApi.getPosts(props.id).then((postsData) => {
      console.log(postsData);
      setPosts(postsData || []);
    });
  }, [props.id]);
  const posts = postsData.map((post, index) => {
    const { path, postId } = JSON.parse(post);
    return (
      <div key={index} className="preview-post">
        <Link to={`/post/${postId}`}>
          <div style={{ margin: 'auto 0' }}>
            <img src={path} className="image" />
          </div>
        </Link>
      </div>
    );
  });
  return <div className="post-container">{posts}</div>;
};
export default UserPosts;
