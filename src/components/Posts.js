import React, { useEffect, useState } from 'react';
import Post from './Post/Post';
import instaApi from '../instaApi';
import _ from 'lodash';
import '../styles/Post.css';

const Posts = (props) => {
  const [postsData, setPosts] = useState([]);
  useEffect(() => {
    instaApi.getPosts().then(setPosts);
    console.log(postsData);
  }, []);

  const posts = _.orderBy(postsData, null, 'desc').map((post, index) => {
    const parsedPost = JSON.parse(post);
    return <Post details={parsedPost} key={index} />;
  });

  return <div className="container">{posts}</div>;
};

export default Posts;
