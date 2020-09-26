import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import instaApi from '../../instaApi';
import Posts from '../Posts';
import UserPosts from '../Post/UserPosts';
import '../../styles/UserProfile.css';

const UserProfile = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    instaApi.getUser(id).then(setUserDetails);
  }, [id]);
  console.log(userDetails);
  const { avatarUrl, username } = userDetails;
  return (
    <div>
      <div className="user-profile">
        <img src={avatarUrl} className="profile-picture" />
        <span className="user-name">{username}</span>
      </div>
      {/* <Posts class="user-posts" category={id} /> */}
      <UserPosts id={id} />
    </div>
  );
};

export default UserProfile;
