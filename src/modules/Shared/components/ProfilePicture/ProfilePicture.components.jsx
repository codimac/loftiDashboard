import React from 'react';
import profile from '@images/profile.png';

import './ProfilePicture.styles';

class ProfilePicture extends React.Component {

  render() {
    return (
      <div className="picture-container ml-2">
        <img className="picture" src={ profile } alt="placeholder" />
      </div>
    );
  }

}

export default ProfilePicture;
