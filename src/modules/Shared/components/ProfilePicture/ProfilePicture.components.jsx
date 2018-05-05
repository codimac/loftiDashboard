import React from 'react';

import './ProfilePicture.styles';

class ProfilePicture extends React.Component {

  render() {
    const { picture } = this.props;
    return (
      <div className="picture-container ml-2">
        <img className="picture" src={`public/images/${picture}`} alt="placeholder" />
      </div>
    );
  }

}

export default ProfilePicture;
