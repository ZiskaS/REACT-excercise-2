import React from 'react';

function Profile({ userName, bio, avatar }) {
  return (
    <div className="profile">
      <div className="profile-info">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <p>
          <strong>@</strong> {userName}
        </p>
        <p>
          <strong>Bio</strong> {bio}
        </p>
      </div>
    </div>
  );
}

export default Profile;

