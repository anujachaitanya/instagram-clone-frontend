import React, { useEffect, useState } from 'react';
import Post from './Post/Post';
import instaApi from '../instaApi';
import _ from 'lodash';
import '../styles/Post.css';

const Posts = (props) => {
  const [postsData, setPosts] = useState([]);
  useEffect(() => {
    instaApi.getPosts(props.category).then(setPosts);
    console.log(postsData);
  }, [props.category]);

  const posts = _.orderBy(postsData, null, 'desc').map((post, index) => {
    const parsedPost = JSON.parse(post);
    return <Post details={parsedPost} key={index} />;
  });

  return <div className={props.class}>{posts}</div>;
};

Posts.defaultProps = {
  category: 'all',
  class: 'container',
};

export default Posts;
