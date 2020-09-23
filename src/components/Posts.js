import React, { useEffect, useState } from 'react';
import Post from './Post/Post';
import instaApi from '../instaApi';
import _ from 'lodash';
import '../styles/Post.css';

const Posts = (props) => {
  const [postsData, setPosts] = useState([]);
  useEffect(() => {
    instaApi.getPosts(props.category).then(setPosts);
  }, [props.category]);

  const posts = Object.keys(postsData)
    .sort((a, b) => a - b)
    .reverse()
    .map((key, index) => {
      const parsedPost = JSON.parse(postsData[key]);
      return <Post details={parsedPost} key={index} />;
    });

  return <div className={props.class}>{posts}</div>;
};

Posts.defaultProps = {
  category: 'all',
  class: 'container',
};

export default Posts;
