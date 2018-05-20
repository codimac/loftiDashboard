import React from 'react';
import Proptypes from 'prop-types';

import './ProfilePicture.styles';

class ProfilePicture extends React.Component {

  static propTypes = {
    picture: Proptypes.string.isRequired
  };

  render() {
    const { picture } = this.props;
    return (
      <div className="picture-container ml-3">
        <img className="picture" src={`/public/images/${picture}`} alt="placeholder" />
      </div>
    );
  }

}

export default ProfilePicture;
