import React from 'react';

function Profile({ userName, description, profileImage }) {
  return (
    <div className="profile">
     
      <div className="profile-info">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <p>
          <strong>@</strong> {userName}
        </p>
        <p>
          <strong>Description</strong> {description}
        </p>
      </div>
    </div>
  );
}

export default Profile;

