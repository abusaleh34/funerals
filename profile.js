import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  // We're using the useSelector hook to select the user piece of the state
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
    </div>
  );
}

export default Profile;
